import SermonActions from "../../../components/ui/SermonActions";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Headphones,
  PlayCircle,
  Share2,
  UserRound,
  Video,
} from "lucide-react";
import { sermons } from "../../../data/sermons";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return sermons.map((sermon) => ({
    slug: sermon.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sermon = sermons.find((item) => item.slug === slug);

  if (!sermon) {
    return {
      title: "Prédication introuvable | Eklezia",
    };
  }

  return {
    title: `${sermon.title} | Eklezia`,
    description: sermon.excerpt,
  };
}

export default async function SermonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sermon = sermons.find((item) => item.slug === slug);

  if (!sermon) {
    notFound();
  }

  const recommended = sermons.filter((item) => item.slug !== sermon.slug).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-eklezia-cream px-5 py-16 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,83,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.10),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/predications"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-eklezia-navy shadow-sm transition hover:-translate-y-1"
        >
          <ArrowLeft size={18} />
          Retour aux prédications
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2.7rem] bg-white p-3 shadow-soft">
          <div className="relative min-h-[680px] overflow-hidden rounded-[2.2rem]">
            <img
              src={sermon.image}
              alt={sermon.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy via-eklezia-navy/65 to-eklezia-navy/20" />

            <div className="relative z-10 flex min-h-[680px] items-end p-7 text-white md:p-12">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
                    {sermon.type === "Vidéo" ? (
                      <Video size={16} />
                    ) : (
                      <Headphones size={16} />
                    )}
                    {sermon.type}
                  </span>

                  <span className="rounded-full bg-eklezia-gold px-4 py-2 text-sm font-semibold text-eklezia-navy">
                    {sermon.category}
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                  {sermon.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                  {sermon.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <UserRound size={17} />
                    {sermon.preacher}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={17} />
                    {sermon.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock size={17} />
                    {sermon.duration}
                  </span>
                </div>

                <SermonActions
                title={sermon.title}
                type={sermon.type}
                preacher={sermon.preacher}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.55fr]">
          <article className="rounded-[2rem] bg-white p-7 shadow-soft md:p-10">
            <h2 className="text-3xl font-black text-eklezia-navy">
              Résumé du message
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Cette page détail présente la structure future d’une prédication
              complète. Dans une version backend, elle pourrait contenir un vrai
              lecteur audio ou vidéo, des notes, des versets bibliques, des
              fichiers à télécharger et des recommandations personnalisées.
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-eklezia-soft p-6">
              <h3 className="text-xl font-black text-eklezia-navy">
                Points clés du message
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">
                <li>• Garder la foi dans les périodes difficiles.</li>
                <li>• S’appuyer sur la prière et la parole.</li>
                <li>• Rester connecté à la communauté.</li>
                <li>• Transformer l’enseignement en action quotidienne.</li>
              </ul>
            </div>
          </article>

          <aside className="rounded-[2rem] bg-eklezia-navy p-7 text-white shadow-soft md:p-8">
            <h2 className="text-2xl font-black">À propos du prédicateur</h2>

            <p className="mt-4 leading-8 text-white/70">
              {sermon.preacher} partage un message orienté vers la croissance
              spirituelle, l’encouragement et la vie communautaire.
            </p>

            <div className="mt-7 rounded-[1.5rem] bg-white/10 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                Thème
              </p>
              <p className="mt-2 text-2xl font-black">{sermon.category}</p>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl font-black text-eklezia-navy">
            Autres prédications
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {recommended.map((item) => (
              <Link
                key={item.id}
                href={`/predications/${item.slug}`}
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
  );
}