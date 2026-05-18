"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock,
  Headphones,
  PlayCircle,
  UserRound,
  Video,
} from "lucide-react";
import { sermons } from "../../data/sermons";

export default function LatestSermons() {
  const featured = sermons[0];
  const others = sermons.slice(1, 3);

  return (
    <section className="relative overflow-hidden bg-eklezia-soft px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,83,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(30,58,95,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
              <PlayCircle size={16} />
              Dernières prédications
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Des messages pour édifier, encourager et fortifier la foi.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Retrouvez les enseignements récents d’Eklezia en audio ou en
              vidéo, avec des messages pensés pour la foi, la prière, la famille
              et le service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            <Link
              href="/predications"
              className="inline-flex items-center gap-2 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Voir toutes les prédications
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Link
              href={`/predications/${featured.slug}`}
              className="group block overflow-hidden rounded-[2.4rem] bg-white p-3 shadow-soft"
            >
              <div className="relative h-[500px] overflow-hidden rounded-[2rem] md:h-[560px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/95 via-eklezia-navy/45 to-transparent" />

                <div className="absolute left-6 top-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    {featured.type === "Vidéo" ? (
                      <Video size={16} />
                    ) : (
                      <Headphones size={16} />
                    )}
                    {featured.type}
                  </span>

                  <span className="rounded-full bg-eklezia-gold px-4 py-2 text-sm font-semibold text-eklezia-navy">
                    {featured.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                    Message à la une
                  </p>

                  <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                    {featured.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                    {featured.excerpt}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-4 text-sm text-white/80">
                    <span className="inline-flex items-center gap-2">
                      <UserRound size={17} />
                      {featured.preacher}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Clock size={17} />
                      {featured.duration}
                    </span>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-eklezia-navy transition group-hover:-translate-y-1">
                    Suivre le message
                    <PlayCircle size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-5 lg:col-span-5">
            {others.map((sermon, index) => (
              <motion.article
                key={sermon.id}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/predications/${sermon.slug}`}
                  className="group grid overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1 md:grid-cols-[190px_1fr]"
                >
                  <div className="relative h-52 overflow-hidden rounded-[1.5rem] md:h-full">
                    <img
                      src={sermon.image}
                      alt={sermon.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-eklezia-navy backdrop-blur">
                      {sermon.type}
                    </div>
                  </div>

                  <div className="flex min-h-[170px] flex-col justify-between p-3 md:p-4">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium">
                        <span className="rounded-full bg-eklezia-gold/20 px-3 py-1 text-eklezia-navy">
                          {sermon.category}
                        </span>

                        <span className="text-gray-400">{sermon.date}</span>
                      </div>

                      <h3 className="text-xl font-black leading-tight text-eklezia-navy transition group-hover:text-eklezia-gold">
                        {sermon.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {sermon.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={16} />
                        {sermon.duration}
                      </span>

                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-eklezia-navy text-white transition group-hover:bg-eklezia-gold group-hover:text-eklezia-navy">
                        <PlayCircle size={20} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}