"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Church,
  Compass,
  HeartHandshake,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";

const heroImage =
  "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1800";

const values = [
  {
    icon: <Church size={24} />,
    title: "Foi",
    text: "Placer Dieu, la prière et la parole au centre de la vie communautaire.",
  },
  {
    icon: <Users size={24} />,
    title: "Communauté",
    text: "Créer un environnement d’accueil, de fraternité et d’accompagnement.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Service",
    text: "Servir les fidèles, les familles et les personnes vulnérables avec amour.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "Naissance de la vision",
    text: "Eklezia commence comme une petite communauté de prière avec une vision centrée sur la foi, la famille et l’entraide.",
  },
  {
    year: "2019",
    title: "Structuration de la communauté",
    text: "Les premiers groupes sont mis en place : jeunesse, intercession, chorale, familles et actions sociales.",
  },
  {
    year: "2022",
    title: "Lancement de la fondation",
    text: "La Fondation Eklezia est créée pour soutenir les orphelins, les veuves et les familles vulnérables.",
  },
  {
    year: "2026",
    title: "Présence digitale",
    text: "Le projet Eklezia devient une plateforme web moderne pour présenter les prédications, annonces, dons et activités.",
  },
];

export default function HistoirePage() {
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
            <div className="relative min-h-[580px] overflow-hidden rounded-[2.2rem]">
              <img
                src={heroImage}
                alt="Histoire de l’église Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/35 via-eklezia-navy/60 to-eklezia-navy/92" />

              <div className="relative z-10 flex min-h-[580px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <BookOpen size={16} />
                    Notre histoire
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Une vision née pour servir Dieu et bâtir une communauté.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                  >
                    Eklezia est une église fictive créée pour illustrer comment
                    une communauté de foi peut raconter son histoire, partager sa
                    vision et présenter sa mission à travers une plateforme web
                    moderne.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-white p-8 shadow-soft md:p-10"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-eklezia-soft px-4 py-2 text-sm font-medium text-eklezia-navy">
                <Sparkles size={16} />
                Identité
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                Une église tournée vers la foi, la famille et la mission.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                L’histoire d’Eklezia repose sur une idée simple : créer une
                communauté où chaque personne peut être accueillie, édifiée,
                accompagnée et encouragée dans sa marche spirituelle.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Dans ce projet portfolio, cette page sert à montrer comment
                présenter l’identité d’une organisation avec un design clair,
                humain et professionnel.
              </p>

              <Link
                href="/communaute"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white transition hover:-translate-y-1"
              >
                Rejoindre la communauté
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="overflow-hidden rounded-[2.5rem] bg-eklezia-navy p-3 shadow-soft"
            >
              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Communauté en prière"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/95 via-eklezia-navy/35 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Vision
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                    Être une communauté vivante, connectée et engagée.
                  </h3>

                  <p className="mt-5 max-w-2xl leading-8 text-white/75">
                    Eklezia veut représenter une église moderne capable de
                    communiquer, accompagner, servir et rassembler.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-eklezia-soft px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
              Valeurs
            </span>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Les piliers qui donnent du sens à la mission d’Eklezia.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group rounded-[2rem] bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:bg-eklezia-navy"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy transition group-hover:bg-eklezia-gold">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-eklezia-navy transition group-hover:text-white">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 transition group-hover:text-white/75">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Parcours
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                Une ligne du temps simple pour raconter l’évolution.
              </h2>
            </div>

            <p className="text-lg leading-8 text-gray-600">
              La ligne du temps permet de présenter les étapes importantes de
              l’église et de donner de la profondeur à son identité.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] bg-white p-7 shadow-soft"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-eklezia-navy text-xl font-black text-white">
                    {item.year}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-eklezia-navy">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-eklezia-navy px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="overflow-hidden rounded-[2.5rem] bg-white/10 p-3"
          >
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Communauté Eklezia"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/90 via-eklezia-navy/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
              <Quote size={26} />
            </div>

            <h2 className="mt-7 text-3xl font-black leading-tight md:text-5xl">
              “Une communauté forte se construit dans la foi, l’amour et le
              service.”
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Ce message pastoral fictif permet de donner une voix humaine à
              l’église et de renforcer l’identité du site.
            </p>

            <div className="mt-8 rounded-[2rem] bg-white/10 p-6">
              <p className="font-bold">Pasteur Samuel Mbala</p>
              <p className="mt-1 text-sm text-white/60">Pasteur principal fictif</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-eklezia-cream px-5 py-24 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
            <Compass size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
            Découvrir la communauté Eklezia
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Après avoir découvert l’histoire, les visiteurs peuvent rejoindre un
            groupe, demander une prière ou participer à la vie communautaire.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/communaute"
              className="inline-flex items-center gap-2 rounded-full bg-eklezia-navy px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              Rejoindre la communauté
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
            >
              Contacter l’église
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}