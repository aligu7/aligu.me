/** Tag shown in filter dropdowns to mean "no filter". */
export const ALL = "All"

/**
 * Returns the sorted unique tags of a collection, prefixed with {@link ALL}.
 */
export function getUniqueTags(items: { tags?: string[] }[]): string[] {
  const unique = new Set(items.flatMap(item => item.tags ?? []))
  return [ALL, ...[...unique].sort()]
}

/**
 * Keeps the items tagged with `tag`; {@link ALL} keeps everything.
 */
export function filterByTag<T extends { tags?: string[] }>(items: T[], tag: string): T[] {
  if (tag === ALL)
    return items
  return items.filter(item => item.tags?.includes(tag))
}

/**
 * Formats a date into a human-readable form, e.g. "January 1, 2025".
 */
export function formatDate(date: string | Date, locale = "en-US"): string {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
