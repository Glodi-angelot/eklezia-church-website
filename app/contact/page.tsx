"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const heroImage =
  "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1800";

const contactCards = [
  {
    icon: <MapPin size={24} />,
    title: "Adresse",
    text: "Kinshasa, République Démocratique du Congo",
  },
  {
    icon: <Phone size={24} />,
    title: "Téléphone",
    text: "+243 000 000 000",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    text: "contact@eklezia.demo",
  },
];

const schedules = [
  {
    day: "Dimanche",
    title: "Culte principal",
    time: "09h00 - 12h00",
  },
  {
    day: "Mercredi",
    title: "Étude biblique",
    time: "17h30 - 19h00",
  },
  {
    day: "Vendredi",
    title: "Prière et intercession",
    time: "17h30 - 19h30",
  },
];

export default function ContactPage() {
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
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.2rem]">
              <img
                src={heroImage}
                alt="Contact Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/35 via-eklezia-navy/60 to-eklezia-navy/95" />

              <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <MessageCircle size={16} />
                    Contact
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Entrer en contact avec la communauté Eklezia.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                  >
                    Une page pensée pour écrire à l’église, demander une prière,
                    poser une question ou rejoindre la communauté.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
            className="relative z-20 mx-auto -mt-12 grid max-w-6xl gap-4 rounded-[2rem] bg-white p-4 shadow-soft md:grid-cols-3"
          >
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] bg-eklezia-soft p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy">
                  {card.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-eklezia-navy">
                  {card.title}
                </h3>

                <p className="mt-2 leading-6 text-gray-600">{card.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="grid gap-6"
          >
            <div className="rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                <Sparkles size={26} />
              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight md:text-5xl">
                Nous écrire ou demander une prière
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Ce formulaire est une démonstration frontend. Dans une version
                complète, les messages pourraient être envoyés vers un tableau
                d’administration ou une adresse email.
              </p>

              <div className="mt-8 rounded-[2rem] bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Adresse fictive
                </p>
                <p className="mt-3 text-xl font-bold">
                  Avenue de la Foi, Kinshasa, RDC
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy">
                  <CalendarDays size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-eklezia-navy">
                    Horaires
                  </h2>
                  <p className="text-sm text-gray-500">
                    Programmes principaux de la semaine
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {schedules.map((schedule) => (
                  <div
                    key={schedule.title}
                    className="rounded-[1.5rem] bg-eklezia-soft p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-eklezia-gold">
                          {schedule.day}
                        </p>
                        <h3 className="mt-1 text-lg font-black text-eklezia-navy">
                          {schedule.title}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-eklezia-navy">
                        <Clock size={16} />
                        {schedule.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8"
          >
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Formulaire
              </span>

              <h2 className="mt-3 text-3xl font-black text-eklezia-navy md:text-5xl">
                Envoyer un message
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Contactez l’église, posez une question, demandez une prière ou
                exprimez votre souhait de rejoindre une activité.
              </p>
            </div>

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
                  Sujet
                </label>
                <select className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none">
                  <option>Demande de prière</option>
                  <option>Rejoindre la communauté</option>
                  <option>Information sur les cultes</option>
                  <option>Don ou fondation</option>
                  <option>Autre demande</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                Message
              </label>
              <textarea
                rows={7}
                placeholder="Écrivez votre message..."
                className="w-full resize-none rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
              />
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-navy px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              Envoyer le message
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="relative bg-eklezia-soft px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-soft"
            >
              <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] bg-eklezia-navy">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,58,95,1),rgba(30,58,95,0.78)),radial-gradient(circle_at_top_right,rgba(212,168,83,0.45),transparent_30%)]" />

                <div className="relative z-10 flex min-h-[440px] items-center justify-center p-8 text-center text-white">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                      <MapPin size={30} />
                    </div>

                    <h2 className="mt-7 text-3xl font-black md:text-5xl">
                      Carte de localisation
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
                      Bloc visuel prévu pour intégrer plus tard une vraie carte
                      Google Maps ou OpenStreetMap.
                    </p>

                    <p className="mt-7 rounded-full bg-white/10 px-6 py-3 text-sm font-medium">
                      Kinshasa · République Démocratique du Congo
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Localisation
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-eklezia-navy md:text-5xl">
                Une présence locale, une communauté accessible.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Cette section montre comment le site peut présenter l’adresse,
                les horaires, les contacts et une future carte interactive pour
                aider les fidèles à rejoindre l’église.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/communaute"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-navy px-7 py-4 font-semibold text-white transition hover:-translate-y-1"
                >
                  Rejoindre la communauté
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/dons"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
                >
                  Faire un don
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}