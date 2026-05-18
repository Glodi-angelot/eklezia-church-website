"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Church, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Prédications", href: "/predications" },
  { label: "Annonces", href: "/annonces" },
  { label: "Fondation", href: "/fondation" },
  { label: "Histoire", href: "/histoire" },
  { label: "Communauté", href: "/communaute" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-eklezia-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-eklezia-navy text-white shadow-soft">
            <Church size={22} />
          </div>

          <div>
            <p className="text-xl font-bold text-eklezia-navy">Eklezia</p>
            <p className="text-xs text-gray-500">
              Foi · Communauté · Espérance
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-eklezia-navy"
                    : "text-gray-700 hover:text-eklezia-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/dons"
            className="rounded-full bg-eklezia-gold px-5 py-3 text-sm font-semibold text-eklezia-navy transition hover:scale-105"
          >
            Faire un don
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-eklezia-navy shadow-sm lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 bg-eklezia-cream px-5 pb-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-eklezia-navy text-white"
                      : "bg-white text-eklezia-navy hover:bg-eklezia-soft"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/dons"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-eklezia-gold px-5 py-4 text-sm font-bold text-eklezia-navy transition hover:-translate-y-1"
            >
              Faire un don
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}