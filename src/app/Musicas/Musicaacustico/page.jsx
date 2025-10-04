'use client';
import React from 'react';
import styles from './Musicaacustico.module.css';

const album = {
  titulo: 'Acústico (2015)',
  capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d6/Capa_Acustico_Luan_Santana.jpg/250px-Capa_Acustico_Luan_Santana.jpg',
  descricao: 'Versão acústica com arranjos intimistas e interpretações emocionantes dos maiores sucessos de Luan Santana.',
  musicas: [
    { id: 'escreve-ai', nome: 'Escreve Aí', trecho: 'Escreve aí, tudo o que você sente por mim. Escreve aí.' },
    { id: 'cantada', nome: 'Cantada', trecho: 'Essa cantada é pra você, que me faz perder o chão.' },
    { id: 'chuva-de-arroz', nome: 'Chuva de Arroz', trecho: 'Vai ter chuva de arroz quando a gente se casar.' },
    { id: 'te-vejo-linda', nome: 'Te Vejo Linda', trecho: 'Te vejo linda, te vejo nua. Te vejo minha em qualquer rua.' },
    { id: 'cabou-cabou', nome: 'Cabou Cabou', trecho: 'Cabou, cabou, não tem mais volta. O que era amor virou revolta.' },
    { id: 'tanto-faz', nome: 'Tanto Faz', trecho: 'Se você me ama ou não, tanto faz. Eu já cansei de correr atrás.' },
  ],
};

export default function MusicaAcustico() {
  return (
    <div className={styles.albumPage}>
      <div className={styles.albumLayout}>
        <div className={styles.albumLeft}>
          <img src={album.capa} alt={`Capa do álbum ${album.titulo}`} className={styles.albumCover} />
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
    </div>
  );
}