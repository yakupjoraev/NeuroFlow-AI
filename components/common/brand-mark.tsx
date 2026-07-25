/**
 * Marks for the customer names in the logo wall. These companies are fictional,
 * so a real logo source (Simple Icons and friends) has nothing to serve. Each
 * gets a simple geometric monogram instead of a bare text wordmark.
 */
const marks: Record<string, React.ReactNode> = {
  Northwind: (
    <>
      <path d="M12 3 19 21 12 16.5 5 21 12 3Z" />
    </>
  ),
  Quanta: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" fill="currentColor" />
    </>
  ),
  Lumen: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" stroke="none" />
    </>
  ),
  "Apex Labs": (
    <>
      <path d="M12 4 21 20H3L12 4Z" />
      <circle cx="12" cy="15" r="1.8" fill="currentColor" stroke="none" />
    </>
  ),
  Cobalt: (
    <>
      <path d="M12 3l7.5 4.5v9L12 21l-7.5-4.5v-9L12 3Z" />
    </>
  ),
  Vertex: (
    <>
      <path d="M4 4h16L12 12 4 4Z" />
      <path d="M4 20h16L12 12 4 20Z" fill="currentColor" stroke="none" />
    </>
  ),
  Monarch: (
    <>
      <path d="M12 3l9 9-9 9-9-9 9-9Z" />
      <path d="M12 8.5l3.5 3.5L12 15.5 8.5 12 12 8.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  Helio: (
    <>
      <circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" />
      <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" />
    </>
  ),
};

export function BrandMark({ name }: { name: string }) {
  const mark = marks[name];

  return (
    <span className="inline-flex items-center gap-2.5">
      {mark ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          aria-hidden
          className="size-6 shrink-0"
        >
          {mark}
        </svg>
      ) : null}
      <span className="font-display text-lg font-bold tracking-[-0.03em]">
        {name}
      </span>
    </span>
  );
}
