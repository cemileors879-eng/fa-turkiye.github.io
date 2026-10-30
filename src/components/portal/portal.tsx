import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  Menu,
  X,
  CalendarDays,
  Clock3,
  ChevronRight,
  ShieldCheck,
  FlaskConical,
  Info,
  ExternalLink,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles, latestUpdates, treatments, calendar, type Article, type Evidence } from "@/lib/portal-data";
import { ArticleCover } from "./article-cover";
import { NewsParticipation } from "./news-participation";
import { BrandWordmark } from "./brand";
import { ApprovedTreatment } from "./approved-treatment";
import { consultationCover } from "@/lib/editorial-photography";
import { pipelineCandidates } from "@/lib/research-pipeline";
import { CandidateStudies } from "./candidate-studies";
import { QuickAccess, EligibilityNotice, ForYouCta, NextSteps, SourceList, TrustPanel } from "./guidance";
const nav = [
  { to: "/haberler", label: "Son Haberler" },
  { to: "/tedaviler", label: "Tedaviler" },
  { to: "/ilac-kutuphanesi", label: "İlaç Kütüphanesi" },
  { to: "/klinik-arastirmalar", label: "Klinik Araştırmalar" },
  { to: "/arastirma-takip-merkezi", label: "Araştırma Takip Merkezi" },
  { to: "/fa-toplulugu", label: "FA Türkiye Topluluğu" },
  { to: "/arastirma-takvimi", label: "Araştırma Takvimi" },
  { to: "/fa-nedir", label: "FA Nedir?" },
  { to: "/goz-ve-gorme", label: "Göz ve Görme" },
  { to: "/nereden-baslamaliyim", label: "Yeni Başlayanlar" },
  { to: "/bilimsel-kaynaklar", label: "Bilimsel Kaynaklar" },
  { to: "/hakkimizda", label: "Hakkımızda" },
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-card border-b border-border">
      <div className="utility-bar">
        <div className="page-width flex h-8 items-center justify-between">
          <span className="flex items-center gap-2">
            <ShieldCheck size={12} /> Bilimsel bilgi. Güvenilir kaynaklar.
          </span>
          <span className="flex items-center gap-3"><IstanbulDate /><AccessibilityControls /></span>
        </div>
      </div>
      <div className="page-width masthead">
        <Link to="/" aria-label="FA Türkiye ana sayfa">
          <BrandWordmark />
          <div className="brand-caption">Friedreich Ataksisi Haber Merkezi</div>
        </Link>
        <form
          action="/haberler"
          className="hidden md:flex items-center rounded-md border border-border bg-muted px-3 gap-2 w-72"
        >
          <Search size={16} className="text-muted-foreground" />
          <input
            name="q"
            aria-label="Haber veya tedavi ara"
            placeholder="Haber, tedavi veya araştırma ara…"
            className="w-full py-3 bg-transparent outline-none text-xs"
          />
          <Button variant="ghost" size="icon" type="submit" aria-label="Ara">
            <ArrowRight />
          </Button>
        </form>
        <div className="hidden lg:flex items-center gap-2 border-l border-border pl-6 text-xs text-muted-foreground">
          <Activity size={18} className="text-brand" />
          <span>
            Bilgiyi paylaş.
            <br />
            <strong className="text-primary font-semibold">Umudu bilimle büyüt.</strong>
          </span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-full-menu"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <nav aria-label="Ana menü" className="border-y border-border">
        <div className="page-width hidden md:flex flex-wrap justify-between gap-x-3">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="nav-link">
              {n.label}
            </Link>
          ))}
        </div>
        {open && (
          <div id="mobile-full-menu" className="page-width grid grid-cols-2 md:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="nav-link" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
          </div>
        )}
        <nav aria-label="Mobil hızlı erişim" className="mobile-section-nav md:hidden" tabIndex={0}>
          {[nav[0], nav[1], nav[6], nav[3], nav[2], nav[4], nav[5]].map(n => (
            <Link key={n.to} to={n.to} className="nav-link" activeProps={{ "aria-current": "page" }} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-muted">
      <div className="page-width py-10">
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div>
            <Link to="/" aria-label="FA Türkiye ana sayfa">
              <BrandWordmark compact />
            </Link>
            <p className="text-xs text-muted-foreground mt-3">
              Bilgiyi paylaş. Araştırmayı takip et. Umudu bilimle büyüt.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-semibold">
            <Link to="/fa-toplulugu">FA Türkiye Topluluğu</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/bilimsel-kaynaklar">Bilimsel Kaynaklar</Link>
            <Link to="/fa-nedir">FA Nedir?</Link>
            <Link to="/goz-ve-gorme">Göz ve Görme</Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-border mt-7 pt-5 text-[11px] text-muted-foreground">
          <p>Bu site bilgilendirme amaçlıdır; tıbbi tavsiye değildir.</p>
          <span>© 2026 FA Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
export function EvidenceBadge({ kind, children }: { kind: Evidence; children: React.ReactNode }) {
  return <span className={`evidence evidence-${kind}`}>{children}</span>;
}
export function SectionTitle({
  title,
  to,
  label = "Tümünü gör",
}: {
  title: string;
  to?: "/haberler" | "/tedaviler" | "/arastirma-takvimi";
  label?: string;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {to && (
        <Link to={to} className="flex items-center gap-1 text-[11px] font-bold text-brand">
          {label}
          <ArrowRight size={13} />
        </Link>
      )}
    </div>
  );
}
export function StoryCard({ article }: { article: Article }) {
  return (
    <article className="article-card block">
    <Link to="/haber/$slug" params={{ slug: article.slug }} className="block">
      <div className="research-thumb aspect-[1.9]">
        <ArticleCover cover={article.cover} />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center gap-2">
          <span className="eyebrow">{article.category}</span>
          <EvidenceBadge kind={article.evidence}>{article.evidenceText}</EvidenceBadge>
        </div>
        <h3 className="mt-3 text-[15px] leading-relaxed font-extrabold text-primary">
          {article.shortTitle}
        </h3>
        <p className="text-xs text-muted-foreground leading-6 mt-2 line-clamp-2">
          {article.description}
        </p>
        <div className="flex justify-between mt-4 text-[10px] text-muted-foreground">
          <span>{article.date}</span>
          <span className="flex items-center gap-1">
            {article.readTime}
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
    {article.participation && <div className="px-4 pb-4"><NewsParticipation article={article} /></div>}
    </article>
  );
}
export function TreatmentCenter({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "max-w-5xl" : ""}><ApprovedTreatment /></div>;
}
export function EvidenceLegend() {
  return (
    <div className="mt-7 border-t border-border pt-5">
      <h3 className="text-xs font-bold mb-3">Kanıt rozetlerini nasıl okumalı?</h3>
      <div className="flex flex-wrap gap-3">
        <EvidenceBadge kind="green">Daha güçlü klinik kanıt</EvidenceBadge>
        <EvidenceBadge kind="yellow">Umut verici erken insan verisi</EvidenceBadge>
        <EvidenceBadge kind="blue">Klinik çalışma sürüyor</EvidenceBadge>
        <EvidenceBadge kind="gray">Preklinik / laboratuvar</EvidenceBadge>
      </div>
      <p className="text-[11px] text-muted-foreground mt-3">
        Rozetler onay durumunu veya bireysel yararı göstermez. “Değerlendirme bekleniyor” gri
        rozeti, kanıtın henüz doğrulanmadığını belirtir.
      </p>
    </div>
  );
}
export function CalendarList() {
  return (
    <div>
      {calendar.map((c) => (
        <Link
          key={c.name}
          to="/haber/$slug"
          params={{ slug: c.slug }}
          className="flex gap-4 items-center py-4 border-b border-border last:border-0"
        >
          <div className="bg-brand-soft text-brand rounded-md w-14 py-2 text-center shrink-0">
            <div className="text-lg font-extrabold">{c.period}</div>
            <div className="text-[10px] font-semibold">{c.year}</div>
          </div>
          <div>
            <h3 className="text-xs font-bold">{c.name}</h3>
            <p className="text-[11px] text-muted-foreground mt-1">{c.text}</p>
            <span className="text-[9px] text-brand mt-1 block">Beklenen güncelleme</span>
          </div>
          <ChevronRight size={14} className="ml-auto text-muted-foreground" />
        </Link>
      ))}
    </div>
  );
}
export function Sidebar() {
  return (
    <aside className="space-y-7">
      <div>
        <div className="flex items-center gap-2 border-b border-border pb-4">
          <span className="w-2 h-2 rounded-full bg-brand" />
          <h2 className="font-extrabold text-base text-primary">Araştırma gündemi</h2>
        </div>
        {[articles[2], articles[1]].map((a) => (
          <Link
            key={a.slug}
            to="/haber/$slug"
            params={{ slug: a.slug }}
            className="block py-5 border-b border-border"
          >
            <span className="eyebrow">{a.category}</span>
            <h3 className="text-[14px] font-bold leading-6 mt-2">{a.shortTitle}</h3>
            <p className="text-[11px] text-muted-foreground mt-2 leading-5">{a.description}</p>
            <div className="text-[10px] text-muted-foreground mt-3 flex items-center gap-1">
              <CalendarDays size={11} />
              {a.date}
              <ArrowUpRight size={14} className="ml-auto text-brand" />
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-brand-soft border-l-3 border-brand py-4 px-5">
        <div className="flex gap-2 items-center text-brand font-bold text-xs">
          <ShieldCheck size={17} />
          Bilimsel şeffaflık
        </div>
        <p className="text-[11px] text-muted-foreground mt-2 leading-6">
          Her bulguyu kanıt düzeyi ve sınırlılıklarıyla birlikte değerlendiriyoruz.
        </p>
        <Link
          to="/hakkimizda"
          className="text-[11px] text-brand font-bold flex gap-1 items-center mt-2"
        >
          Yayın ilkelerimiz
          <ArrowRight size={12} />
        </Link>
      </div>
    </aside>
  );
}
export function LatestUpdates({ limit }: { limit?: number } = {}) {
  return (
    <section aria-labelledby="latest-updates-heading" className="mt-9">
      <div className="section-title">
        <h2 id="latest-updates-heading">Son Güncellemeler</h2>
        <Link to="/haberler" className="flex items-center gap-1 text-[11px] font-bold text-brand">
          Tüm haberler <ArrowRight size={13} />
        </Link>
      </div>
      <div className="grid gap-3">
        {(limit ? latestUpdates.slice(0, limit) : latestUpdates).map((a) => (
          <Link key={a.slug} to="/haber/$slug" params={{ slug: a.slug }} className="article-card update-card">
            <div className="update-date">
              <CalendarDays size={16} aria-hidden="true" />
              <span>{a.date}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold text-primary leading-6">{a.title}</h3>
              <p className="text-xs text-muted-foreground leading-6 mt-2">{a.description}</p>
            </div>
            <span className="flex gap-2 items-center text-brand text-[11px] font-bold whitespace-nowrap">
              Haberi oku <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <p className="text-[11px] text-muted-foreground mt-3 leading-5">
        Gün ve ay belirtilmeyen kayıtlar, aynı yıldaki kesin tarihli kayıtların ardından gösterilir; yeni tarih atanmaz.
      </p>
    </section>
  );
}
import { LatestResearch } from "./research-tracker";
import { AccessibilityControls, IstanbulDate, WeeklyChanges } from "./site-extras";
export function Home() {
  return (
    <main>
      <section className="consultation-hero" aria-label="FA Türkiye">
        <ArticleCover cover={consultationCover} priority />
        <div className="page-width consultation-copy">
          <h1>
            <span className="consultation-brand">FA Türkiye</span>
            <span className="consultation-title">– Friedreich Ataksisi Haber Merkezi</span>
          </h1>
          <p>Bilgiyi paylaş. Araştırmayı takip et. Umudu bilimle büyüt.</p>
        </div>
      </section>
      <div className="page-width">
        <ForYouCta />
        <QuickAccess />
        <WeeklyChanges />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.35fr)_minmax(260px,1fr)] gap-8">
          <LatestUpdates limit={5} />
          <aside className="mt-9">
            <SectionTitle title="En Çok Okunanlar" />
            <p className="text-[10px] text-muted-foreground -mt-3 mb-2">Editör seçkisi · okuma verisi henüz yok</p>
            {articles.filter((a) => !latestUpdates.slice(0, 5).some((l) => l.slug === a.slug)).slice(0, 3).map((a, i) => (
              <Link to="/haber/$slug" params={{ slug: a.slug }} key={a.slug} className="flex gap-4 py-4 border-b border-border">
                <span className="text-2xl font-extrabold text-border">0{i + 1}</span>
                <div>
                  <h3 className="text-[12px] font-bold leading-5">{a.shortTitle}</h3>
                  <p className="text-[10px] text-muted-foreground mt-2">{a.category.toLocaleLowerCase("tr")} · {a.readTime}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>
        <p className="text-[11px] text-muted-foreground mt-8 mb-10 leading-6">FA Türkiye bir haber ve bilgilendirme sitesidir; araştırma yürütmez. Haberler editoryal olarak eklenir; otomatik anlık güncelleme yapılmaz. Erken klinik bulgular kesin tedavi başarısı değildir.</p>
      </div>
    </main>
  );
}
export function Listing({
  clinical = false,
  initialQuery = "",
}: {
  clinical?: boolean;
  initialQuery?: string;
}) {
  const [q, setQ] = useState(initialQuery);
  const [treatment, setTreatment] = useState("");
  const [phase, setPhase] = useState("");
  const [year, setYear] = useState("");
  // Newest publication date first (stable for equal dates).
  const items = latestUpdates.filter(
    (a) =>
      (!clinical || a.evidence !== "gray") &&
      (!treatment || a.treatment === treatment) &&
      (!phase || a.phase === phase) &&
      (!year || a.year === year) &&
      (a.title + " " + a.description + " " + a.treatment)
        .toLocaleLowerCase("tr")
        .includes(q.toLocaleLowerCase("tr")),
  );
  const lx2006 = pipelineCandidates.find(c => c.slug === "lx2006");
  const lxNews = clinical ? items.filter(a => a.treatment === "LX2006") : [];
  const visibleItems = clinical ? items.filter(a => a.treatment !== "LX2006" || a.slug === lxNews[0]?.slug) : items;
  return (
    <div className="page-width py-9">
      <PageTitle
        title={clinical ? "Klinik Araştırmalar" : "Son Haberler"}
        description={
          clinical
            ? "Friedreich ataksisinde yürütülen insan çalışmalarını, bulguları ve kanıtın sınırlarını takip edin."
            : "Araştırma ve tedavi geliştirme haberleri; bilimsel bağlamı ve sınırlılıklarıyla."
        }
      />
      <div className="flex flex-wrap gap-3 mb-7">
        <label className="flex flex-1 min-w-52 items-center gap-2 border border-border rounded-md px-3">
          <Search size={16} className="text-muted-foreground" />
          <input
            aria-label="Haberlerde ara"
            placeholder="Haberlerde ara…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="bg-transparent outline-none py-3 w-full text-xs"
          />
        </label>
        <div className="grid grid-cols-3 gap-2 w-full sm:w-auto">
          <select
            className="filter-select"
            aria-label="Tedavi filtresi"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          >
            <option value="">Tüm tedaviler</option>
            {treatments.map((t) => (
              <option key={t.name}>{t.name}</option>
            ))}
          </select>
          <select
            className="filter-select"
            aria-label="Aşama filtresi"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value="">Tüm aşamalar</option>
            <option>Faz 1/2</option>
            <option>Faz 1b</option>
            <option>Kayıt amaçlı çalışma</option>
            <option>Faz 2</option>
            <option>Faz 3</option>
            <option>Doğrulanıyor</option>
          </select>
          <select
            className="filter-select"
            aria-label="Yıl filtresi"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Tüm yıllar</option>
            <option>2026</option>
            <option>2027</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center text-xs text-muted-foreground mb-5">
        <span>{items.length} haber</span>
        {(q || treatment || phase || year) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQ("");
              setTreatment("");
              setPhase("");
              setYear("");
            }}
          >
            <X />
            Filtreleri temizle
          </Button>
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleItems.map((a) => clinical && a.treatment === "LX2006" && lx2006 ? (
          <article key={lx2006.slug} className="article-card clickable-card" aria-label="LX2006 araştırma adayı">
            <div className="research-thumb"><ArticleCover cover={a.cover} /></div>
            <div className="p-5">
              <Link to="/ilac-kutuphanesi/$slug" params={{ slug: lx2006.slug }} className="card-main-link text-xl font-extrabold text-primary">LX2006</Link>
              <p className="text-xs text-muted-foreground mt-2">{lx2006.developer} · {lx2006.type}</p>
              <CandidateStudies candidate={lx2006} />
              <h3 className="font-bold text-sm text-primary mt-4">İlgili araştırma haberleri</h3>
              <ul className="divide-y divide-border">
                {lxNews.map(news => <li key={news.slug} className="py-3">
                  <p className="text-xs text-muted-foreground">{news.date}</p>
                  <Link to="/haber/$slug" params={{ slug: news.slug }} className="text-sm font-bold text-primary leading-6">{news.title}</Link>
                  <p className="text-xs leading-6 mt-1">{news.description}</p>
                </li>)}
              </ul>
            </div>
          </article>
        ) : <StoryCard key={a.slug} article={a} />)}
      </div>
      {!items.length && (
        <div className="py-20 text-center">
          <Search size={30} className="mx-auto text-muted-foreground" />
          <h2 className="mt-4 font-bold">Eşleşen haber bulunamadı</h2>
          <p className="mt-2 text-muted-foreground">
            Aramanızı veya filtrelerinizi değiştirebilirsiniz.
          </p>
        </div>
      )}
    </div>
  );
}
export function PageTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <Link to="/" className="text-[11px] text-muted-foreground flex items-center gap-1 mb-4">
        Ana sayfa
        <ChevronRight size={12} />
        {title}
      </Link>
      <h1 className="font-extrabold text-3xl text-primary">{title}</h1>
      <p className="mt-3 text-sm text-muted-foreground leading-7 max-w-3xl">{description}</p>
    </div>
  );
}
export function ArticlePage({ article: a }: { article: Article }) {
  return (
    <main className="page-width py-7">
      <div className="flex gap-2 text-[11px] text-muted-foreground mb-7">
        <Link to="/">Ana sayfa</Link>
        <ChevronRight size={12} />
        <Link to="/haberler">Haberler</Link>
        <ChevronRight size={12} />
        <span>{a.treatment}</span>
      </div>
      <div className="grid lg:grid-cols-[minmax(0,2.3fr)_minmax(260px,1fr)] gap-12">
        <article>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="eyebrow">{a.category}</span>
            <EvidenceBadge kind={a.evidence}>{a.evidenceText}</EvidenceBadge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug text-primary mt-5">
            {a.title}
          </h1>
          <p className="text-base leading-8 text-muted-foreground mt-5">{a.description}</p>
          <div className="flex flex-wrap gap-5 text-xs text-muted-foreground mt-5 mb-6">
            <span className="record-update-date">
              <CalendarDays size={14} />
              <span><span className="block text-[10px] font-semibold">Güncelleme tarihi · mevcut kayıt</span><strong className="block text-sm mt-1">{a.date}</strong></span>
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={14} />
              {a.readTime}
            </span>
            <span>FA Türkiye · Araştırma haberi</span>
          </div>
          <div className="research-thumb rounded-md aspect-[2]">
            <ArticleCover cover={a.cover} priority />
          </div>
          <div className="grid sm:grid-cols-3 gap-5 py-6 border-b border-border">
            <div>
              <span className="text-[10px] text-muted-foreground">ARAŞTIRMA AŞAMASI</span>
              <p className="font-bold mt-1">{a.phase}</p>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground">HASTA SAYISI</span>
              <p className="font-bold mt-1 text-xs leading-5">{a.patients}</p>
            </div>
            <div>
              <span className="text-[10px] text-muted-foreground">KANIT DÜZEYİ</span>
              <p className="font-bold mt-1 text-xs">{a.evidenceText}</p>
            </div>
          </div>
          <TrustPanel updated={a.date} evidence={a.evidenceText} phase={a.phase} sources={a.sources} />
          <NewsParticipation article={a} />
          <div className="notice mt-6 flex gap-3">
            <Info size={19} className="shrink-0 mt-1" />
            <p>{a.warning}</p>
          </div>
          <div className="article-body">
            {a.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <section className="border-t border-border mt-10 pt-7">
            <h2 className="text-xl font-extrabold mb-3">Orijinal Kaynaklar</h2>
            <p className="text-xs text-muted-foreground mb-4 leading-6">
              Bu makale resmi kaynaklara dayanan özgün Türkçe bir araştırma haberidir. Şirket duyuruları bağımsız, hakemli
              etkinlik kanıtıyla eşdeğer değildir.
            </p>
            <SourceList sources={a.sources} />
            <p className="text-[11px] text-muted-foreground mt-5">
              Bu site bilgilendirme amaçlıdır; tıbbi tavsiye değildir.
            </p>
          </section>
          <EligibilityNotice />
          <NextSteps />
        </article>
        <div>
          <Sidebar />
          <div className="mt-9">
            <SectionTitle title="İlgili araştırmalar" />
            {articles
              .filter((v) => v.slug !== a.slug)
              .slice(0, 2)
              .map((v) => (
                <Link
                  key={v.slug}
                  to="/haber/$slug"
                  params={{ slug: v.slug }}
                  className="block py-4 border-b border-border text-sm font-bold leading-6"
                >
                  {v.shortTitle}
                  <ArrowUpRight size={14} className="inline ml-2 text-brand" />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

