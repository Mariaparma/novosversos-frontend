'use client';
import React from 'react';
import styles from './Musicacg.module.css';

const album = {
  titulo: 'Ao Vivo em Campo Grande (2009)',
  capa: 'https://upload.wikimedia.org/wikipedia/pt/e/e5/Luan-Santana-Ao-Vivo-2009.jpg',
  descricao:
    'Primeiro álbum ao vivo de Luan Santana, gravado em Campo Grande com sucessos que marcaram o início da carreira.',
  musicas: [
    {
      id: 'meteoro',
      nome: 'Meteoro',
      trecho: 'Você é raio de saudade, meteoro da paixão. Explosão de sentimentos que eu não pude acreditar.',
    },
    {
      id: 'voce-nao-sabe-o-que-e-amor',
      nome: 'Você Não Sabe o Que é Amor',
      trecho: 'E o que eu sofri espero que não sofra igual. Fiquei mal, mas passou. Você não sabe o que é amor.',
    },
    {
      id: 'sinais',
      nome: 'Sinais',
      trecho: 'Sinais vindos de um lugar tão longe. Às vezes se escondem. No farol em uma ilha, numa noite tão vazia. Eu beijei você até o amanhecer.',
    },
    {
      id: 'to-de-cara',
      nome: 'Tô de Cara',
      trecho: 'Tô de cara com você. Eu tô de cara com você. Me apaixonei e você não quer mais me ver.',
    },
    {
      id: 'aqui-e-seu-lugar',
      nome: 'Aqui é Seu Lugar - Digitais',
      trecho: 'Deixou digitais em mim. Agora vem pedindo que esqueça. Deixou digitais em mim. Procure alguém melhor que mereça.',
    },
    {
      id: 'minha-boca',
      nome: 'Minha Boca Você Não Beija Mais',
      trecho: 'Minha boca você não beija mais, Nunca mais. Oh não, nunca mais.',
    },
    {
      id: 'jogo-do-amor',
      nome: 'Jogo do Amor',
      trecho: 'Mas o jogo do amor . É mais dificil que pensei. Você é tudo o que eu sempre sonhei.',
    },
    {
      id: 'vou-voar',
      nome: 'Vou Voar',
      trecho: 'Vou voar. Quem quer amar ?. Sonhar alto, voar sem parar.',
    },
    {
      id: 'sempre-com-voce',
      nome: 'Sempre Com Você',
      trecho: 'Eu não resisti a tanto amor. O meu coração se entregou. E venha o que vier. Eu vou estar pra sempre com você',
    },
  ],
};

export default function Musicacg() {
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