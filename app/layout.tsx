import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://eklezia-church-website.vercel.app"),
  title: {
    default: "Eklezia | Église, foi, communauté et solidarité",
    template: "%s | Eklezia",
  },
  description:
    "Eklezia est une plateforme web moderne pour une église fictive congolaise. Elle permet de suivre les prédications, consulter les annonces, soutenir la fondation, faire des dons et rejoindre la communauté.",
  keywords: [
    "Eklezia",
    "église",
    "site web église",
    "église congolaise",
    "prédications",
    "prédications audio",
    "prédications vidéo",
    "dons église",
    "fondation église",
    "orphelins",
    "veuves",
    "communauté chrétienne",
    "site web religieux",
    "portfolio développeur",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: "Glodi M." }],
  creator: "Glodi M.",
  publisher: "Glodi M.",
  applicationName: "Eklezia",
  category: "Portfolio web application",

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eklezia-church-website.vercel.app",
    siteName: "Eklezia",
    title: "Eklezia | Église, foi, communauté et solidarité",
    description:
      "Une plateforme web moderne pour une église fictive : prédications, annonces, dons, fondation et communauté.",
    images: [
      {
        url: "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Eklezia - plateforme web pour une église moderne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eklezia | Église, foi, communauté et solidarité",
    description:
      "Site web moderne pour une église fictive : prédications, annonces, dons, fondation et communauté.",
    images: [
      "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}