export type Integrante = {
  id: number;
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
};

export const integrantes: Integrante[] = [
  {
    id: 1,
    nome: "Murilo Marques",
    rm: "568224",
    turma: "1TDSPB",
    github: "https://github.com/Mumarkzx",
    linkedin: "https://www.linkedin.com/in/murilo-marques-64603a1b9/",
    foto: "/img/foto_murilo.jpeg",
  },
  {
    id: 2,
    nome: "Kenji Fernandes",
    rm: "568156",
    turma: "1TDSPB",
    github: "https://github.com/KenjiFW13",
    linkedin: "https://www.linkedin.com/in/kenji-fernandes-wakabayashi/",
    foto: "/img/foto_kenjii.jpeg",
  },
  {
    id: 3,
    nome: "Paulo Henrique Kian",
    rm: "563343",
    turma: "1TDSPB",
    github: "https://github.com/PhKian",
    linkedin: "https://www.linkedin.com/in/paulo-henrique-oliveira-3b4b621b2/",
    foto: "/img/foto_ph.jpeg",
  },
];
