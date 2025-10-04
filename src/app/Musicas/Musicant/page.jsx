'use client';
import React from 'react';
import styles from './Musicant.module.css';

const album = {
  titulo: 'O Nosso Tempo é Hoje (2013)',
  capa: 'https://static.qobuz.com/images/covers/26/22/7891430282226_600.jpg',
  descricao:
    'Álbum que marcou uma nova fase na carreira de Luan Santana, com sonoridade mais madura e letras intensas sobre amor e superação.',
  musicas: [
    {
      id: 'te-vejo-linda',
      nome: 'Te Vejo Linda',
      trecho: 'Te vejo linda, te vejo nua. Te vejo minha em qualquer rua.',
    },
    {
      id: 'cabou-cabou',
      nome: 'Cabou Cabou',
      trecho: 'Cabou, cabou, não tem mais volta. O que era amor virou revolta.',
    },
    {
      id: 'tanto-faz',
      nome: 'Tanto Faz',
      trecho: 'Se você me ama ou não, tanto faz. Eu já cansei de correr atrás.',
    },
    {
      id: 'o-nosso-tempo-e-hoje',
      nome: 'O Nosso Tempo é Hoje',
      trecho: 'O nosso tempo é hoje, não dá pra esperar. O amor não tem hora pra chegar.',
    },
    {
      id: 'cê-topa',
      nome: 'Cê Topa',
      trecho: 'Cê topa ser minha namorada? Cê topa viver pra sempre comigo?',
    },
    {
      id: 'nêga',
      nome: 'Nêga',
      trecho: 'Nêga, me abraça e não me deixa mais. O mundo lá fora não me satisfaz.',
    },
    {
      id: 'tanto-faz-acustico',
      nome: 'Tanto Faz (Acústico)',
      trecho: 'Se você me ama ou não, tanto faz. Eu já cansei de correr atrás.',
    },
    {
      id: 'cê-topa-acustico',
      nome: 'Cê Topa (Acústico)',
      trecho: 'Cê topa ser minha namorada? Cê topa viver pra sempre comigo?',
    },
    {
      id: 'o-nosso-tempo-e-hoje-acustico',
      nome: 'O Nosso Tempo é Hoje (Acústico)',
      trecho: 'O nosso tempo é hoje, não dá pra esperar. O amor não tem hora pra chegar.',
    },
  ],
};

export default function MusicaTempo() {
  return (
    <div className={styles.albumPage}>
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
    </div>
  );
}