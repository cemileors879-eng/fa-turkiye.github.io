<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Share browser-safe Turkish editorial sections and sources across cards/details; keep SGT-212 regulatory history separate from trial tracking/calendar to avoid implying recruitment changes.
- Use separate TanStack leaf routes for each navigation destination and internal dynamic article routes; this ensures shareable pages have unique metadata.
- Render common portal header/footer in the root and semantic visual styles in the global design system; this keeps every content page consistent.
- Use the shared BrandWordmark for header/footer identity and mirror its original infinity geometry and identity tokens in the favicon; this preserves a consistent mark at every size without external logo dependencies.
- Show unverified treatment stages without stage advancement and distinguish evidence from approval; this prevents misleading research presentation.
- Derive latest-update ordering from existing record date labels without changing article data; year-only dates follow fully dated records in the same year to avoid fabricating chronology.
- Require a complete unique cover object on every article, validate cover uniqueness in shared data, and render it through ArticleCover without a fallback; this prevents different news records from silently sharing a default image while keeping featured, card and detail views consistent.
- Keep drug library entries in src/lib/drug-library.ts with category, hedged status, uncertain notes and sources, no dosing; this keeps approved/supportive/experimental separation consistent.
- Store full sourced news and library narratives in browser-safe editorial detail modules and require complete per-entry sections; this prevents detail pages from silently falling back to short summaries while sharing verified research explanations.
- Keep non-news illustrative photography in a browser-safe editorial-photography module, with descriptive accessible alt text and any mandatory attributions rather than automatic generation labels; this keeps imagery separate from medical facts without unnecessary warnings.
- Keep verified research profiles in a shared browser-safe research-pipeline module consumed by calendar, treatment tracking and library details, retaining historical library text separately; this prevents phase, identity and date discrepancies without deleting existing editorial content.
- Render multiple LX2006 trials and clinical news under its single candidate identity, with shared trial records on calendar and detail pages; trial names must not create duplicate drug candidates.
- Keep the Treatments display scoped to approved FA therapy and group experimental profiles with their existing news under Clinical Research; this prevents approval confusion without removing library or calendar records.

- Guidance (finder, trust panel, next steps) lives in src/lib/guidance.ts + components/portal/guidance.tsx; stage badges and source types are derived from existing phase/URL data so no medical facts are duplicated.
- Community writes use strictly validated public server functions with server-fixed pending status; only approved posts are publicly readable and reports/notes stay private, preventing unreviewed medical claims and data leakage.
- Community moderation is performed by authorized Lovable Cloud editors through the posts/reports queues, not by visitor-controlled roles; this avoids adding an unsecured moderator login or automatic approvals.
- Community images are metadata-stripped bounded JPEGs in private Storage, served through a no-store endpoint only while both post and image are approved; this keeps pending or hidden media inaccessible even through old links.
- Story photos use independent community_media rows while legacy single-photo posts remain readable; this enables per-photo moderation without losing existing content.
- Story conversations use parent-linked community_comments with immutable same-story ancestry and public ancestor-approved recursive views; this prevents hidden conversation branches from leaking or reparenting across stories.
- Community videos use canonical HTTPS YouTube/Vimeo links with independent moderation, never embeds or server fetches; this avoids visitor-controlled network requests and tracking before a user explicitly opens the provider.
- Keep association gallery separate from visitor posts and empty until authorized editorial media exists; this avoids presenting visitor media or invented events as association publications.
- Research alert subscriptions are double opt-in, server-only tables (research_alert_subscriptions/outbox) written via validated server functions; nothing is sent until a dedicated list-email provider is connected, because list alerts are not transactional.
- Keep news-specific registry/contact snapshots on shared article records and render them through NewsParticipation in news cards and details; source dates and overseas eligibility caveats must remain consistent across news, home and tracker.
- Drug cards use .clickable-card + .card-main-link; details render DrugOverview with explicit missing-data text, so cards stay consistent.

