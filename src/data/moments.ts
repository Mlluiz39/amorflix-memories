import Bistro56 from '../assets/images/bistro.jpg';
import MauaPlaza from '../assets/images/maua-plaza.jpg';
import NoiteEstrelas from '../assets/images/noite-estrelas.jpg';
import MaisUmMes from '../assets/images/mais-um-mes.jpg';
import Natal from '../assets/images/natal.jpg';
import Reveillon from '../assets/images/reveillon.jpg';
import Aliancas from '../assets/images/aliancas.jpg';
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
    image: Bistro56,
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
    image: MauaPlaza,
    video: "/segundo.mp4",
    description: "Uma tarde divertida explorando lojas e experimentando roupas.",
    category: "passeio",
    romanticComment: "Cada risada sua é uma lembrança que guardo com carinho 💖",
    details: "Nosso primeiro passeio ao shopping foi uma explosão de diversão e inspiração. Exploramos diversas lojas, experimentemos roupas únicas e nos divertimos juntos. Foi uma jornada inesquecível."
  },
  {
    id: 3,
    title: "Noite das Estrelas",
    date: "26 de outubro, 2024",
    image: NoiteEstrelas,
    video: "/noite-estrelas.mp4",
    description: "Jantar romântico em nosso canto preferido, com direito a música suave e vinho.",
    category: "Romântico",
    romanticComment: "Preparei sua comida favorita e transformei nossa sala em um restaurante.",
    details: "Foi uma noite perfeita. A luz suave das velas, o cheiro do seu prato favorito e a música que escolhi especialmente para você. Sentamos juntos, brindamos ao nosso amor e conversamos sobre nossos sonhos. Foi uma noite mágica que nunca vou esquecer."
  },
  {
    id: 4,
    title: "Mais um mês de amor",
    date: "26 de Novembro, 2024",
    image: MaisUmMes,
    video: "/mais-um-mes.mp4",
    description: "",
    category: "Surpresa",
    romanticComment: "Saimos para jantar, para comemorar mais um mês juntos.",
    details: "Hoje celebramos mais um mês de amor. Preparei uma surpresa especial para você: um jantar romântico no nosso restaurante favorito. Foi uma noite cheia de risadas, lembranças e promessas de um futuro juntos. Cada mês é uma nova página na nossa história, e mal posso esperar para escrever os próximos capítulos ao seu lado."
  },
  {
    id: 5,
    title: "Nosso 1º Natal Juntos",
    date: "25 de dezembro, 2024",
    image: Natal,
    video: "/natal.mp4",
    description: "Nosso primeiro Natal juntos, cheio de amor e alegria.",
    category: "Romântico",
    romanticComment: "A magia do Natal se torna ainda mais especial ao seu lado 🎄",
    details: "Neste Natal, tudo foi mágico. A decoração estava linda, a comida deliciosa e o clima de amor no ar era palpável. Trocar presentes foi emocionante, mas o melhor presente foi estar ao seu lado, compartilhando risadas e criando memórias que guardaremos para sempre. Você é o meu maior presente."
  },
  {
    id: 6,
    title: "Réveillon Inesquecível na praia",
    date: "31 de dezembro, 2024",
    image: Reveillon,
    video: "/reveillon.mp4",
    description: "Uma noite mágica na praia, celebrando o novo ano juntos.",
    category: "Romântico",
    romanticComment: "A contagem regressiva para o novo ano foi ainda mais especial com você ao meu lado 🎆",
    details: "Uma noite inesquecível na praia, rodeados por amigos e familiares. A contagem regressiva para o novo ano foi emocionante, e quando os fogos de artifício iluminaram o céu, senti que tudo era possível ao seu lado. Brindamos ao amor, à amizade e a todas as aventuras que ainda estão por vir. Você é a minha melhor companhia para todos os momentos."
  },
  {
    id: 7,
    title: "Nossas aliaças de amor",
    date: "26 de maio, 2025",
    image: Aliancas,
    video: "/aliancas.mp4",
    description: "Comemorando nosso amor com alianças que simbolizam nossa união.",
    category: "Romântico",
    romanticComment: "Cada aliança é um símbolo do nosso amor eterno 💍",
    details: "Hoje celebramos um marco importante na nossa história: a troca de alianças. Cada uma delas representa o nosso compromisso, amor e a promessa de estarmos juntos para sempre. Foi um momento emocionante, cercado por amigos e familiares que testemunharam nossa união. A partir de hoje, nossas mãos estarão sempre entrelaçadas, simbolizando o amor que nos une."
  }
];
