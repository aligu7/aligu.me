export type NavLink = {
  label: string
  to: string
  external?: boolean
}

const navLinks: NavLink[] = [
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/pdf/Ali_Guliyev_Resume.pdf", external: true },
]

export function useNavLinks() {
  return navLinks
}
