export type Sermon = {
  id: number;
  slug: string;
  title: string;
  preacher: string;
  category: string;
  type: "Audio" | "Vidéo";
  duration: string;
  date: string;
  image: string;
  excerpt: string;
};

export const sermons: Sermon[] = [
  {
    id: 1,
    slug: "marcher-dans-la-foi",
    title: "Marcher dans la foi malgré les saisons difficiles",
    preacher: "Pasteur Samuel Mbala",
    category: "Foi",
    type: "Vidéo",
    duration: "42 min",
    date: "12 mai 2026",
    image:
      "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un message d’encouragement pour garder confiance, même lorsque les circonstances semblent contraires.",
  },
  {
    id: 2,
    slug: "la-puissance-de-la-priere",
    title: "La puissance de la prière dans la vie quotidienne",
    preacher: "Évangéliste Grâce Ilunga",
    category: "Prière",
    type: "Audio",
    duration: "28 min",
    date: "8 mai 2026",
    image:
      "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Une prédication sur la place de la prière dans les décisions, les combats et la croissance spirituelle.",
  },
  {
    id: 3,
    slug: "servir-avec-amour",
    title: "Servir avec amour et humilité",
    preacher: "Frère David Kayembe",
    category: "Service",
    type: "Vidéo",
    duration: "35 min",
    date: "4 mai 2026",
    image:
      "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un enseignement sur le service, l’humilité et l’engagement dans la communauté.",
  },
  {
    id: 4,
    slug: "une-famille-fondee-sur-dieu",
    title: "Une famille fondée sur Dieu",
    preacher: "Pasteur Jonathan Nsimba",
    category: "Famille",
    type: "Audio",
    duration: "31 min",
    date: "30 avril 2026",
    image:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un message pour fortifier les familles, les couples et la transmission des valeurs chrétiennes.",
  },
  {
    id: 5,
    slug: "rester-ferme-dans-lappel",
    title: "Rester ferme dans l’appel de Dieu",
    preacher: "Pasteur Junior Kasongo",
    category: "Foi",
    type: "Vidéo",
    duration: "39 min",
    date: "26 avril 2026",
    image:
      "https://images.pexels.com/photos/6994986/pexels-photo-6994986.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un message sur la persévérance, l’obéissance et la fidélité dans l’appel reçu de Dieu.",
  },
  {
    id: 6,
    slug: "la-priere-qui-transforme",
    title: "La prière qui transforme le cœur",
    preacher: "Maman Esther Lukusa",
    category: "Prière",
    type: "Audio",
    duration: "33 min",
    date: "20 avril 2026",
    image:
      "https://images.pexels.com/photos/8106776/pexels-photo-8106776.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un enseignement sur la prière intime, la transformation intérieure et la dépendance à Dieu.",
  },
  {
    id: 7,
    slug: "servir-sa-generation",
    title: "Servir sa génération avec excellence",
    preacher: "Frère Patrick Mavungu",
    category: "Service",
    type: "Vidéo",
    duration: "44 min",
    date: "15 avril 2026",
    image:
      "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un appel à servir avec discipline, amour, responsabilité et sens de la mission.",
  },
  {
    id: 8,
    slug: "batir-une-maison-de-paix",
    title: "Bâtir une maison de paix",
    preacher: "Pasteur Michel Kalala",
    category: "Famille",
    type: "Audio",
    duration: "29 min",
    date: "10 avril 2026",
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un message sur la paix dans la famille, le dialogue, le pardon et les valeurs spirituelles.",
  },
];