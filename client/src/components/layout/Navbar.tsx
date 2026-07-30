import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ui/ThemeToggle";
import Button from "../ui/Button";
import { NAV_ITEMS } from "../../constants/navigation";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <Container>
          <div className="flex h-20 items-center justify-between">

            <Logo />

           <nav className="hidden lg:flex">
  <ul className="flex items-center gap-8">
    {NAV_ITEMS.map((item) => (
      <li key={item.label}>
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />

              <Link to="/login">
                <Button variant="outline">
                  Login
                </Button>
              </Link>

              <Link to="/student-register">
                <Button>
                  Get Started
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
            >
              <Menu />
            </button>

          </div>
        </Container>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}