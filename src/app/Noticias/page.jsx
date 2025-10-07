import React from "react";
import styles from "./Noticia.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dados da Galeria
const galerias = [
  {
    data: "HÁ 2 ANOS",
    titulo: 'LUAN SANTANA EMPLACA NO TOP 50 DO SPOTIFY COM "AMBIENTE ERRADO"',
    imagem: "https://www.luandaily.com.br/wp-content/uploads/2025/08/img_6013-1067x1080.jpg",
    destaque: false,
  },
  {
    data: "HÁ UM MÊS",
    titulo: "LUAN SANTANA SURPREENDE FÃS EM PORTUGAL AO GRAVAR MÚSICA EM ESPANHOL COM PABLO ALBORAN NA MEO ARENA",
    imagem: "https://www.luandaily.com.br/wp-content/uploads/2025/08/img_6009-3.jpg",
    destaque: true,
  },
  {
    data: "HÁ 2 MESES",
    titulo: "LUAN SANTANA EMPLACA SEIS MÚSICAS SIMULTANEAMENTE EM PORTUGAL ",
    imagem: "https://istoe.com.br/wp-content/uploads/2023/08/previas-luan-city-20-0117-1200x630.jpg",
    destaque: false,
  },
  {
    data: "HÁ 2 MESES",
    titulo: "UNIÃO DE FENÔMENOS: LUAN SANTANA E CRISTIANO RONALDO DEIXAM FÃS...",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh0lckv_LgFdo2SyNNQoC4VNhLjbQE_I06w&s",
    destaque: false,
  },
  {
    data: "HÁ 2 MESES",
    titulo: "TOUR AO VIVO NA LUA: LUAN SANTANA ESTREIA NOS PALCOS DA FRANÇA EM OUTUBRO,...",
    imagem: "https://www.luandaily.com.br/wp-content/uploads/2025/07/luansantana-24-2-1600x1080.jpg",
    destaque: false,
  },
];

// Dados do NewsPage
const newsData = [
  {
    categoria: "Agenda",
    tempo: "Há 2 anos",
    titulo: 'Luan Santana emplaca no top 50 do Spotify com "Ambiente Errado"',
    autor: "Maria Eduarda Parma",
    imagem: "https://www.luandaily.com.br/wp-content/uploads/2025/08/img_6013-1067x1080.jpg",
  },
  {
    categoria: "Portugal",
    tempo: "Há um mês",
    titulo: "Luan Santana emplaca seis músicas simultaneamente em Portugal e entra para o top 3 dos artistas mais ouvidos do país e segue em turnê pela Europa",
    autor: "Maria Eduarda Parma",
    imagem: "https://istoe.com.br/wp-content/uploads/2023/08/previas-luan-city-20-0117-1200x630.jpg",
  },
  {
    categoria: "Portugal",
    tempo: "Há um mês",
    titulo: "Luan Santana surpreende fãs em Portugal ao gravar música em espanhol com Pablo Alboran na MEO Arena",
    autor: "Maria Eduarda Parma",
    imagem: "https://www.luandaily.com.br/wp-content/uploads/2025/08/img_6009-3.jpg",
  },
  {
    categoria: "Portugal",
    tempo: "Há um mês",
    titulo: "União de fenomenos Luan Santana e Cristiano Ronaldo deixam fãs intrigados com vídeo misterioso",
    autor: "Maria Eduarda Parma",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqh0lckv_LgFdo2SyNNQoC4VNhLjbQE_I06w&s",
  },
];

export default function CombinedNewsPage() {
  return (
    <div className={styles.container}>
      <Header />
      {/* Galeria */}
      <h1>Galeria de Notícias</h1>
      <div className={styles.galeriaGrid}>
        {galerias.map((item, index) => (
          <div
            key={index}
            className={`${styles.galeriaCard} ${item.destaque ? styles.destaque : ""}`}
            style={{ backgroundImage: `url(${item.imagem})` }}
          >
            <div className={styles.overlay}>
              <span className={styles.data}>{item.data}</span>
              <h2 className={styles.titulo}>{item.titulo}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* NewsPage */}
      <h1>Últimas Notícias</h1>
      <div className={styles.newsGrid}>
        {newsData.map((news, index) => (
          <div key={index} className={styles.newsCard}>
            <img src={news.imagem} alt={news.titulo} className={styles.newsImage} />
            <div className={styles.info}>
              <span className={styles.categoria}>{news.categoria}</span>
              <span className={styles.tempo}>{news.tempo}</span>
              <h2 className={styles.titulo}>{news.titulo}</h2>
              <p className={styles.autor}>Postado por: {news.autor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão para todas as notícias */}
      <div className={styles.botaoContainer}>
        <a href="/Detalhesnoticias" className={styles.botaoNoticias}>
          Ver Mais Notícias
        </a>
      </div>
      <Footer />
    </div>
  );
}
