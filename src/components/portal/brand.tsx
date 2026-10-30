export function BrandWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? " brand-lockup-compact" : ""}`}>
      <svg
        className="brand-symbol"
        viewBox="0 0 96 64"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="brand-symbol-blue"
          d="M48 32C35 14 14 12 12 29C9 49 31 53 48 32C65 11 87 15 84 35C82 52 61 50 48 32Z"
        />
        <path
          className="brand-symbol-green"
          d="M48 32C65 11 87 15 84 35C82 52 61 50 48 32"
        />
      </svg>
      <span className="wordmark">FA <span>Türkiye</span></span>
    </span>
  );
}
