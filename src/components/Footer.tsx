import React from "react";
import { Heart, ArrowUp } from "@phosphor-icons/react";
import { LinkedinLogo, YoutubeLogo, FacebookLogo, XLogo, InstagramLogo, Butterfly } from "@phosphor-icons/react";

/**
 * Static footer replicating the provided design. All links except helpline / email are placeholders.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    // Reduced top margin & padding to bring footer closer to preceding content
    <footer className="relative bg-purple-900 text-white mt-8 pt-12 pb-8">
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 flex items-center justify-center shadow-md"
      >
        <ArrowUp size={22} weight="bold" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-12 md:gap-10 md:grid-cols-4">
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-1 mb-6 select-none" aria-label="Women's Aid">
            <span className="text-4xl font-semibold tracking-tight flex items-center gap-1">
              <span>Women’s</span>
              <Heart weight="fill" className="text-purple-200 -mt-1" size={34} aria-hidden="true" />
              <span>Aid</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-purple-100/90 mb-6 max-w-xs">
            Women's Aid is a registered charity in Ireland.
          </p>
          <p className="text-[11px] leading-relaxed text-purple-200/80 mb-6 space-y-1">
            <span className="block">Registered Charity No: 20012045 (CHY 6491)</span>
            <span className="block">Registered Company No: 58035</span>
          </p>
          <button
            type="button"
            disabled
            className="px-8 py-3 rounded-sm bg-red-600 hover:bg-red-700 text-white font-semibold text-sm tracking-wide shadow disabled:opacity-90"
            aria-label="Join our Newsletter (placeholder)"
          >
            Join our Newsletter
          </button>
        </div>

        {/* Column 2: Contact us */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact us</h3>
            <p className="text-sm leading-relaxed text-purple-100/90 mb-6 whitespace-pre-line">{`Women's Aid,\n5 Wilton Place,\nDublin 2, D02RR27`}</p>
            <p className="text-sm leading-relaxed text-purple-100/90 space-y-2">
              <span className="block">Phone: +353 1 678 8858</span>
              <span className="block">Email: <a href="mailto:info@womensaid.ie" className="underline decoration-purple-300/60 hover:decoration-purple-100">info@womensaid.ie</a></span>
            </p>
        </div>

        {/* Column 3: Need help? */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Need help?</h3>
          <div className="text-sm leading-relaxed text-purple-100/90 space-y-4">
            <p>
              Call our National Freephone Helpline<br />
              <span className="font-bold text-white text-[15px]">1800 341 900</span><br />
              24 hours a day, 7 days a week
            </p>
            <p>Instant Message support mornings and evenings 7 days a week</p>
            <p className="pt-2">Or send an email to:<br /><span className="inline-block mt-1 font-medium">helpline@womensaid.ie</span></p>
          </div>
        </div>

        {/* Column 4: Follow */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Follow</h3>
          <ul className="grid grid-cols-2 gap-x-1 gap-y-1 text-white/90 w-fit" aria-label="Social links (decorative)">
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded text-lg" aria-hidden="true"><Butterfly size={18} weight="fill" /></span></li>
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded" aria-hidden="true"><XLogo size={16} /></span></li>
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded" aria-hidden="true"><FacebookLogo size={16} weight="fill" /></span></li>
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded" aria-hidden="true"><InstagramLogo size={16} weight="fill" /></span></li>
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded" aria-hidden="true"><LinkedinLogo size={16} weight="fill" /></span></li>
            <li className="leading-none"><span className="inline-flex w-6 h-6 items-center justify-center rounded" aria-hidden="true"><YoutubeLogo size={16} weight="fill" /></span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      {/* <div className="mt-14 pt-6 border-t border-purple-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">
          <nav aria-label="Legal" className="text-[11px] font-medium text-purple-200/80 flex flex-wrap justify-center gap-3 md:gap-6 tracking-wide">
            {['Confidentiality Policy','Privacy Notice','Cookie Policy','Accessibility Statement','Terms of Use'].map(item => (
              <span key={item} className="flex items-center gap-3">
                <span>{item}</span>
                <span aria-hidden="true" className="hidden md:inline-block">|</span>
              </span>
            ))}
          </nav>
          <p className="text-xs text-purple-300 text-center leading-relaxed">
            © {year} Women&apos;s Aid. All rights reserved. Web Design & Development by FUSIO
          </p>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
