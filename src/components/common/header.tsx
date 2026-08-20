



import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-white/20 text-white"
        : "text-white/80 hover:bg-white/10 hover:text-white"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between py-3">
          {/* Logo */}
          <NavLink
            to="/home"
            onClick={closeMenu}
            className="text-lg font-bold text-white sm:text-xl"
          >
            My Portfolio
          </NavLink>

        
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/home" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <NavLink to="/contact" className="ml-2">
              <Button
                variant="secondary"
                className="border-0 whitespace-nowrap"
              >
                Let's Talk
              </Button>
            </NavLink>
          </nav>

        
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      
        {menuOpen && (
          <nav className="border-t border-white/20 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/home"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={closeMenu}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={closeMenu}
              >
                Contact
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="mt-2"
              >
                <Button
                  variant="secondary"
                  className="w-full border-0"
                >
                  Let's Talk
                </Button>
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}