export type Announcement = {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  excerpt: string;
  content: string;
};

export const announcements: Announcement[] = [
  {
    id: 1,
    slug: "culte-special-louange",
    title: "Culte spécial de louange et d’adoration",
    category: "Culte",
    date: "Dimanche 24 mai 2026",
    location: "Temple Eklezia, Kinshasa",
    image:
      "https://images.pexels.com/photos/8468471/pexels-photo-8468471.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Un moment fort de louange, de prière et d’adoration pour toute la communauté.",
    content:
      "Eklezia organise un culte spécial de louange et d’adoration pour rassembler les fidèles dans un temps de prière, de célébration et de reconnaissance. Ce programme est ouvert à toute la communauté.",
  },
  {
    id: 2,
    slug: "conference-jeunesse",
    title: "Conférence spéciale pour la jeunesse",
    category: "Jeunesse",
    date: "Samedi 30 mai 2026",
    location: "Salle polyvalente Eklezia",
    image:
      "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Une rencontre dédiée aux jeunes autour de la foi, du leadership et de la vision.",
    content:
      "Cette conférence est destinée aux jeunes de la communauté. Elle abordera la foi, la discipline personnelle, le leadership, la responsabilité et l’engagement dans la société.",
  },
  {
    id: 3,
    slug: "journee-fondation",
    title: "Journée de soutien aux orphelins",
    category: "Fondation",
    date: "Vendredi 5 juin 2026",
    location: "Centre social Eklezia",
    image:
      "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Une journée de solidarité pour soutenir les enfants vulnérables et leurs familles.",
    content:
      "La Fondation Eklezia organise une journée de soutien aux orphelins afin de collecter des dons, offrir une assistance et sensibiliser la communauté à l’accompagnement des enfants vulnérables.",
  },
  {
    id: 4,
    slug: "semaine-de-priere",
    title: "Semaine de prière et d’intercession",
    category: "Prière",
    date: "Du 8 au 14 juin 2026",
    location: "Temple Eklezia",
    image:
      "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Sept jours de prière, d’intercession et de méditation autour de la communauté.",
    content:
      "Pendant une semaine, la communauté Eklezia se réunira chaque soir pour prier, intercéder, méditer et confier les familles, les projets et les besoins de l’église à Dieu.",
  },
  {
    id: 5,
    slug: "seminaire-famille",
    title: "Séminaire sur la famille chrétienne",
    category: "Famille",
    date: "Samedi 13 juin 2026",
    location: "Grande salle Eklezia",
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Un séminaire pour encourager les couples, les parents et les familles.",
    content:
      "Ce séminaire vise à fortifier les familles à travers des enseignements sur le dialogue, la responsabilité, le pardon, l’éducation et les valeurs chrétiennes dans le foyer.",
  },
  {
    id: 6,
    slug: "repetition-chorale",
    title: "Reprise des répétitions de la chorale",
    category: "Chorale",
    date: "Tous les jeudis à 17h00",
    location: "Salle de musique Eklezia",
    image:
      "https://images.pexels.com/photos/7095712/pexels-photo-7095712.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "La chorale reprend ses répétitions pour préparer les prochains cultes.",
    content:
      "La chorale Eklezia invite tous les membres engagés dans la louange à participer aux répétitions hebdomadaires pour préparer les prochains moments d’adoration.",
  },
  {
    id: 7,
    slug: "formation-serviteurs",
    title: "Formation des serviteurs et responsables",
    category: "Formation",
    date: "Samedi 20 juin 2026",
    location: "Salle de formation Eklezia",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Une formation pour mieux servir avec excellence, humilité et responsabilité.",
    content:
      "Cette formation est destinée aux responsables, bénévoles et serviteurs de l’église. Elle mettra l’accent sur le service, la discipline, la communication et l’esprit d’équipe.",
  },
  {
    id: 8,
    slug: "collecte-solidarite",
    title: "Collecte spéciale pour les familles vulnérables",
    category: "Fondation",
    date: "Dimanche 28 juin 2026",
    location: "Temple Eklezia",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt:
      "Une collecte spéciale pour soutenir les familles en difficulté.",
    content:
      "Eklezia organise une collecte spéciale destinée aux familles vulnérables. Les dons collectés permettront de soutenir des besoins alimentaires, scolaires et sociaux.",
  },
];