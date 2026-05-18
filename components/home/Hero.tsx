"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  HeartHandshake,
  PlayCircle,
  Users,
} from "lucide-react";

const heroImages = {
  main: "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1600",
  prayer:
    "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
  community:
    "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-eklezia-cream px-5 pb-24 pt-10 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,95,0.08),transparent_30%),radial-gradient(circle_at_top_right,rgba(212,168,83,0.18),transparent_35%),radial-gradient(circle_at_bottom_center,rgba(30,58,95,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeScale}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-soft"
        >
          <div className="relative h-[640px] w-full md:h-[720px]">
            <motion.img
              src={heroImages.main}
              alt="Communauté chrétienne"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/35 via-eklezia-navy/45 to-eklezia-navy/90" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-4xl text-center text-white">
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70"
                >
                  Foi · Communauté · Espérance
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.52 }}
                  className="mb-6 flex justify-center"
                >
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                    Bienvenue à Eklezia
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.85, delay: 0.6 }}
                  className="text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                >
                  Une présence digitale
                  <br />
                  pour une église vivante.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.85, delay: 0.8 }}
                  className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
                >
                  Eklezia connecte les fidèles, diffuse les prédications,
                  valorise les annonces et soutient les actions sociales de
                  l’église dans une expérience moderne et inspirante.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.85, delay: 1 }}
                  className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <Link
                    href="/predications"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Suivre une prédication
                    <PlayCircle
                      size={20}
                      className="transition group-hover:scale-110"
                    />
                  </Link>

                  <Link
                    href="/dons"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    Faire un don
                    <ArrowRight
                      size={20}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1.15 }}
              className="absolute left-6 top-6 hidden rounded-3xl bg-white/95 p-4 shadow-soft backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-navy/10 text-eklezia-navy">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <p className="font-bold text-eklezia-navy">
                    Culte du dimanche
                  </p>
                  <p className="text-sm text-gray-500">
                    Chaque semaine · 09h00
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 1.25 }}
              className="absolute bottom-8 right-6 hidden rounded-3xl bg-white/95 p-4 shadow-soft backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy">
                  <HeartHandshake size={22} />
                </div>

                <div>
                  <p className="font-bold text-eklezia-navy">
                    Fondation Eklezia
                  </p>
                  <p className="text-sm text-gray-500">
                    Orphelins, veuves, solidarité
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35 }}
          className="relative z-10 mx-auto -mt-16 grid max-w-6xl gap-6 px-2 md:grid-cols-2"
        >
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
            <div className="group relative h-[260px] overflow-hidden rounded-[1.5rem]">
              <img
                src={heroImages.prayer}
                alt="Moment de prière"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Prière
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Des moments de recueillement et d’élévation
                </h3>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft">
            <div className="group relative h-[260px] overflow-hidden rounded-[1.5rem]">
              <img
                src={heroImages.community}
                alt="Communauté Eklezia"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Communauté
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Une jeunesse, des familles et une vision commune
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.55 }}
          className="mx-auto mt-8 grid max-w-6xl gap-4 rounded-[2rem] bg-white p-5 shadow-soft md:grid-cols-2 lg:grid-cols-4"
        >
          <InfoCard
            icon={<PlayCircle size={22} />}
            title="Prédications"
            text="Audio, vidéo, replay"
          />

          <InfoCard
            icon={<Users size={22} />}
            title="Communauté"
            text="Groupes et accompagnement"
          />

          <InfoCard
            icon={<HeartHandshake size={22} />}
            title="Solidarité"
            text="Fondation et actions"
          />

          <InfoCard
            icon={<CalendarDays size={22} />}
            title="Annonces"
            text="Programmes et nouveautés"
          />
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-2xl bg-eklezia-soft px-4 py-4 transition hover:-translate-y-1 hover:bg-eklezia-navy hover:text-white">
      <div className="text-eklezia-navy transition group-hover:text-white">
        {icon}
      </div>

      <div>
        <p className="font-semibold text-eklezia-navy transition group-hover:text-white">
          {title}
        </p>
        <p className="text-sm text-gray-600 transition group-hover:text-white/70">
          {text}
        </p>
      </div>
    </div>
  );
}