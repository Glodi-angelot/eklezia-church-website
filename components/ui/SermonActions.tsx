"use client";

import { useState } from "react";
import { PlayCircle, Share2, X, CheckCircle2 } from "lucide-react";

type SermonActionsProps = {
  title: string;
  type: "Audio" | "Vidéo";
  preacher: string;
};

export default function SermonActions({
  title,
  type,
  preacher,
}: SermonActionsProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: `Découvre cette prédication : ${title}`,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2500);
      }
    } catch {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  };

  return (
    <>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <button
          type="button"
          onClick={() => setIsPlayerOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
        >
          Lancer la prédication
          <PlayCircle size={20} />
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-eklezia-gold px-7 py-4 font-semibold text-eklezia-navy transition hover:-translate-y-1"
        >
          {copied ? "Lien copié" : "Partager"}
          {copied ? <CheckCircle2 size={20} /> : <Share2 size={20} />}
        </button>
      </div>

      {isPlayerOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-[2rem] bg-white p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setIsPlayerOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-eklezia-soft text-eklezia-navy transition hover:bg-eklezia-gold"
            >
              <X size={20} />
            </button>

            <div className="pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-eklezia-gold">
                Lecture {type}
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-eklezia-navy">
                {title}
              </h2>

              <p className="mt-2 text-gray-500">{preacher}</p>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-eklezia-navy p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-eklezia-gold text-eklezia-navy">
                  <PlayCircle size={30} />
                </div>

                <div>
                  <p className="font-bold">Lecteur démo</p>
                  <p className="mt-1 text-sm text-white/65">
                    Dans une vraie version backend, cette zone lira le fichier
                    audio ou vidéo de la prédication.
                  </p>
                </div>
              </div>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-1/3 rounded-full bg-eklezia-gold" />
              </div>

              <div className="mt-3 flex justify-between text-xs text-white/55">
                <span>00:00</span>
                <span>Démo</span>
              </div>
            </div>

            <p className="mt-6 rounded-2xl bg-eklezia-soft p-5 text-sm leading-7 text-gray-600">
              Pour le moment, le bouton lance une fenêtre de lecture démo. Plus
              tard, on pourra ajouter un vrai champ `mediaUrl` dans
              `data/sermons.ts` pour lire un vrai fichier audio ou vidéo.
            </p>
          </div>
        </div>
      )}
    </>
  );
}