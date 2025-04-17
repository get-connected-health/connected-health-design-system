import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

/**
 * Site‑wide header – solid white background, no gradients.
 * Responsive: shows inline nav on large screens and a hamburger menu on mobile.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* main bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Connected Health home">
          <img
            src="/logo.svg"
            alt="Connected Health logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden gap-8 lg:flex" aria-label="Main navigation">
          <Link href="/cleanse" className="text-sm font-medium text-dark-gray hover:text-ch-blue">
            Cleanse
          </Link>
          <Link href="/modules" className="text-sm font-medium text-dark-gray hover:text-ch-blue">
            Modules
          </Link>
          <Link href="/labs" className="text-sm font-medium text-dark-gray hover:text-ch-blue">
            Labs
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-dark-gray hover:text-ch-blue">
            Pricing
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          className="rounded-md p-2 text-dark-gray hover:text-ch-blue lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* mobile nav panel */}
      {isOpen && (
        <nav className="bg-white shadow-md lg:hidden" aria-label="Mobile navigation">
          <ul className="space-y-2 px-4 py-4">
            <li>
              <Link href="/cleanse" className="block text-dark-gray hover:text-ch-blue">
                Cleanse
              </Link>
            </li>
            <li>
              <Link href="/modules" className="block text-dark-gray hover:text-ch-blue">
                Modules
              </Link>
            </li>
            <li>
              <Link href="/labs" className="block text-dark-gray hover:text-ch-blue">
                Labs
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block text-dark-gray hover:text-ch-blue">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
