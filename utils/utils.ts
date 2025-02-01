export function getIconName(icon: string) {
  // Convert 'i-logos:vue' format to 'logos:vue'
  return icon.startsWith('i-') ? icon.slice(2) : icon
}

/**
 * Returns a sorted array of unique values for a given key from the collection.
 * The default value is prepended to the list (e.g., "All").
 *
 * @param collection - Array of objects (e.g., posts)
 * @param key - Key whose values should be extracted (e.g., "tags")
 * @param defaultValue - A value to prepend (default is "All")
 * @returns Sorted array of unique values
 */
export const getUniqueValues = (collection: any[], key: string, defaultValue: string = 'All'): string[] => {
  if (!Array.isArray(collection)) return []
  const values = collection.flatMap((item) => item[key] ?? [])
  return [defaultValue, ...Array.from(new Set(values))].sort()
}

/**
 * Filters a collection based on a key and a filter value.
 * If the filter value equals the default value (e.g., "All"), it returns the original collection.
 *
 * @param collection - Array of objects (e.g., posts)
 * @param key - Key whose array value will be checked (e.g., "tags")
 * @param filterValue - Value to filter by
 * @param defaultValue - The value that means "no filter" (default is "All")
 * @returns Filtered array of objects
 */
export const filteredCollection = (collection: any[], key: string, filterValue: string, defaultValue: string = 'All'): any[] => {
  if (!Array.isArray(collection)) return []
  if (filterValue === defaultValue) return collection
  return collection.filter((item) => {
    const itemValues = item[key] ?? []
    return itemValues.includes(filterValue)
  })
}

/**
 * Formats a date string or Date object into a human-readable format.
 *
 * @param date - The date to format
 * @param locale - The locale for formatting (default is "en-US")
 * @returns Formatted date string (e.g., "January 1, 2025")
 */
export const formatDate = (date: string | Date, locale: string = 'en-US'): string => {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
