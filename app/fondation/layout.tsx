import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fondation",
  description:
    "Découvrez la Fondation Eklezia, dédiée au soutien des orphelins, des veuves et des familles vulnérables.",
  openGraph: {
    title: "Fondation | Eklezia",
    description:
      "Une mission sociale tournée vers les veuves, les orphelins et les familles vulnérables.",
    images: [
      {
        url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Fondation Eklezia",
      },
    ],
  },
};

export default function FondationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}