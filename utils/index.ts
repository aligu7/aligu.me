import { gsap } from "gsap"

export function getIconName(icon: string) {
  // Convert 'i-logos:vue' format to 'logos:vue'
  return icon.startsWith("i-") ? icon.slice(2) : icon
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
export const getUniqueValues = (
  collection: any[],
  key: string,
  defaultValue: string = "All",
): string[] => {
  if (!Array.isArray(collection)) return []
  const values = collection.flatMap(item => item[key] ?? [])
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
export const filteredCollection = (
  collection: any[],
  key: string,
  filterValue: string,
  defaultValue: string = "All",
): any[] => {
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
export const formatDate = (
  date: string | Date,
  locale: string = "en-US",
): string => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Animate elements with a staggered fade-in and move-up effect
 * @param selector CSS selector for the elements to animate
 * @param options Optional configuration options
 * @param options.duration Animation duration in seconds (default: 0.3)
 * @param options.stagger Delay between each element's animation in seconds (default: 0.2)
 * @param options.y Initial Y offset in pixels for the animation (default: 20)
 * @param options.ease GSAP easing function to use (default: "power2.out")
 * @param options.delay Initial delay before animation starts in seconds (default: 0)
 * @param options.onComplete Callback function to execute when animation completes
 */
export const animateProjectsAndPosts = (
  selector: string,
  options: {
    duration?: number
    stagger?: number
    y?: number
    ease?: string
    delay?: number
    onComplete?: () => void
  } = {},
) => {
  // Default options
  const {
    duration = 0.3,
    stagger = 0.2,
    y = 20,
    ease = "power2.out",
    delay = 0,
    onComplete,
  } = options

  // Reset elements to initial state (useful for re-animations)
  const elements = document.querySelectorAll(selector)
  elements.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = `translateY(${y}px)`
  })

  // Perform the animation
  return gsap.fromTo(
    selector,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
      delay,
      clearProps: "all", // Clean up inline styles after animation
      onComplete,
    },
  )
}

/**
 * Setup animation watcher for items that may change due to filtering
 * @param itemsArray Reactive array of items to watch for changes
 * @param selector CSS selector for the elements to animate
 * @param options Optional animation configuration
 */
export const setupAnimationWatcher = (
  itemsArray: any,
  selector: string,
  options = {},
) => {
  // Return the watch function to be used with Vue's watch
  return () => {
    // Small delay to ensure DOM is updated
    setTimeout(() => {
      animateProjectsAndPosts(selector, options)
    }, 10)
  }
}

// for utils.ts
export const observeMutations = (
  targetSelector: string,
  animatePage: () => void,
) => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations)
      if (
        mutation.addedNodes.length > 0
        && document.querySelectorAll(targetSelector).length > 0
      ) {
        animatePage()
        observer.disconnect()
        break
      }
  })

  const container = document.querySelector(".page") || document.body
  if (container)
    observer.observe(container, { childList: true, subtree: true })

  return observer
}
