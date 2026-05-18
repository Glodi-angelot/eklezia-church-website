import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Eklezia, demandez une prière, posez une question ou rejoignez la communauté.",
  openGraph: {
    title: "Contact | Eklezia",
    description:
      "Entrer en contact avec la communauté Eklezia.",
    images: [
      {
        url: "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Contact Eklezia",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}