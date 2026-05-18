export type CommunityGroup = {
  id: number;
  name: string;
  description: string;
  members: string;
  image: string;
};

export const communityGroups: CommunityGroup[] = [
  {
    id: 1,
    name: "Jeunesse",
    description:
      "Un espace pour grandir dans la foi, le leadership, la discipline et la vision.",
    members: "80+ membres",
    image:
      "https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Chorale",
    description:
      "Servir Dieu par la louange, l’adoration, la musique et la créativité.",
    members: "35+ membres",
    image:
      "https://images.pexels.com/photos/7095712/pexels-photo-7095712.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Intercession",
    description:
      "Porter l’église, les familles, les projets et la communauté dans la prière.",
    members: "25+ membres",
    image:
      "https://images.pexels.com/photos/8106771/pexels-photo-8106771.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Fondation",
    description:
      "Participer aux actions sociales auprès des orphelins, veuves et familles vulnérables.",
    members: "40+ bénévoles",
    image:
      "https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    name: "Femmes",
    description:
      "Un cadre d’échange, d’accompagnement, de prière et d’édification.",
    members: "60+ membres",
    image:
      "https://images.pexels.com/photos/6647020/pexels-photo-6647020.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    name: "Hommes",
    description:
      "Un espace de responsabilité, de famille, de service et de croissance spirituelle.",
    members: "45+ membres",
    image:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];