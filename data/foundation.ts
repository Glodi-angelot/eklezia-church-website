export type FoundationAction = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const foundationActions: FoundationAction[] = [
  {
    id: 1,
    title: "Soutien aux orphelins",
    description:
      "Accompagner les enfants vulnérables avec une aide scolaire, alimentaire et communautaire.",
    image:
      "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Accompagnement des veuves",
    description:
      "Offrir écoute, assistance et soutien aux femmes traversant des périodes difficiles.",
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Aide aux familles vulnérables",
    description:
      "Soutenir les familles en difficulté à travers des actions sociales concrètes.",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Actions éducatives",
    description:
      "Encourager la scolarisation, l’encadrement et l’accompagnement des enfants.",
    image:
      "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];