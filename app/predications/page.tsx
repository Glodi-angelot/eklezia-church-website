"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Headphones,
  PlayCircle,
  Search,
  UserRound,
  Video,
  X,
} from "lucide-react";
import { sermons } from "../../data/sermons";

const categories = ["Tous", ...Array.from(new Set(sermons.map((s) => s.category)))];

const pageHeroImage =
  "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function PredicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSermons = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return sermons.filter((sermon) => {
      const matchCategory =
        selectedCategory === "Tous" || sermon.category === selectedCategory;

      const matchSearch =
        query.length === 0 ||
        sermon.title.toLowerCase().includes(query) ||
        sermon.preacher.toLowerCase().includes(query) ||
        sermon.category.toLowerCase().includes(query) ||
        sermon.excerpt.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-eklezia-cream">
      <section className="relative overflow-hidden px-5 pb-20 pt-10 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,83,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2.7rem] bg-eklezia-navy p-3 shadow-soft"
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.2rem]">
              <img
                src={pageHeroImage}
                alt="Prédications Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/40 via-eklezia-navy/55 to-eklezia-navy/95" />

              <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <PlayCircle size={16} />
                    Prédications
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Des messages pour nourrir la foi et fortifier la communauté.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75"
                  >
                    Retrouvez les prédications récentes d’Eklezia en audio et en
                    vidéo, classées par thème, prédicateur et durée.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
            className="relative z-20 mx-auto -mt-12 max-w-6xl rounded-[2rem] bg-white p-4 shadow-soft"
          >
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-eklezia-navy"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Rechercher une prédication, un thème ou un prédicateur..."
                  className="w-full rounded-2xl bg-eklezia-soft py-4 pl-12 pr-12 text-sm text-eklezia-navy outline-none placeholder:text-gray-500"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 text-gray-500 transition hover:text-eklezia-navy"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category
                        ? "bg-eklezia-navy text-white"
                        : "bg-eklezia-soft text-eklezia-navy hover:bg-eklezia-gold"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-4 text-sm text-gray-500">
              <span>
                {filteredSermons.length} prédication
                {filteredSermons.length > 1 ? "s" : ""} trouvée
                {filteredSermons.length > 1 ? "s" : ""}
              </span>

              {(selectedCategory !== "Tous" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("Tous");
                    setSearchQuery("");
                  }}
                  className="font-semibold text-eklezia-navy transition hover:text-eklezia-gold"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Bibliothèque
              </span>

              <h2 className="mt-3 text-3xl font-black text-eklezia-navy md:text-5xl">
                Toutes les prédications
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-gray-600">
              Une interface claire pour parcourir les messages, identifier le
              thème, voir le prédicateur et accéder rapidement au détail.
            </p>
          </div>

          {filteredSermons.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-2xl rounded-[2rem] bg-white p-10 text-center shadow-soft"
            >
              <h2 className="text-2xl font-black text-eklezia-navy">
                Aucune prédication trouvée
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Essaie un autre mot-clé ou une autre catégorie pour afficher les
                messages disponibles.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Tous");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white"
              >
                Voir toutes les prédications
              </button>
            </motion.div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredSermons.map((sermon, index) => (
                <motion.article
                  key={sermon.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/predications/${sermon.slug}`}
                    className="group block h-full overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
                  >
                    <div className="relative h-72 overflow-hidden rounded-[1.5rem]">
                      <img
                        src={sermon.image}
                        alt={sermon.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/70 via-eklezia-navy/10 to-transparent" />

                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-eklezia-navy backdrop-blur">
                          {sermon.type === "Vidéo" ? (
                            <Video size={13} />
                          ) : (
                            <Headphones size={13} />
                          )}
                          {sermon.type}
                        </span>

                        <span className="rounded-full bg-eklezia-gold px-3 py-1 text-xs font-semibold text-eklezia-navy">
                          {sermon.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                          <Clock size={14} />
                          {sermon.duration}
                        </span>

                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-eklezia-navy transition group-hover:bg-eklezia-gold">
                          <PlayCircle size={20} />
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={14} />
                          {sermon.date}
                        </span>

                        <span className="inline-flex items-center gap-1">
                          <UserRound size={14} />
                          {sermon.preacher}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black leading-tight text-eklezia-navy transition group-hover:text-eklezia-gold">
                        {sermon.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                        {sermon.excerpt}
                      </p>

                      <div className="mt-5 flex items-center gap-2 font-semibold text-eklezia-navy">
                        Voir la prédication
                        <ArrowRight
                          size={18}
                          className="transition group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}