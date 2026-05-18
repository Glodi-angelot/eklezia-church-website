"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Church,
  DollarSign,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  Megaphone,
  PlayCircle,
  Users,
} from "lucide-react";
import { sermons } from "../../data/sermons";
import { announcements } from "../../data/announcements";
import { communityGroups } from "../../data/community";
import { foundationActions } from "../../data/foundation";

const stats = [
  {
    title: "Prédications",
    value: sermons.length,
    description: "Messages audio et vidéo",
    icon: <PlayCircle size={24} />,
  },
  {
    title: "Annonces",
    value: announcements.length,
    description: "Programmes publiés",
    icon: <Megaphone size={24} />,
  },
  {
    title: "Groupes",
    value: communityGroups.length,
    description: "Communautés actives",
    icon: <Users size={24} />,
  },
  {
    title: "Actions sociales",
    value: foundationActions.length,
    description: "Projets de fondation",
    icon: <HeartHandshake size={24} />,
  },
];

const donations = [
  {
    name: "Don pour la fondation",
    amount: "$250",
    status: "Confirmé",
  },
  {
    name: "Soutien aux orphelins",
    amount: "$120",
    status: "Confirmé",
  },
  {
    name: "Don pour l’église",
    amount: "$80",
    status: "En attente",
  },
];

const messages = [
  {
    name: "Grâce M.",
    subject: "Demande de prière",
    date: "Aujourd’hui",
  },
  {
    name: "Jonathan K.",
    subject: "Rejoindre la chorale",
    date: "Hier",
  },
  {
    name: "Esther L.",
    subject: "Information sur les cultes",
    date: "2 jours",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-eklezia-cream px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-[2.5rem] bg-eklezia-navy p-8 text-white shadow-soft md:p-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                <LayoutDashboard size={16} />
                Dashboard démo
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Administration Eklezia
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                Une interface démonstrative pour montrer comment l’église
                pourrait gérer ses prédications, annonces, dons, messages et
                activités communautaires.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-6 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
            >
              Voir le site
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-[2rem] bg-white p-4 shadow-soft lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-3 rounded-[1.5rem] bg-eklezia-soft p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-navy text-white">
                <Church size={22} />
              </div>

              <div>
                <p className="font-black text-eklezia-navy">Eklezia</p>
                <p className="text-xs text-gray-500">Admin démo</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                "Vue générale",
                "Prédications",
                "Annonces",
                "Dons",
                "Messages",
                "Communauté",
              ].map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    index === 0
                      ? "bg-eklezia-navy text-white"
                      : "text-eklezia-navy hover:bg-eklezia-soft"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          <section className="grid gap-6">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-[2rem] bg-white p-6 shadow-soft"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy">
                    {stat.icon}
                  </div>

                  <p className="mt-6 text-4xl font-black text-eklezia-navy">
                    {stat.value}
                  </p>

                  <h3 className="mt-2 text-lg font-black text-eklezia-navy">
                    {stat.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
                className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8"
              >
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-eklezia-navy">
                      Dernières prédications
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Aperçu des messages publiés
                    </p>
                  </div>

                  <Link
                    href="/predications"
                    className="inline-flex items-center gap-2 rounded-full bg-eklezia-soft px-5 py-3 text-sm font-semibold text-eklezia-navy transition hover:bg-eklezia-gold"
                  >
                    Voir
                    <ArrowRight size={17} />
                  </Link>
                </div>

                <div className="space-y-4">
                  {sermons.slice(0, 5).map((sermon) => (
                    <div
                      key={sermon.id}
                      className="grid gap-4 rounded-[1.5rem] bg-eklezia-soft p-4 md:grid-cols-[90px_1fr_auto]"
                    >
                      <img
                        src={sermon.image}
                        alt={sermon.title}
                        className="h-24 w-full rounded-2xl object-cover md:h-full"
                      />

                      <div>
                        <span className="rounded-full bg-eklezia-gold/20 px-3 py-1 text-xs font-semibold text-eklezia-navy">
                          {sermon.category}
                        </span>

                        <h3 className="mt-3 font-black leading-tight text-eklezia-navy">
                          {sermon.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {sermon.preacher}
                        </p>
                      </div>

                      <div className="flex items-center text-sm font-semibold text-eklezia-navy">
                        {sermon.type}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
                className="grid gap-6"
              >
                <div className="rounded-[2.5rem] bg-eklezia-navy p-6 text-white shadow-soft md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
                    <DollarSign size={26} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black">
                    Dons simulés
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Exemple d’un futur suivi des dons dans une version backend.
                  </p>

                  <div className="mt-6 space-y-3">
                    {donations.map((donation) => (
                      <div
                        key={donation.name}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4"
                      >
                        <div>
                          <p className="font-semibold">{donation.name}</p>
                          <p className="text-xs text-white/50">
                            {donation.status}
                          </p>
                        </div>

                        <p className="font-black text-eklezia-gold">
                          {donation.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eklezia-gold/20 text-eklezia-navy">
                      <Bell size={22} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-black text-eklezia-navy">
                        Messages récents
                      </h2>
                      <p className="text-sm text-gray-500">
                        Demandes reçues
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div
                        key={message.name}
                        className="rounded-2xl bg-eklezia-soft p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-black text-eklezia-navy">
                            {message.name}
                          </p>
                          <span className="text-xs text-gray-500">
                            {message.date}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-600">
                          {message.subject}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
                className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-eklezia-navy">
                      Annonces récentes
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Programmes et événements
                    </p>
                  </div>

                  <CalendarDays className="text-eklezia-navy" size={26} />
                </div>

                <div className="space-y-4">
                  {announcements.slice(0, 4).map((announcement) => (
                    <div
                      key={announcement.id}
                      className="rounded-[1.5rem] bg-eklezia-soft p-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-eklezia-gold/20 px-3 py-1 text-xs font-semibold text-eklezia-navy">
                          {announcement.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {announcement.date}
                        </span>
                      </div>

                      <h3 className="mt-3 font-black text-eklezia-navy">
                        {announcement.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.42, ease: "easeOut" }}
                className="rounded-[2.5rem] bg-white p-6 shadow-soft md:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-eklezia-navy">
                      Communauté
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Groupes et ministères
                    </p>
                  </div>

                  <Users className="text-eklezia-navy" size={26} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {communityGroups.slice(0, 6).map((group) => (
                    <div
                      key={group.id}
                      className="rounded-[1.5rem] bg-eklezia-soft p-5"
                    >
                      <p className="font-black text-eklezia-navy">
                        {group.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {group.members}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.48, ease: "easeOut" }}
              className="rounded-[2.5rem] border border-eklezia-gold/30 bg-eklezia-gold/15 p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-eklezia-navy">
                    Note portfolio
                  </h2>

                  <p className="mt-3 max-w-3xl leading-8 text-gray-700">
                    Ce dashboard est une démonstration visuelle. Il montre la
                    direction d’une future version backend avec authentification,
                    gestion de contenus, dons, messages et statistiques.
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-eklezia-navy">
                  <Mail size={18} />
                  Mode démo
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  );
}