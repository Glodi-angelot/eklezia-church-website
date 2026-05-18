"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { announcements } from "../../data/announcements";

export default function LatestAnnouncements() {
  const featured = announcements[0];
  const others = announcements.slice(1, 4);

  return (
    <section className="relative overflow-hidden bg-eklezia-soft px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
              <Megaphone size={16} />
              Annonces récentes
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Les programmes, événements et nouveautés de la communauté.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Retrouvez les annonces importantes de l’église : cultes spéciaux,
              rencontres, activités sociales, programmes de prière et événements
              communautaires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            <Link
              href="/annonces"
              className="inline-flex items-center gap-2 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Voir toutes les annonces
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.article
          initial={{ opacity: 0, scale: 0.97, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <Link
            href={`/annonces/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/75 via-eklezia-navy/20 to-transparent" />

              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Sparkles size={16} />
                À la une
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="w-fit rounded-full bg-eklezia-gold/20 px-4 py-2 text-sm font-semibold text-eklezia-navy">
                {featured.category}
              </span>

              <h3 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                {featured.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                {featured.excerpt}
              </p>

              <div className="mt-7 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-eklezia-soft p-4">
                  <CalendarDays size={20} className="text-eklezia-navy" />
                  <span>{featured.date}</span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-eklezia-soft p-4">
                  <MapPin size={20} className="text-eklezia-navy" />
                  <span>{featured.location}</span>
                </div>
              </div>

              <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white transition group-hover:-translate-y-1">
                Lire l’annonce
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        </motion.article>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {others.map((announcement, index) => (
            <motion.article
              key={announcement.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/annonces/${announcement.slug}`}
                className="group block overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                  <img
                    src={announcement.image}
                    alt={announcement.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-eklezia-navy backdrop-blur">
                    {announcement.category}
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <CalendarDays size={16} />
                    {announcement.date}
                  </div>

                  <h3 className="text-2xl font-black leading-tight text-eklezia-navy transition group-hover:text-eklezia-gold">
                    {announcement.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {announcement.excerpt}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-eklezia-navy">
                    Lire plus
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
      </div>
    </section>
  );
}