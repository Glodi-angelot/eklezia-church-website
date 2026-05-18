"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MessageCircle,
  Music,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import { communityGroups } from "../../data/community";

const heroImage =
  "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1800";

const steps = [
  {
    title: "Choisir un groupe",
    text: "Découvrir les ministères et identifier l’espace qui correspond à son appel.",
  },
  {
    title: "Remplir le formulaire",
    text: "Envoyer une demande simple pour être orienté vers les responsables.",
  },
  {
    title: "Participer aux activités",
    text: "Rejoindre les rencontres, cultes, répétitions, prières ou actions sociales.",
  },
];

const icons = [
  <Users key="users" size={24} />,
  <Music key="music" size={24} />,
  <ShieldCheck key="shield" size={24} />,
  <HeartHandshake key="heart" size={24} />,
  <UsersRound key="women" size={24} />,
  <Users key="men" size={24} />,
];

export default function CommunautePage() {
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
            <div className="relative min-h-[600px] overflow-hidden rounded-[2.2rem]">
              <img
                src={heroImage}
                alt="Communauté Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/25 via-eklezia-navy/55 to-eklezia-navy/92" />

              <div className="relative z-10 flex min-h-[600px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <Users size={16} />
                    Communauté Eklezia
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Une communauté vivante où chacun peut trouver sa place.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                  >
                    Rejoindre Eklezia, c’est participer à une vie communautaire
                    faite de prière, de service, de louange, d’accompagnement et
                    de solidarité.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <a
                      href="#rejoindre"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Rejoindre un groupe
                      <ArrowRight size={20} />
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Demander une prière
                      <MessageCircle size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Groupes
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                Des espaces pour servir, grandir et marcher ensemble.
              </h2>
            </div>

            <p className="text-lg leading-8 text-gray-600">
              Cette page permet aux visiteurs de découvrir les groupes de
              l’église et de comprendre comment participer à la vie
              communautaire.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {communityGroups.map((group, index) => (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden rounded-[1.5rem]">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/80 via-eklezia-navy/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-eklezia-navy">
                    {icons[index]}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                      {group.members}
                    </span>

                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-eklezia-gold text-eklezia-navy">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-black text-eklezia-navy">
                    {group.name}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {group.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-eklezia-soft px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
              <Sparkles size={16} />
              Comment rejoindre ?
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Un parcours simple pour intégrer la communauté.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="rounded-[2rem] bg-white p-7 shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-navy text-xl font-black text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-black text-eklezia-navy">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="rejoindre" className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
              <Mail size={26} />
            </div>

            <h2 className="mt-7 text-3xl font-black leading-tight md:text-5xl">
              Rejoindre un groupe Eklezia
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/75">
              Ce formulaire est une démonstration frontend. Dans une version
              complète, il pourrait envoyer une demande à l’administration ou à
              un responsable de groupe.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Choisir un groupe",
                "Laisser ses coordonnées",
                "Recevoir une orientation",
                "Participer à la vie communautaire",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-eklezia-gold" size={20} />
                  <span className="text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                  Téléphone
                </label>
                <input
                  type="text"
                  placeholder="+243 ..."
                  className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                  Groupe souhaité
                </label>
                <select className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none">
                  {communityGroups.map((group) => (
                    <option key={group.id}>{group.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Expliquez brièvement votre demande..."
                className="w-full resize-none rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
              />
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-navy px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              Envoyer la demande
              <ArrowRight size={20} />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="relative bg-eklezia-navy px-5 py-24 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
            <MessageCircle size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-black leading-tight md:text-5xl">
            Besoin d’un accompagnement ou d’une prière ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Eklezia peut aussi présenter une section d’écoute, de conseil et de
            demande de prière pour accompagner les visiteurs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
          >
            Aller au contact
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}