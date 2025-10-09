'use client';
import React from 'react';
import styles from './Musicaqcn.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const album = {
  titulo: 'Quando Chega a Noite (2012)',
  capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx6pCPIQMyVc44I_gq2AQHrT8-TL4HLs67w&s',
  descricao:
    'Álbum de estúdio que consolidou Luan Santana como um dos maiores nomes da música sertaneja, com letras românticas e arranjos modernos.',
  musicas: [
    {
      id: 'quando-chega-a-noite',
      nome: 'Quando Chega a Noite',
      trecho: 'Quando chega a noite, eu fico só pensando em você. O silêncio grita o seu nome.',
    },
    {
      id: 'incondicional',
      nome: 'Incondicional',
      trecho: 'Te amo de forma incondicional. Te amo sem querer saber o porquê.',
    },
    {
      id: 'te-esperando',
      nome: 'Te Esperando',
      trecho: 'E mesmo que o tempo passe, eu vou estar te esperando.',
    },
    {
      id: 'coladinho',
      nome: 'Coladinho',
      trecho: 'Coladinho, sentindo o seu calor. É assim que eu quero viver.',
    },
    {
      id: 'o-resto-e-nosso',
      nome: 'O Resto é Nosso',
      trecho: 'O mundo é seu, o resto é nosso. Só depende de você querer.',
    },
    {
      id: 'sem-voce-nao-da',
      nome: 'Sem Você Não Dá',
      trecho: 'Sem você não dá, não tem graça, não tem cor. É tudo sem sentido.',
    },
    {
      id: 'voce-de-mim-nao-sai',
      nome: 'Você de Mim Não Sai',
      trecho: 'Você de mim não sai, tá grudada no meu coração.',
    },
    {
      id: 'chuva-de-arroz',
      nome: 'Chuva de Arroz',
      trecho: 'Vai ter chuva de arroz quando a gente se casar.',
    },
    {
      id: 'tantas-palavras',
      nome: 'Tantas Palavras',
      trecho: 'Tantas palavras pra dizer, mas nenhuma explica o que eu sinto.',
    },
  ],
};

export default function MusicaNoite() {
  return (
    <div className={styles.albumPage}>
      <Header />
      <div className={styles.albumLayout}>
        <div className={styles.albumLeft}>
          <img
            src={album.capa}
            alt={`Capa do álbum ${album.titulo}`}
            className={styles.albumCover}
          />
          <h1 className={styles.albumTitle}>{album.titulo}</h1>
          <p className={styles.albumDescription}>{album.descricao}</p>
        </div>

        <div className={styles.albumRight}>
          <div className={styles.songGrid}>
            {album.musicas.map((musica) => (
              <div key={musica.id} className={styles.songCard}>
                <h3 className={styles.songName}>{musica.nome}</h3>
                <p className={styles.songTrecho}>{musica.trecho}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}