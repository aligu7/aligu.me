export function useSortByDate(arr: { date: string }[]) {
  return arr.sort((a, b) => {
    // Convert date to Date objects for comparison
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    // Sort in descending order (most recent first)
    return dateB.getTime() - dateA.getTime()
  })
}
