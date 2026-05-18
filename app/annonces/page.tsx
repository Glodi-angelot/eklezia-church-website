"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Megaphone,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { announcements } from "../../data/announcements";

const categories = [
  "Toutes",
  ...Array.from(new Set(announcements.map((item) => item.category))),
];

const pageHeroImage =
  "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAnnouncements = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return announcements.filter((announcement) => {
      const matchCategory =
        selectedCategory === "Toutes" ||
        announcement.category === selectedCategory;

      const matchSearch =
        query.length === 0 ||
        announcement.title.toLowerCase().includes(query) ||
        announcement.category.toLowerCase().includes(query) ||
        announcement.location.toLowerCase().includes(query) ||
        announcement.excerpt.toLowerCase().includes(query);

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
            <div className="relative min-h-[540px] overflow-hidden rounded-[2.2rem]">
              <img
                src={pageHeroImage}
                alt="Annonces Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/35 via-eklezia-navy/55 to-eklezia-navy/95" />

              <div className="relative z-10 flex min-h-[540px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <Megaphone size={16} />
                    Annonces
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Programmes, événements et nouveautés de l’église.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75"
                  >
                    Suivez les cultes spéciaux, conférences, formations,
                    programmes de prière et actions sociales de la communauté
                    Eklezia.
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
                  placeholder="Rechercher une annonce, un lieu ou une catégorie..."
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
                {filteredAnnouncements.length} annonce
                {filteredAnnouncements.length > 1 ? "s" : ""} trouvée
                {filteredAnnouncements.length > 1 ? "s" : ""}
              </span>

              {(selectedCategory !== "Toutes" || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("Toutes");
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
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Actualités
              </span>

              <h2 className="mt-3 text-3xl font-black text-eklezia-navy md:text-5xl">
                Toutes les annonces
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-gray-600">
              Une page pensée pour informer rapidement les fidèles sur les
              programmes, événements, activités et communiqués importants.
            </p>
          </div>

          {filteredAnnouncements.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-10 text-center shadow-soft">
              <h2 className="text-2xl font-black text-eklezia-navy">
                Aucune annonce trouvée
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Essaie un autre mot-clé ou une autre catégorie.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Toutes");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white"
              >
                Voir toutes les annonces
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredAnnouncements.map((announcement, index) => (
                <motion.article
                  key={announcement.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/annonces/${announcement.slug}`}
                    className="group block h-full overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
                  >
                    <div className="relative h-72 overflow-hidden rounded-[1.5rem]">
                      <img
                        src={announcement.image}
                        alt={announcement.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/70 via-eklezia-navy/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-eklezia-navy backdrop-blur">
                        {announcement.category}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                          <CalendarDays size={14} />
                          {announcement.date}
                        </span>

                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-eklezia-navy transition group-hover:bg-eklezia-gold">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        {announcement.location}
                      </div>

                      <h3 className="text-2xl font-black leading-tight text-eklezia-navy transition group-hover:text-eklezia-gold">
                        {announcement.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                        {announcement.excerpt}
                      </p>

                      <div className="mt-5 flex items-center gap-2 font-semibold text-eklezia-navy">
                        Lire l’annonce
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