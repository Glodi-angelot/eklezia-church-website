"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Church,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

const aboutImage =
  "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1400";

const pillars = [
  {
    icon: <Church size={24} />,
    title: "Foi",
    text: "Mettre la parole, la prière et l’enseignement au centre de la vie communautaire.",
  },
  {
    icon: <Users size={24} />,
    title: "Communauté",
    text: "Créer un espace digital qui rapproche les fidèles, les familles et les groupes.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Solidarité",
    text: "Valoriser les actions sociales en faveur des veuves, des orphelins et des familles vulnérables.",
  },
];

const stats = [
  { value: "120+", label: "Prédications" },
  { value: "8", label: "Groupes actifs" },
  { value: "18", label: "Actions sociales" },
  { value: "1", label: "Vision commune" },
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-eklezia-cream px-5 py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,168,83,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(30,58,95,0.10),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
              <Sparkles size={16} />
              À propos d’Eklezia
            </span>

            <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Une expérience digitale conçue pour servir une communauté de foi.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="max-w-3xl text-lg leading-8 text-gray-600"
          >
            Eklezia est un concept de site web moderne pour une église fictive.
            Il montre comment une organisation spirituelle ou communautaire peut
            présenter ses prédications, ses annonces, sa fondation, ses actions
            sociales et sa communauté dans une interface claire, humaine et
            professionnelle.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft lg:col-span-7"
          >
            <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem]">
              <img
                src={aboutImage}
                alt="Communauté Eklezia"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/90 via-eklezia-navy/35 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Foi · Service · Impact
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                  Vision du projet
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                  Rendre l’église plus proche, plus visible et plus accessible.
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                  Le projet met en avant une présence digitale capable de
                  connecter les fidèles, diffuser les messages, organiser les
                  annonces et soutenir les missions sociales.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                <BookOpen size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Un site qui n’est pas seulement une vitrine.
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                Eklezia présente une vraie logique de plateforme : contenus,
                multimédia, dons, communauté, fondation et informations
                importantes de l’église.
              </p>

              <Link
                href="/histoire"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
              >
                Découvrir l’histoire
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] bg-white p-6 shadow-soft"
                >
                  <p className="text-3xl font-black text-eklezia-navy">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              text={pillar.text}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  icon,
  title,
  text,
  delay,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="group rounded-[2rem] bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:bg-eklezia-navy"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy transition group-hover:bg-eklezia-gold group-hover:text-eklezia-navy">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-black text-eklezia-navy transition group-hover:text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600 transition group-hover:text-white/75">
        {text}
      </p>
    </motion.div>
  );
}