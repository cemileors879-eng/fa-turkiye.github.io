import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";
import { latestUpdates } from "@/lib/portal-data";

const KEY = "fa-a11y-prefs";
type Prefs = { text: number; contrast: boolean };

function apply(p: Prefs) {
  const html = document.documentElement;
  html.classList.remove("a11y-text--1", "a11y-text-1", "a11y-text-2");
  if (p.text !== 0) html.classList.add(`a11y-text-${p.text}`);
  html.classList.toggle("a11y-contrast", p.contrast);
}

export function AccessibilityControls() {
  const [p, setP] = useState<Prefs>({ text: 0, contrast: false });
  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) ?? "null");
      if (raw && typeof raw === "object") {
        const text = [-1, 0, 1, 2].includes(raw.text) ? raw.text : 0;
        const next = { text, contrast: raw.contrast === true };
        setP(next);
        apply(next);
      }
    } catch { /* ignore invalid stored value */ }
  }, []);
  const update = (next: Prefs) => {
    setP(next);
    apply(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
  };
  const btn = "min-h-7 min-w-7 rounded border border-current px-1.5 font-bold leading-none focus-visible:outline focus-visible:outline-2";
  return (
    <span role="group" aria-label="Erişilebilirlik ayarları" className="flex items-center gap-1">
      <button type="button" className={btn} aria-label="Yazı boyutunu küçült" disabled={p.text <= -1} onClick={() => update({ ...p, text: p.text - 1 })}>A−</button>
      <button type="button" className={btn} aria-label="Yazı boyutunu büyüt" disabled={p.text >= 2} onClick={() => update({ ...p, text: p.text + 1 })}>A+</button>
      <button type="button" className={btn} aria-pressed={p.contrast} aria-label="Yüksek kontrast" onClick={() => update({ ...p, contrast: !p.contrast })}>Kontrast</button>
      <span className="sr-only" aria-live="polite">{`Yazı boyutu düzeyi ${p.text}. Yüksek kontrast ${p.contrast ? "açık" : "kapalı"}.`}</span>
    </span>
  );
}

// "Today" is always the current Europe/Istanbul calendar date, as a UTC-midnight timestamp.
const DAY = 86400000;
export function istanbulToday(now: Date = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  return Date.UTC(get("year"), get("month") - 1, get("day"));
}
const months = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const weekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
export function formatTurkishDate(day: number, withWeekday = false): string {
  const d = new Date(day);
  const base = `${d.getUTCDate()} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  return withWeekday ? `${base}, ${weekdays[d.getUTCDay()]}` : base;
}
export function formatWeekRange(today: number): string {
  const s = new Date(today - 6 * DAY);
  const e = new Date(today);
  if (s.getUTCFullYear() !== e.getUTCFullYear()) return `${formatTurkishDate(s.getTime())} – ${formatTurkishDate(today)}`;
  if (s.getUTCMonth() !== e.getUTCMonth()) return `${s.getUTCDate()} ${monthNames[s.getUTCMonth()]} – ${formatTurkishDate(today)}`;
  return `${s.getUTCDate()}–${formatTurkishDate(today)}`;
}
/** Current Istanbul date; re-checks every minute so an open page rolls over at midnight. */
export function useIstanbulToday(): number {
  const [today, setToday] = useState(() => istanbulToday());
  useEffect(() => {
    const tick = () => setToday((prev) => { const next = istanbulToday(); return next === prev ? prev : next; });
    tick();
    const id = window.setInterval(tick, 60000);
    return () => window.clearInterval(id);
  }, []);
  return today;
}
export function IstanbulDate() {
  const today = useIstanbulToday();
  return (
    <>
      <span className="hidden sm:block" suppressHydrationWarning>{formatTurkishDate(today, true)}</span>
      <span className="sm:hidden" suppressHydrationWarning>{formatTurkishDate(today)}</span>
    </>
  );
}
function exactDate(label: string): number | null {
  const m = /^(\d{1,2})\s+(\S+)\s+(\d{4})/.exec(label.trim());
  if (!m) return null;
  const mo = months.indexOf((m[2] ?? "").toLocaleLowerCase("tr"));
  const day = Number(m[1]);
  if (mo < 0 || day < 1 || day > 31) return null;
  const t = Date.UTC(Number(m[3]), mo, day);
  return new Date(t).getUTCDate() === day ? t : null;
}
export function weeklyItems(today: number = istanbulToday()) {
  const from = today - 6 * DAY;
  return latestUpdates
    .map((a, i) => ({ a, i, t: exactDate(a.date) }))
    .filter((x): x is { a: (typeof latestUpdates)[number]; i: number; t: number } => x.t !== null && x.t >= from && x.t <= today)
    .sort((x, y) => y.t - x.t || x.i - y.i)
    .map((x) => x.a);
}

export function WeeklyChanges() {
  const today = useIstanbulToday();
  const items = weeklyItems(today);
  return (
    <section aria-labelledby="weekly-title" className="mt-9 rounded-lg border border-border bg-card p-4">
      <h2 id="weekly-title" className="text-base font-extrabold text-primary">Bu hafta ne değişti?</h2>
      <p className="text-[11px] text-muted-foreground mt-1" suppressHydrationWarning>{formatWeekRange(today)} arasında, tarihi açıkça belli olan site güncellemeleri.</p>
      {items.length === 0 ? (
        <p className="text-sm mt-3">Bu hafta için tarihi doğrulanmış yeni bir güncelleme yok.</p>
      ) : (
        <ul className="mt-3 divide-y divide-border">
          {items.map((a) => (
            <li key={a.slug} className="py-2">
              <Link to="/haber/$slug" params={{ slug: a.slug }} className="flex gap-2 text-sm font-bold text-primary hover:text-brand">
                <CalendarDays size={15} aria-hidden className="shrink-0 mt-1" />
                <span><span className="text-muted-foreground font-semibold">{a.date}</span> · {a.shortTitle ?? a.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

