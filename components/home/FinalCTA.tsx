"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Mail,
  Sparkles,
} from "lucide-react";

const ctaImage =
  "https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-eklezia-soft px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,168,83,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(30,58,95,0.12),transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-eklezia-navy p-3 shadow-soft"
      >
        <div className="relative min-h-[620px] overflow-hidden rounded-[2.3rem]">
          <img
            src={ctaImage}
            alt="Solidarité et soutien communautaire"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-eklezia-navy via-eklezia-navy/80 to-eklezia-navy/30" />

          <div className="relative z-10 grid min-h-[620px] items-center gap-10 px-6 py-14 md:px-12 lg:grid-cols-[1fr_0.8fr] lg:px-16">
            <div className="max-w-3xl text-white">
              <motion.span
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
              >
                <Sparkles size={16} />
                Soutenir la mission
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-7 text-4xl font-black leading-tight md:text-6xl"
              >
                Une plateforme pensée pour rapprocher, édifier et servir.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-white/75"
              >
                Eklezia présente une église moderne capable de communiquer avec
                ses fidèles, partager ses prédications, publier ses annonces,
                soutenir sa fondation et accueillir de nouveaux membres.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/dons"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Faire un don
                  <HandHeart
                    size={20}
                    className="transition group-hover:scale-110"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Contacter l’église
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid gap-4"
            >
              <CTAInfoCard
                icon={<HeartHandshake size={24} />}
                title="Fondation"
                text="Présenter les actions sociales et encourager les dons."
              />

              <CTAInfoCard
                icon={<Mail size={24} />}
                title="Contact"
                text="Permettre aux visiteurs d’écrire, demander une prière ou rejoindre un groupe."
              />

              <CTAInfoCard
                icon={<HandHeart size={24} />}
                title="Dons"
                text="Préparer une interface claire pour soutenir l’église ou ses œuvres."
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CTAInfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
        {icon}
      </div>

      <h3 className="mt-5 text-2xl font-black">{title}</h3>

      <p className="mt-3 leading-7 text-white/70">{text}</p>
    </div>
  );
}