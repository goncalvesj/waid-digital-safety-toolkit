import { Heart, MagnifyingGlass, Phone } from "@phosphor-icons/react";
import React from "react";

/**
 * Static header replicating the Women's Aid style (as per provided screenshot).
 * Navigation items (except Get help) are decorative only – the application always
 * stays on the Get help view.
 */
export function Header() {
  const navItems = [
    { label: "Are you in immediate danger?" },
    { label: "Get help", active: true },
    { label: "What is abuse?" },
    { label: "Get involved" },
    { label: "Get informed" },
    { label: "Get training" },
    { label: "About us" },
  ];

  return (
    <header className="w-full shadow-sm border-b border-purple-900/20 bg-white">
      {/* Top strip */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 select-none" aria-label="Women's Aid">
          <span className="text-[1.9rem] leading-none font-semibold tracking-tight text-purple-900 flex items-center gap-1">
            <span>Women’s</span>
            <Heart weight="fill" className="text-purple-700 -mt-1" size={28} aria-hidden="true" />
            <span>Aid</span>
          </span>
        </div>

        {/* Helpline */}
        <div className="hidden md:flex items-center gap-3" aria-label="24 hour national freephone helpline">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700">
            <Phone size={22} weight="bold" />
          </div>
          <div className="leading-tight">
            <p className="text-2xl font-semibold text-purple-800">1800 341 900</p>
            <p className="text-[11px] uppercase tracking-wide font-medium text-purple-700">24h National Freephone Helpline</p>
          </div>
        </div>

  {/* Actions (Quick Exit moved to fixed position elsewhere) */}
  <div className="flex items-center gap-6 ml-auto">
          <button
            type="button"
            className="hidden sm:flex flex-col items-center text-[11px] font-medium text-purple-800 hover:text-purple-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
            aria-label="Search (decorative only)"
            disabled
          >
            <MagnifyingGlass size={22} />
            <span className="mt-0.5">Search</span>
          </button>
          <button
            type="button"
            className="hidden sm:flex flex-col items-center text-[11px] font-medium text-purple-800 hover:text-purple-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded"
            aria-label="Donate (decorative only)"
            disabled
          >
            <Heart size={22} weight="regular" />
            <span className="mt-0.5">Donate</span>
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav aria-label="Primary" className="bg-purple-900 text-white text-sm font-semibold">
        <ul className="flex gap-0 overflow-x-auto no-scrollbar">
          {navItems.map(item => (
            <li key={item.label} className="relative">
              {item.active && (
                <span
                  aria-hidden="true"
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-purple-700"
                />
              )}
              <span
                className={[
                  "block px-6 py-4 whitespace-nowrap",
                  item.active
                    ? "bg-purple-700 text-white"
                    : "bg-purple-900/95 text-white/90"
                ].join(" ")}
                aria-current={item.active ? "page" : undefined}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
