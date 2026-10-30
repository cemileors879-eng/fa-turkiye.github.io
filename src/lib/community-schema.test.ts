import { describe, expect, it } from "vitest";
import { communitySchema, commentSchema, reportSchema } from "./community-schema";
const valid = { title: "Benim hayat hikâyem", anonymous: true, displayName: "", message: "Birlikte bilgi paylaşmak ve dayanışmak önemli.", memberLabel: "", consent: true, website: "" };
describe("community validation", () => {
  it("accepts anonymous and alias posts", () => {
    expect(communitySchema.safeParse(valid).success).toBe(true);
    expect(communitySchema.safeParse({ ...valid, anonymous: false, displayName: "Umut", memberLabel: "hasta_yakini" }).success).toBe(true);
  });
  it("rejects missing aliases, consent, short and excessive messages", () => {
    for (const change of [{ anonymous: false }, { consent: false }, { message: "kısa" }, { message: "x".repeat(2001) }]) expect(communitySchema.safeParse({ ...valid, ...change }).success).toBe(false);
  });
  it("rejects markup, contact details, spam traps and status injection", () => {
    for (const change of [{ message: "<script>alert(1)</script>" }, { message: "Bana test@example.com adresinden ulaşın." }, { message: "Telefonum 05321234567, arayın." }, { message: "https://example.com adresine bakın." }, { website: "spam" }, { status: "approved" }]) expect(communitySchema.safeParse({ ...valid, ...change }).success).toBe(false);
  });
  it("validates abuse reports", () => {
    const report = { postId: "9ccd9fd3-6a99-4842-978f-e08d6360e460", reason: "gizlilik", details: "", website: "" };
    expect(reportSchema.safeParse(report).success).toBe(true);
    expect(reportSchema.safeParse({ ...report, reason: "approve" }).success).toBe(false);
    expect(reportSchema.safeParse({ ...report, details: "x".repeat(501) }).success).toBe(false);
    expect(reportSchema.safeParse({ ...report, reason: "uygunsuz_video" }).success).toBe(true);
  });
  it("accepts only allowlisted video pages and blocks moderation injection", () => {
    expect(communitySchema.safeParse({ ...valid, videoUrl: "https://youtu.be/aqz-KE-bpKQ" }).success).toBe(true);
    for (const videoUrl of ["http://youtu.be/aqz-KE-bpKQ", "javascript:alert(1)", "https://youtube.com.evil.test/watch?v=aqz-KE-bpKQ", "https://user:pass@youtube.com/watch?v=aqz-KE-bpKQ", "https://localhost/video.mp4", "https://www.youtube.com/redirect?q=https://evil.test", "https://vimeo.com/123456#secret"]) expect(communitySchema.safeParse({ ...valid, videoUrl }).success).toBe(false);
    expect(communitySchema.safeParse({ ...valid, video_status: "approved" }).success).toBe(false);
  });
  it("requires story titles and limits photos", () => {
    expect(communitySchema.safeParse({ ...valid, title: "" }).success).toBe(false);
    expect(communitySchema.safeParse({ ...valid, images: Array(5).fill("abc") }).success).toBe(false);
  });
  it("validates anonymous threaded replies without visitor status control", () => {
    const reply = { postId: "9ccd9fd3-6a99-4842-978f-e08d6360e460", parentId: null, anonymous: true, displayName: "", message: "Yanınızdayız.", memberLabel: "", consent: true, website: "" };
    expect(commentSchema.safeParse(reply).success).toBe(true);
    for (const change of [{ status: "approved" }, { parentId: "invalid" }, { message: "https://example.com" }, { consent: false }]) expect(commentSchema.safeParse({ ...reply, ...change }).success).toBe(false);
  });
});
