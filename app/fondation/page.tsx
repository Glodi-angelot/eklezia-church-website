"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { foundationActions } from "../../data/foundation";

const heroImage =
  "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1800";

const stats = [
  {
    value: "250+",
    label: "Personnes accompagnées",
  },
  {
    value: "18",
    label: "Actions sociales",
  },
  {
    value: "6",
    label: "Programmes actifs",
  },
  {
    value: "40+",
    label: "Bénévoles engagés",
  },
];

const helpWays = [
  {
    icon: <HandHeart size={24} />,
    title: "Faire un don",
    text: "Soutenir les actions sociales de la fondation à travers une contribution.",
  },
  {
    icon: <UsersRound size={24} />,
    title: "Devenir bénévole",
    text: "Participer aux activités sociales, aux visites et aux programmes d’aide.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Partager la mission",
    text: "Faire connaître les actions de la fondation autour de soi.",
  },
];

export default function FondationPage() {
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
                alt="Enfants accompagnés par la Fondation Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/20 via-eklezia-navy/45 to-eklezia-navy/82" />

              <div className="relative z-10 flex min-h-[600px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <HeartHandshake size={16} />
                    Fondation Eklezia
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Servir les plus vulnérables avec amour et responsabilité.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                  >
                    La Fondation Eklezia accompagne les orphelins, les veuves et
                    les familles vulnérables à travers des actions sociales
                    concrètes.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <Link
                      href="/dons"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Soutenir la fondation
                      <HandHeart size={20} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Nous contacter
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
            className="relative z-20 mx-auto -mt-12 grid max-w-6xl gap-4 rounded-[2rem] bg-white p-4 shadow-soft md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] bg-eklezia-soft p-5 text-center"
              >
                <p className="text-3xl font-black text-eklezia-navy">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Notre mission
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                Transformer la compassion en actions visibles.
              </h2>
            </div>

            <p className="text-lg leading-8 text-gray-600">
              Cette page présente la dimension sociale d’Eklezia. Elle montre
              comment une église peut utiliser le digital pour présenter ses
              causes, mobiliser les fidèles et encourager la solidarité.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft lg:col-span-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                <HeartHandshake size={26} />
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight">
                Une fondation au cœur de la mission de l’église.
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                La fondation aide à rendre visible l’engagement social de
                l’église : assistance, écoute, accompagnement, soutien éducatif
                et actions communautaires.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Soutien aux orphelins",
                  "Accompagnement des veuves",
                  "Aide aux familles vulnérables",
                  "Programmes sociaux et éducatifs",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-eklezia-gold" size={20} />
                    <span className="text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:col-span-7">
              {foundationActions.map((action, index) => (
                <motion.article
                  key={action.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                    <img
                      src={action.image}
                      alt={action.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/80 via-eklezia-navy/15 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-black">{action.title}</h3>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="leading-7 text-gray-600">
                      {action.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-eklezia-soft px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
              Participer
            </span>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Comment soutenir la Fondation Eklezia ?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {helpWays.map((item, index) => (
              <motion.div
                key={item.title}
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
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-black text-eklezia-navy transition group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600 transition group-hover:text-white/75">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-eklezia-navy p-8 text-center text-white shadow-soft md:p-12">
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Chaque geste peut devenir une aide concrète.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
              La page dons permettra de présenter une interface simple,
              rassurante et prête à évoluer vers un vrai module de paiement.
            </p>

            <Link
              href="/dons"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
            >
              Faire un don
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}