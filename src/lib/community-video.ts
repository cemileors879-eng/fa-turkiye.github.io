/** Only canonical HTTPS video pages; never fetch, embed or execute visitor URLs. */
export function normalizeCommunityVideo(value: string): string | null {
  if (!value || value.length > 300) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password || url.port || url.hash) return null;
    const host = url.hostname;
    if (["youtube.com", "www.youtube.com", "m.youtube.com"].includes(host)) {
      const id = url.pathname === "/watch" ? url.searchParams.get("v") : url.pathname.match(/^\/(?:shorts|live)\/([A-Za-z0-9_-]{11})\/?$/)?.[1];
      return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? `https://www.youtube.com/watch?v=${id}` : null;
    }
    if (host === "youtu.be" && /^\/[A-Za-z0-9_-]{11}\/?$/.test(url.pathname)) return `https://www.youtube.com/watch?v=${url.pathname.split("/")[1]}`;
    if (["vimeo.com", "www.vimeo.com"].includes(host) && /^\/[0-9]{6,12}\/?$/.test(url.pathname)) return `https://vimeo.com/${url.pathname.split("/")[1]}`;
    return null;
  } catch { return null; }
}
