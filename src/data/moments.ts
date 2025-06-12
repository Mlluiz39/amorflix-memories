
export interface Moment {
  id: number;
  title: string;
  date: string;
  image: string;
  video?: string;
  audio?: string;
  description: string;
  category: string;
  romanticComment: string;
  details: string;
}

export const moments: Moment[] = [
  {
    id: 1,
    title: "Nosso Primeiro Encontro",
    date: "26 de Agosto, 2024",
    image: "/src/assets/images/bistro-56.jpg",
    video: "/bistro.mp4",
    description: "O dia em que tudo começou. Nossos olhares se cruzaram e o mundo parou.",
    category: "Primeiro",
    romanticComment: "Desde aquele momento, soube que você era especial ❤️",
    details: "Foi em uma cafeteria aconchegante. Você estava lendo um livro e quando nossos olhos se encontraram, senti que minha vida havia mudado para sempre. A conversa fluiu naturalmente e ficamos lá por horas, perdidos um no outro."
  },
  {
    id: 2,
    title: "Nosso primeiro passeio ao shopping",
    date: "04 de setembro, 2024",
    image: "/src/assets/images/maua-plaza.jpg",
    video: "/segundo.mp4",
    description: "Uma tarde divertida explorando lojas e experimentando roupas.",
    category: "passeio",
    romanticComment: "Cada risada sua é uma lembrança que guardo com carinho 💖",
    details: "Nosso primeiro passeio ao shopping foi uma explosão de diversão e inspiração. Explorei diversas lojas, experimentei roupas únicas e nos divertimos juntos. Foi uma jornada inesquecível."
  },
  {
    id: 3,
    title: "Noite das Estrelas",
    date: "22 de setembro, 2024",
    image: "/src/assets/images/noite-estrelas.jpg",
    video: "/src/videos/video-especial.mp4",
    description: "Jantar romântico em nosso canto preferido, com direito a música suave e vinho.",
    category: "Romântico",
    romanticComment: "A noite mais linda sob o céu estrelado 🌌",
    details: "Foi uma noite perfeita. aproveitamos cada momento juntos. O jantar foi preparado com todo carinho, e a música suave nos envolveu em uma atmosfera mágica. Conversamos sobre nossos sonhos e planos, e cada palavra parecia mais doce que a anterior."
  },
  {
    id: 4,
    title: "Jantar Surpresa",
    date: "18 de Maio, 2023",
    image: "/src/assets/images/jantar-surpresa.jpg",
    video: "/src/videos/video-especial.mp4",
    description: "Preparei sua comida favorita e transformei nossa sala em um restaurante.",
    category: "Surpresa",
    romanticComment: "Seus sorrisos são meus pratos favoritos 💕",
    details: "Passei o dia todo preparando tudo nos mínimos detalhes: velas, flores, sua música favorita e o prato que você mais ama. Ver sua cara de surpresa valeu cada segundo de preparo."
  },
  {
    id: 5,
    title: "Caminhada na Floresta",
    date: "10 de Junho, 2023",
    image: "/src/assets/images/caminhada-floresta.jpg",
    video: "/src/videos/video-especial.mp4",
    description: "Explorando trilhas secretas e descobrindo cachoeiras escondidas.",
    category: "Aventura",
    romanticComment: "Com você, até as trilhas mais difíceis se tornam fáceis 🌲",
    details: "Uma aventura na natureza que nos conectou ainda mais. Entre as árvores centenárias e o som dos pássaros, encontramos uma cachoeira linda onde fizemos promessas de amor eterno."
  },
  {
    id: 6,
    title: "Noite de Cinema em Casa",
    date: "25 de Julho, 2023",
    image: "/src/assets/images/cinema-casa.jpg",
    video: "/src/videos/video-especial.mp4",
    description: "Maratona de filmes românticos com pipoca e muito amor.",
    category: "Casa",
    romanticComment: "Qualquer filme fica melhor nos seus braços 🎬",
    details: "Uma noite aconchegante no sofá, assistindo nossos filmes favoritos. Entre risos, lágrimas e beijos, percebemos que os melhores momentos são os mais simples, quando estamos juntos."
  }
];
