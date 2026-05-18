import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communauté",
  description:
    "Rejoignez la communauté Eklezia : jeunesse, chorale, intercession, fondation, femmes, hommes et accompagnement.",
  openGraph: {
    title: "Communauté | Eklezia",
    description:
      "Une communauté vivante où chacun peut trouver sa place.",
    images: [
      {
        url: "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Communauté Eklezia",
      },
    ],
  },
};

export default function CommunauteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}