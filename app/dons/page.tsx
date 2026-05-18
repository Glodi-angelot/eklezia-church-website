"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  HandHeart,
  HeartHandshake,
  Info,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const heroImage =
  "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1800";

const donationTypes = [
  {
    id: "eglise",
    title: "Don pour l’église",
    description: "Soutenir les activités, cultes, programmes et besoins de l’église.",
  },
  {
    id: "fondation",
    title: "Don pour la fondation",
    description: "Soutenir les actions sociales envers les orphelins, veuves et familles.",
  },
  {
    id: "orphelins",
    title: "Soutien aux orphelins",
    description: "Contribuer à l’accompagnement scolaire, alimentaire et social.",
  },
  {
    id: "veuves",
    title: "Soutien aux veuves",
    description: "Participer à l’assistance et à l’accompagnement des femmes vulnérables.",
  },
];

const suggestedAmounts = [10, 25, 50, 100];

const paymentMethods = [
  {
    id: "mobile",
    label: "Mobile Money",
    icon: <Wallet size={20} />,
  },
  {
    id: "card",
    label: "Carte bancaire",
    icon: <CreditCard size={20} />,
  },
  {
    id: "bank",
    label: "Virement",
    icon: <Landmark size={20} />,
  },
];

export default function DonsPage() {
  const [selectedType, setSelectedType] = useState(donationTypes[0].id);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);

  const activeDonationType = donationTypes.find((item) => item.id === selectedType);

  const finalAmount = useMemo(() => {
    if (customAmount.trim()) {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }

    return selectedAmount ?? 0;
  }, [customAmount, selectedAmount]);

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
                alt="Dons et solidarité Eklezia"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-eklezia-navy/25 via-eklezia-navy/55 to-eklezia-navy/90" />

              <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 py-20 text-center text-white">
                <div className="max-w-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                  >
                    <HandHeart size={16} />
                    Faire un don
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="mt-7 text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
                  >
                    Soutenir l’église et ses actions sociales.
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
                  >
                    Une interface claire et rassurante pour présenter les dons à
                    l’église, à la fondation et aux projets sociaux.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="rounded-[2.5rem] bg-white p-5 shadow-soft md:p-8"
          >
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Contribution
              </span>

              <h2 className="mt-3 text-3xl font-black text-eklezia-navy md:text-5xl">
                Choisir le type de don
              </h2>

            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {donationTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`rounded-[2rem] border p-5 text-left transition hover:-translate-y-1 ${
                    selectedType === type.id
                      ? "border-eklezia-navy bg-eklezia-navy text-white shadow-soft"
                      : "border-black/5 bg-eklezia-soft text-eklezia-navy hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        selectedType === type.id
                          ? "bg-eklezia-gold text-eklezia-navy"
                          : "bg-eklezia-gold/20 text-eklezia-navy"
                      }`}
                    >
                      <HeartHandshake size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{type.title}</h3>
                      <p
                        className={`mt-2 text-sm leading-6 ${
                          selectedType === type.id ? "text-white/75" : "text-gray-600"
                        }`}
                      >
                        {type.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-black text-eklezia-navy">
                Choisir un montant
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`rounded-2xl px-5 py-4 font-bold transition hover:-translate-y-1 ${
                      selectedAmount === amount && !customAmount
                        ? "bg-eklezia-navy text-white"
                        : "bg-eklezia-soft text-eklezia-navy hover:bg-eklezia-gold"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-eklezia-navy">
                  Montant personnalisé
                </label>

                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(event) => {
                    setCustomAmount(event.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Exemple : 75"
                  className="w-full rounded-2xl bg-eklezia-soft px-5 py-4 text-eklezia-navy outline-none placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-black text-eklezia-navy">
                Moyen de paiement
              </h3>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-4 font-semibold transition hover:-translate-y-1 ${
                      paymentMethod === method.id
                        ? "bg-eklezia-navy text-white"
                        : "bg-eklezia-soft text-eklezia-navy hover:bg-eklezia-gold"
                    }`}
                  >
                    {method.icon}
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-eklezia-gold/30 bg-eklezia-gold/10 p-5">
              <div className="flex items-start gap-4">
                <Info className="mt-1 shrink-0 text-eklezia-navy" size={22} />
                <p className="leading-7 text-gray-700">
                  Pour ce projet, le paiement n’est pas réellement
                  activé. Le but est de présenter une expérience utilisateur
                  prête à être connectée à un vrai service de paiement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="h-fit rounded-[2.5rem] bg-eklezia-navy p-5 text-white shadow-soft md:p-8 lg:sticky lg:top-28"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-eklezia-gold text-eklezia-navy">
              <HandHeart size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-black">Résumé du don</h2>

            <div className="mt-7 space-y-4">
              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-white/50">Cause sélectionnée</p>
                <p className="mt-2 text-xl font-bold">
                  {activeDonationType?.title}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-white/50">Montant</p>
                <p className="mt-2 text-4xl font-black text-eklezia-gold">
                  ${finalAmount || 0}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-white/10 p-5">
                <p className="text-sm text-white/50">Paiement</p>
                <p className="mt-2 text-xl font-bold">
                  {paymentMethods.find((method) => method.id === paymentMethod)?.label}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
            >
              Continuer le don
              <ArrowRight size={20} />
            </button>

            <div className="mt-8 space-y-4">
              <TrustItem
                icon={<LockKeyhole size={20} />}
                text="Interface pensée pour un futur paiement sécurisé."
              />
              <TrustItem
                icon={<ShieldCheck size={20} />}
                text="Présentation claire de la cause soutenue."
              />
              <TrustItem
                icon={<CheckCircle2 size={20} />}
                text="Expérience simple, rapide et accessible."
              />
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative bg-eklezia-soft px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              title="Transparence"
              text="Présenter clairement les causes et les projets soutenus par les dons."
            />
            <InfoCard
              title="Impact social"
              text="Mettre en avant les actions envers les orphelins, les veuves et les familles vulnérables."
            />
            <InfoCard
              title="Évolution possible"
              text="Préparer une future intégration avec un vrai système de paiement."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
      <div className="text-eklezia-gold">{icon}</div>
      <p className="text-sm leading-6 text-white/75">{text}</p>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-soft">
      <h3 className="text-2xl font-black text-eklezia-navy">{title}</h3>
      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </div>
  );
}