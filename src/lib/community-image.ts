export const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

// Accept only bounded baseline/progressive JPEGs; discard metadata segments
// (including EXIF/GPS and comments) before storing. SVG/HTML are never served.
export function sanitizeCommunityJpeg(bytes: Uint8Array): Uint8Array {
  if (bytes.length > MAX_IMAGE_BYTES || bytes.length < 12 || bytes[0] !== 255 || bytes[1] !== 216 || bytes[bytes.length - 2] !== 255 || bytes[bytes.length - 1] !== 217) throw new Error("Geçersiz JPEG.");
  const chunks: Uint8Array[] = [bytes.slice(0, 2)];
  let offset = 2, hasFrame = false;
  while (offset + 4 <= bytes.length) {
    if (bytes[offset] !== 255) throw new Error("Geçersiz JPEG yapısı.");
    const marker = bytes[offset + 1];
    if (marker === 218) {
      if (!hasFrame) throw new Error("Görsel boyutları doğrulanamadı.");
      chunks.push(bytes.slice(offset));
      const result = new Uint8Array(chunks.reduce((n, c) => n + c.length, 0));
      let pos = 0; for (const chunk of chunks) { result.set(chunk, pos); pos += chunk.length; }
      return result;
    }
    const length = (bytes[offset + 2] ?? 0) * 256 + (bytes[offset + 3] ?? 0);
    if (length < 2 || offset + 2 + length > bytes.length) throw new Error("Geçersiz JPEG uzunluğu.");
    if (marker === 192 || marker === 194) {
      const height = (bytes[offset + 5] ?? 0) * 256 + (bytes[offset + 6] ?? 0);
      const width = (bytes[offset + 7] ?? 0) * 256 + (bytes[offset + 8] ?? 0);
      if (!width || !height || width > 1600 || height > 1600) throw new Error("Görsel en fazla 1600 piksel olabilir.");
      hasFrame = true;
    }
    if (!(marker !== undefined && marker >= 224 && marker <= 239) && marker !== 254) chunks.push(bytes.slice(offset, offset + length + 2));
    offset += length + 2;
  }
  throw new Error("Geçersiz JPEG.");
}

export async function prepareCommunityImage(file: File): Promise<string> {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > MAX_IMAGE_BYTES || file.size === 0) throw new Error("JPEG, PNG veya WebP seçin; dosya en fazla 3 MB olabilir.");
  const bitmap = await createImageBitmap(file);
  try {
    if (bitmap.width * bitmap.height > 40_000_000) throw new Error("Görsel çözünürlüğü çok yüksek.");
    const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale)); canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Görsel hazırlanamadı.");
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85).split(",")[1] ?? "";
  } finally { bitmap.close(); }
}
