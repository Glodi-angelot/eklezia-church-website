"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bell,
  HeartHandshake,
  MessageCircle,
  Music,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import { communityGroups } from "../../data/community";

const communityImage =
  "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1600";

const groupIcons: Record<string, ReactNode> = {
  Jeunesse: <Users size={22} />,
  Chorale: <Music size={22} />,
  Intercession: <ShieldCheck size={22} />,
  Fondation: <HeartHandshake size={22} />,
  Femmes: <UsersRound size={22} />,
  Hommes: <Users size={22} />,
};

const highlights = [
  {
    icon: <Users size={22} />,
    title: "Rejoindre un groupe",
    text: "Trouver un espace adapté à son âge, son appel ou son engagement.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Demander une prière",
    text: "Laisser une demande pour recevoir un accompagnement spirituel.",
  },
  {
    icon: <Bell size={22} />,
    title: "Rester informé",
    text: "Suivre les programmes, annonces et activités importantes.",
  },
];

export default function JoinCommunity() {
  const displayedGroups = communityGroups.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-eklezia-cream px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,95,0.10),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(212,168,83,0.18),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-eklezia-gold/40 bg-white px-4 py-2 text-sm font-medium text-eklezia-navy shadow-sm">
            <Sparkles size={16} />
            Rejoindre la communauté
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
            Une communauté vivante où chacun peut trouver sa place.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Eklezia permet aux fidèles de rejoindre un groupe, participer aux
            activités, demander un accompagnement et rester connectés à la vie
            de l’église.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 32 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="group overflow-hidden rounded-[2.7rem] bg-white p-3 shadow-soft">
              <div className="relative min-h-[560px] overflow-hidden rounded-[2.2rem]">
                <img
                  src={communityImage}
                  alt="Communauté Eklezia"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-eklezia-navy/95 via-eklezia-navy/45 to-eklezia-navy/10" />

                <div className="absolute left-6 top-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Groupes · Service · Accompagnement
                </div>

                <div className="absolute right-6 top-6 hidden rounded-[1.5rem] bg-white/95 p-4 shadow-soft backdrop-blur-md sm:block">
                  <p className="text-3xl font-black text-eklezia-navy">6</p>
                  <p className="text-sm text-gray-500">Groupes actifs</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">
                    Vie communautaire
                  </p>

                  <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                    Servir, grandir et marcher ensemble dans la foi.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                    Une section pensée pour orienter rapidement les visiteurs
                    vers les groupes, les responsables et les activités de la
                    communauté.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/communaute"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Explorer les groupes
                      <ArrowRight size={20} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                    >
                      Demander une prière
                      <MessageCircle size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 lg:col-span-5">
            {displayedGroups.map((group, index) => (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href="/communaute"
                  className="group flex items-start gap-5 rounded-[2rem] bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:bg-eklezia-navy"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy transition group-hover:bg-eklezia-gold">
                    {groupIcons[group.name] ?? <Users size={22} />}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-black text-eklezia-navy transition group-hover:text-white">
                        {group.name}
                      </h3>

                      <span className="rounded-full bg-eklezia-soft px-3 py-1 text-xs font-semibold text-eklezia-navy transition group-hover:bg-white/10 group-hover:text-white">
                        {group.members}
                      </span>
                    </div>

                    <p className="mt-2 leading-7 text-gray-600 transition group-hover:text-white/75">
                      {group.description}
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-eklezia-soft text-eklezia-navy transition group-hover:bg-eklezia-gold md:flex">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
              className="rounded-[2rem] border border-eklezia-gold/30 bg-eklezia-gold/15 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                  <Sparkles size={22} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-eklezia-navy">
                    Découvrir tous les groupes
                  </h3>

                  <p className="mt-2 leading-7 text-gray-600">
                    La page communauté présente tous les groupes avec leurs
                    détails et un formulaire pour rejoindre une activité.
                  </p>

                  <Link
                    href="/communaute"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-eklezia-navy"
                  >
                    Voir la communauté
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
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
              className="group rounded-[2rem] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:bg-eklezia-navy"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy transition group-hover:bg-eklezia-gold">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-black text-eklezia-navy transition group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600 transition group-hover:text-white/75">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}