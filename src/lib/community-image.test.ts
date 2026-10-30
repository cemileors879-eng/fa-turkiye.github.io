import { describe, it, expect } from "vitest";
import { sanitizeCommunityJpeg, MAX_IMAGE_BYTES } from "./community-image";
describe("community image validation", () => {
  const frame = [255,192,0,11,8,0,10,0,10,1,1,17,0];
  const valid = new Uint8Array([255,216,...frame,255,218,0,2,1,2,255,217]);
  it("accepts bounded JPEG and strips EXIF/comments", () => {
    expect(sanitizeCommunityJpeg(valid)).toEqual(valid);
    const withMetadata = new Uint8Array([255,216,255,225,0,5,65,66,67,255,254,0,4,68,69,...valid.slice(2)]);
    expect(sanitizeCommunityJpeg(withMetadata)).toEqual(valid);
  });
  it("rejects SVG, spoofed signatures, oversize and excessive dimensions", () => {
    expect(() => sanitizeCommunityJpeg(new TextEncoder().encode("<svg>unsafe</svg>"))).toThrow();
    expect(() => sanitizeCommunityJpeg(new Uint8Array([255,216,0,0,0,0,0,0,0,0,255,217]))).toThrow();
    expect(() => sanitizeCommunityJpeg(new Uint8Array(MAX_IMAGE_BYTES + 1))).toThrow();
    const huge = valid.slice(); huge[7] = 9;
    expect(() => sanitizeCommunityJpeg(huge)).toThrow();
  });
});
