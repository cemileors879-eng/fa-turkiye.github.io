import { describe, expect, it } from "vitest";
import { normalizeCommunityVideo } from "./community-video";
describe("canonical community video links", () => {
  it("strips tracking and normalizes providers", () => {
    expect(normalizeCommunityVideo("https://youtu.be/aqz-KE-bpKQ?si=tracking")).toBe("https://www.youtube.com/watch?v=aqz-KE-bpKQ");
    expect(normalizeCommunityVideo("https://www.youtube.com/shorts/aqz-KE-bpKQ")).toBe("https://www.youtube.com/watch?v=aqz-KE-bpKQ");
    expect(normalizeCommunityVideo("https://vimeo.com/12345678?tracking=1")).toBe("https://vimeo.com/12345678");
  });
  it("rejects arbitrary files, hosts, credentials and malformed URLs", () => {
    for (const value of ["", "not a url", "https://example.com/video.mp4", "https://www.youtube.com:444/watch?v=aqz-KE-bpKQ", "https://vimeo.com/channels/12345678", "https://youtu.be/short"]) expect(normalizeCommunityVideo(value)).toBeNull();
  });
});
