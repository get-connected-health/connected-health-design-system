// components/layout/SiteHeader.js
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header bg-white shadow-sm">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" aria-label="Connected Health home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Connected Health logo" className="h-8 w-auto" />
        </Link>

        {/* desktop links */}
        <div className="hidden gap-8 lg:flex">
          {["Cleanse", "Modules", "Labs", "Pricing"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-dark-gray hover:text-ch-blue">
              {item}
            </Link>
          ))}
        </div>

        {/* mobile toggle */}
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="rounded-md p-2 text-dark-gray hover:text-ch-blue lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <nav aria-label="Mobile navigation" className="lg:hidden bg-white shadow-inner">
          {["Cleanse", "Modules", "Labs", "Pricing"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="block px-4 py-2 font-medium text-dark-gray hover:text-ch-blue">
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
