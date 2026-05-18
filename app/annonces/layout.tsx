import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annonces",
  description:
    "Consultez les annonces, programmes, cultes spéciaux, formations et événements de la communauté Eklezia.",
  openGraph: {
    title: "Annonces | Eklezia",
    description:
      "Les programmes, événements et nouveautés de la communauté Eklezia.",
    images: [
      {
        url: "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Annonces Eklezia",
      },
    ],
  },
};

export default function AnnoncesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}