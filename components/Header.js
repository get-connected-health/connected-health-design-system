import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

/**
 * Primary site navigation – always white, never gradient.
 * Uses <nav> as the root element because Lovable attaches its menu styles to nav.
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      role="navigation"
      className="bg-white shadow-sm [&_*]:text-dark-gray"
      /* '!bg-white' prevents Lovable from overriding with gradients */
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* logo */}
        <Link href="/" aria-label="Connected Health home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Connected Health logo" className="h-8 w-auto" />
        </Link>

        {/* desktop links */}
        <div className="hidden gap-8 lg:flex">
          <Link href="/cleanse" className="text-sm font-medium hover:text-ch-blue">
            Cleanse
          </Link>
          <Link href="/modules" className="text-sm font-medium hover:text-ch-blue">
            Modules
          </Link>
          <Link href="/labs" className="text-sm font-medium hover:text-ch-blue">
            Labs
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-ch-blue">
            Pricing
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="rounded-md p-2 hover:text-ch-blue lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* mobile panel */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-warm-200 px-4 py-4">
            <Link href="/cleanse" className="block font-medium hover:text-ch-blue">
              Cleanse
            </Link>
            <Link href="/modules" className="block font-medium hover:text-ch-blue">
              Modules
            </Link>
            <Link href="/labs" className="block font-medium hover:text-ch-blue">
              Labs
            </Link>
            <Link href="/pricing" className="block font-medium hover:text-ch-blue">
              Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
