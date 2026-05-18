"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { foundationActions } from "../../data/foundation";

const mainImage =
  "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1600";

const stats = [
  {
    value: "250+",
    label: "Personnes soutenues",
  },
  {
    value: "18",
    label: "Actions sociales",
  },
  {
    value: "6",
    label: "Programmes actifs",
  },
];

export default function FoundationPreview() {
  return (
    <section className="relative overflow-hidden bg-eklezia-cream px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,168,83,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(30,58,95,0.10),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
              <HeartHandshake size={16} />
              Fondation Eklezia
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
              Une mission sociale tournée vers les veuves, les orphelins et les
              familles vulnérables.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          >
            <Link
              href="/dons"
              className="inline-flex items-center gap-2 rounded-full bg-eklezia-navy px-6 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-1"
            >
              Soutenir la fondation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <motion.article
            initial={{ opacity: 0, scale: 0.97, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Link
              href="/fondation"
              className="group block overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft"
            >
              <div className="relative h-[560px] overflow-hidden rounded-[2rem]">
                <img
                  src={mainImage}
                  alt="Fondation Eklezia - action sociale"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/95 via-eklezia-navy/45 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Solidarité · Espérance · Impact
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                    Action sociale
                  </p>

                  <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                    Soutenir ceux qui traversent des saisons difficiles.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                    La fondation accompagne les personnes vulnérables à travers
                    l’aide, l’écoute, la présence et la solidarité
                    communautaire.
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-eklezia-navy transition group-hover:-translate-y-1">
                    Découvrir la fondation
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                <HandHeart size={26} />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Transformer la foi en actions concrètes.
              </h3>

              <p className="mt-4 leading-8 text-white/75">
                Eklezia met en avant une fondation dédiée à l’accompagnement
                social, avec une interface pensée pour présenter les causes et
                encourager les dons.
              </p>

              <Link
                href="/dons"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-eklezia-gold px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
              >
                Faire un don
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] bg-white p-5 text-center shadow-soft"
                >
                  <p className="text-3xl font-black text-eklezia-navy">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
              className="grid gap-4"
            >
              <MiniMissionCard
                icon={<UsersRound size={22} />}
                title="Accompagnement humain"
                text="Créer un lien de proximité avec les personnes fragilisées."
              />

              <MiniMissionCard
                icon={<ShieldCheck size={22} />}
                title="Transparence"
                text="Présenter clairement les causes soutenues par la fondation."
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {foundationActions.slice(0, 3).map((action, index) => (
            <motion.article
              key={action.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft transition hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                <img
                  src={action.image}
                  alt={action.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-black">{action.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {action.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniMissionCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-start gap-4 rounded-[1.7rem] bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:bg-eklezia-navy">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy transition group-hover:bg-eklezia-gold">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-eklezia-navy transition group-hover:text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-gray-600 transition group-hover:text-white/70">
          {text}
        </p>
      </div>
    </div>
  );
}