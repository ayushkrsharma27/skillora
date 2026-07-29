export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Internships", href: "/internships" },
  { label: "Companies", href: "/companies" },
  { label: "Certificates", href: "/verify-certificate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];