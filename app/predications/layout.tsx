import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prédications",
  description:
    "Retrouvez les prédications audio et vidéo d’Eklezia : foi, prière, famille, service et vie communautaire.",
  openGraph: {
    title: "Prédications | Eklezia",
    description:
      "Écouter, regarder et grandir dans la foi avec les prédications d’Eklezia.",
    images: [
      {
        url: "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Prédications Eklezia",
      },
    ],
  },
};

export default function PredicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}