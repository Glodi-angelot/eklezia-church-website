import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Histoire",
  description:
    "Découvrez l’histoire, la vision, la mission et les valeurs de l’église fictive Eklezia.",
  openGraph: {
    title: "Histoire | Eklezia",
    description:
      "Une vision née pour servir Dieu et bâtir une communauté.",
    images: [
      {
        url: "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Histoire Eklezia",
      },
    ],
  },
};

export default function HistoireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}