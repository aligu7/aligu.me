export function getIconName(icon: string) {
  // Convert 'i-logos:vue' format to 'logos:vue'
  return icon.startsWith("i-") ? icon.slice(2) : icon;
}