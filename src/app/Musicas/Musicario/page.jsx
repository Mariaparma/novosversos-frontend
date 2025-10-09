'use client';
import React from 'react';
import styles from './Musicario.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const album = {
  titulo: 'Ao Vivo no Rio (2010)',
  capa: 'https://upload.wikimedia.org/wikipedia/pt/e/ec/Luan_Santana_-_Ao_Vivo_no_Rio_de_Janeiro.jpg',
  descricao:
    'Segundo álbum ao vivo de Luan Santana, gravado no Rio de Janeiro, com sucessos que consolidaram sua carreira nacional.',
  musicas: [
    {
      id: 'adrenalina',
      nome: 'Adrenalina',
      trecho: 'Meu coração tá disparado. Meu corpo tá viciado. Nessa louca adrenalina que me faz arrepiar. Meu sangue ferve nas veias quando você me incendeia. Vem me amar',
    },
    {
      id: 'quimica-do-amor',
      nome: 'Química do Amor (feat. Ivete Sangalo)',
      trecho: 'É a química do amor, que faz o meu coração bater mais forte.',
    },
    {
      id: 'palácios-e-castelos ',
      nome: 'Palácios e Castelos ',
      trecho: 'Te pedi que me levasse a sério. Construí palácios e castelos. Esperei por muito tempo antes de te ver',
    },
    {
      id: 'um-beijo',
      nome: 'Um Beijo',
      trecho: 'Um beijo fala mais que mil palavras. Um toque é bem mais que poesia. No seu olhar enxergo a sua alma. Sua fala é uma linda melodia',
    },
    {
      id: 'as-lembranças-vao-na-mala',
      nome: 'As Lembranças Vão na Mala',
      trecho: 'Ninguém vai escrever no muro uma história de amor. Mas se mesmo assim, quiser me deixar. As lembranças vão na mala pra te atormentar',
    },
    {
      id: 'nao-era-pra-ser',
      nome: 'Não Era Pra Ser ',
      trecho: 'Não era pra ser, não, não, não. Não ia rolar. Já tivemos tantas chances. Mas ninguém quis se entregar.',
    },
    {
      id: 'a-bussola ',
      nome: 'A Bússola ',
      trecho: 'Só preciso da bússola que me tirou do escuro. A bússola que gira...gira...gira. E sempre aponta pro futuro. E se eu for pro sul mesmo que seja sem querer. Você me traz pro leste para ver o sol nascer.',
    },
    {
      id: 'feiticeiro',
      nome: 'Feiticeiro',
      trecho: 'O feitiço virou contra o feiticeiro. Dá pra ver na sua cara o desespero. Você fez de tudo pra me ver sofrer. E hoje quem sofre e chora é você.',
    },
    {
      id: 'meu-menino',
      nome: 'Meu Menino (Minha Menina)',
      trecho: 'De repente você me liga. Diz coisas lindas de amor. Eu confesso que adorei. E que foi a primeira vez. Que alguém me encantou!.',
    },
  ],
};

export default function Musicario() {
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