import Link from "next/link";
import {
  ArrowRight,
  Church,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Prédications", href: "/predications" },
  { label: "Annonces", href: "/annonces" },
  { label: "Fondation", href: "/fondation" },
  { label: "Communauté", href: "/communaute" },
  { label: "Contact", href: "/contact" },
];

const actionsLinks = [
  { label: "Faire un don", href: "/dons" },
  { label: "Soutenir la fondation", href: "/fondation" },
  { label: "Rejoindre un groupe", href: "/communaute" },
  { label: "Demander une prière", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-eklezia-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                <Church size={22} />
              </div>

              <div>
                <p className="text-2xl font-black">Eklezia</p>
                <p className="text-sm text-white/65">
                  Foi · Communauté · Espérance
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Eklezia est une plateforme moderne conçue pour présenter les
              prédications, les annonces, la fondation, les dons et la vie
              communautaire de l’église.
            </p>

            <Link
              href="/dons"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-eklezia-gold px-6 py-3 text-sm font-semibold text-eklezia-navy transition hover:-translate-y-1"
            >
              Faire un don
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-bold">Navigation</h3>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 transition hover:text-eklezia-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Actions</h3>
            <div className="mt-5 space-y-3">
              {actionsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 transition hover:text-eklezia-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Contact</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-eklezia-gold" />
                <p className="text-sm leading-6 text-white/70">
                  Kinshasa, République Démocratique du Congo
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-eklezia-gold" />
                <p className="text-sm text-white/70">+243 000 000 000</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-eklezia-gold" />
                <p className="text-sm text-white/70">contact@eklezia.demo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-sm">
                <img
                  src="/images/glodi-logo.svg"
                  alt="Logo Glodi M."
                  className="h-8 w-8 rounded-full object-contain"
                />
              </div>

              <p className="text-sm font-medium text-white/85">
                Conçu et développé par <span className="font-bold">Glodi M.</span>
              </p>
            </div>

            <p className="text-sm text-white/55">
              © {year} Eklezia. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}