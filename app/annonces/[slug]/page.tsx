import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Megaphone,
  Share2,
} from "lucide-react";
import { announcements } from "../../../data/announcements";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const announcement = announcements.find((item) => item.slug === slug);

  if (!announcement) {
    return {
      title: "Annonce introuvable | Eklezia",
    };
  }

  return {
    title: `${announcement.title} | Eklezia`,
    description: announcement.excerpt,
  };
}

export default async function AnnouncementDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const announcement = announcements.find((item) => item.slug === slug);

  if (!announcement) {
    notFound();
  }

  const recommended = announcements
    .filter((item) => item.slug !== announcement.slug)
    .slice(0, 3);

  return (
    <main className="bg-eklezia-cream">
      <section className="relative overflow-hidden px-5 py-16 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,83,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/annonces"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-eklezia-navy shadow-sm transition hover:-translate-y-1"
          >
            <ArrowLeft size={18} />
            Retour aux annonces
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2.7rem] bg-white p-3 shadow-soft">
            <div className="relative min-h-[660px] overflow-hidden rounded-[2.2rem]">
              <img
                src={announcement.image}
                alt={announcement.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy via-eklezia-navy/65 to-eklezia-navy/20" />

              <div className="relative z-10 flex min-h-[660px] items-end p-7 text-white md:p-12">
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
                      <Megaphone size={16} />
                      {announcement.category}
                    </span>
                  </div>

                  <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                    {announcement.title}
                  </h1>

                  <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                    {announcement.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={17} />
                      {announcement.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin size={17} />
                      {announcement.location}
                    </span>
                  </div>

                  <button className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1">
                    Partager l’annonce
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.45fr]">
            <article className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
              <h2 className="text-3xl font-black text-eklezia-navy">
                Détails de l’annonce
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                {announcement.content}
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-eklezia-soft p-6">
                <h3 className="text-xl font-black text-eklezia-navy">
                  Informations pratiques
                </h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="mt-2 font-bold text-eklezia-navy">
                      {announcement.date}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5">
                    <p className="text-sm text-gray-500">Lieu</p>
                    <p className="mt-2 font-bold text-eklezia-navy">
                      {announcement.location}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside className="rounded-[2rem] bg-eklezia-navy p-7 text-white shadow-soft md:p-8">
              <h2 className="text-2xl font-black">Rester informé</h2>

              <p className="mt-4 leading-8 text-white/70">
                Les annonces permettent aux fidèles de suivre les programmes,
                cultes spéciaux, formations et activités importantes de
                l’église.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
              >
                Contacter l’église
              </Link>
            </aside>
          </div>

          <div className="mt-14">
            <h2 className="text-3xl font-black text-eklezia-navy">
              Autres annonces
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {recommended.map((item) => (
                <Link
                  key={item.id}
                  href={`/annonces/${item.slug}`}
                  className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
                >
                  <div className="relative h-60 overflow-hidden rounded-[1.5rem]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-eklezia-navy">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-black leading-tight text-eklezia-navy transition group-hover:text-eklezia-gold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}