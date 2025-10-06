import React from "react";
import styles from "./Detalhesnoticias.module.css";

const noticias = [
  {
    id: 1,
    imagem:
      "https://i0.wp.com/portallineup.com.br/wp-content/uploads/2025/08/Modelo-de-foto-horizontal-2025-08-24T024558.487-scaled.jpg?resize=1200%2C675&ssl=1",
    categoria: "Portugal",
    data: "HÁ 2 SEMANAS",
    titulo: "Luan Santana brilha em show esgotado em Lisboa e emociona fãs portugueses",
    autor: "Maria Eduarda Parma",
    texto: [
      "O cantor Luan Santana encantou o público português com uma apresentação inesquecível em Lisboa, no último sábado. Com ingressos esgotados, o artista levou a turnê 'Luan City 2.0' à Europa e emocionou os fãs com um repertório repleto de sucessos.",
      "Durante o show, Luan interpretou clássicos como 'Te Esperando', 'Meteoro' e o novo single 'Olho Marrom'. A apresentação reforçou o sucesso internacional do cantor, que promete novas datas fora do Brasil ainda este ano.",
    ],
    tags: ["Luan Santana", "Lisboa", "Show", "Turnê"],
  },
  {
    id: 2,
    imagem:
      "https://uploads.metroimg.com/wp-content/uploads/2025/08/24163916/show-de-luan-santana-em-lisboa-reune-mais-de-20-mil-pessoas.jpg",
    categoria: "Agenda",
    data: "HÁ 1 MÊS",
    titulo: "Luan Santana é atração confirmada no Votu International Rodeo 2026",
    autor: "Maria Eduarda Parma",
    texto: [
      "Luan Santana está confirmado como uma das principais atrações do Votu International Rodeo 2026, em Votuporanga (SP). O evento, que reúne grandes nomes da música sertaneja, terá Luan abrindo a programação principal.",
      "O cantor promete um show repleto de energia e novidades, incluindo faixas do projeto 'Luan City 2.0'. O rodeio será realizado entre os dias 4 e 8 de fevereiro de 2026.",
    ],
    tags: ["Luan Santana", "Agenda", "Rodeio", "Shows 2026"],
  },
  {
    id: 3,
    imagem:
      "https://i0.wp.com/portallineup.com.br/wp-content/uploads/2025/08/Modelo-de-foto-horizontal-2025-08-18T140540.815.jpg?resize=1200%2C675&ssl=1",
    categoria: "Destaques",
    data: "HÁ 2 MESES",
    titulo: "Luan Santana leva a turnê 'Luan Ao Vivo Na Lua' ao Farraial 2025 em São Paulo",
    autor: "Maria Eduarda Parma",
    texto: [
      "O cantor foi uma das atrações mais aguardadas do Farraial 2025, em São Paulo, com sua nova turnê 'Luan Ao Vivo Na Lua'. O público vibrou com o repertório que mescla grandes sucessos e novas faixas que estão dominando o streaming.",
      "O evento contou com uma estrutura grandiosa e reuniu mais de 50 mil pessoas, consolidando Luan como um dos maiores artistas do Brasil.",
    ],
    tags: ["Luan Santana", "Farraial", "Turnê", "Show"],
  },
  {
    id: 4,
    imagem:
      "https://i0.wp.com/portallineup.com.br/wp-content/uploads/2025/08/Modelo-de-foto-horizontal-2025-08-04T145434.152-scaled.jpg?resize=880%2C500&ssl=1",
    categoria: "Notícia",
    data: "HÁ 3 MESES",
    titulo: "Luan Santana é destaque como fenômeno da música brasileira",
    autor: "Maria Eduarda Parma",
    texto: [
      "Com mais de 15 anos de carreira, Luan Santana continua sendo uma das maiores vozes da música brasileira. Reconhecido por sua versatilidade e carisma, o cantor acumula sucessos e recordes em plataformas digitais.",
      "Luan é constantemente lembrado como um dos artistas que mais contribuíram para a popularização do sertanejo moderno, conquistando fãs de todas as idades.",
    ],
    tags: ["Luan Santana", "Carreira", "Sucesso", "Música Brasileira"],
  },
];

const NoticiasDetalhes = () => {
  return (
    <div className={styles.container}>
      {noticias.map((noticia) => (
        <div key={noticia.id} className={styles.card}>
          <div className={styles.banner}>
            <img src={noticia.imagem} alt={noticia.titulo} />
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.tag}>{noticia.categoria}</span>
              <span className={styles.date}>{noticia.data}</span>
              <span className={styles.author}>Por {noticia.autor}</span>
            </div>
            <h2 className={styles.title}>{noticia.titulo}</h2>
            <div className={styles.text}>
              {noticia.texto.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}
            </div>
            <div className={styles.tags}>
              {noticia.tags.map((tag, index) => (
                <span key={index} className={styles.tagSmall}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticiasDetalhes;
