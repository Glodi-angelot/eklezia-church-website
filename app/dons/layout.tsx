import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dons",
  description:
    "Soutenez l’église Eklezia, sa fondation et ses actions sociales à travers une interface de don moderne.",
  openGraph: {
    title: "Dons | Eklezia",
    description:
      "Faire un don pour soutenir l’église, la fondation, les orphelins et les veuves.",
    images: [
      {
        url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Dons Eklezia",
      },
    ],
  },
};

export default function DonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}