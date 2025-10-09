'use client';
import React from 'react';
import styles from './Musicaluan.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const album = {
  titulo: '1977 (2016)',
  capa: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Luan_Santana_1977_album_cover.jpg',
  descricao:
    'Álbum especial de Luan Santana, com participações de grandes artistas e hits românticos que marcaram 2016.',
  musicas: [
    {
      id: 'dia-lugar-hora',
      nome: 'Dia, Lugar e Hora',
      trecho:
        ' Quer que eu faça um café ou faça a minha vida. Sem encaixar na sua, aqui na rua. Era pra ser agora, quando é pra acontecer. Entendi o lugar e tem hora.',
    },
    {
      id: 'primeira-semana',
      nome: 'Primeira Semana',
      trecho:
        'Eu tô com saudade do nosso beijo gostoso. Eu tô com saudade da primeira semana que a gente ficou. Eu tô com saudade do nosso beijo gostoso. Eu tô com saudade da gente fazendo amor.',
    },
    {
      id: 'eu-voce-o-mar-e-ela',
      nome: 'Eu, Você, O Mar e Ela',
      trecho:
        'Mas só foi a porta fechar pra mudar a minha cabeça. A sua boca vale o preço pra ter o sossego que eu tinha. A tua gorrante ou o mar pra não mudar de tela. Os quatro pedidos de amor, eu e você, o Mariela.',
    },
    {
      id: 'estaca-zero',
      nome: 'Estaca Zero',
      trecho:
        'Enquanto eu chamava de amor. Respeitei a sua decisão. Quando a gente terminou, meu coração não aguentou, juro. Mas foi só te ver. Caiu a ficha do quanto eu te quero. Que recaindo eu tô falando, sério. Perei, pensei, não me segurei. Olha eu de novo na estaca zero. Caiu a ficha do quanto eu te quero.',
    },
    {
      id: 'mesmo-sem-estar',
      nome: 'Mesmo Sem Estar',
      trecho:
        'Não se fala mais por um mês. Você vai ver que o tempo não muda nada. Nada. Eu tô aí mesmo sem estar.',
    },
    {
      id: 'fantasma',
      nome: 'Fantasma',
      trecho:
        'Não há razões para não ser feliz. Mas pra ser feliz preciso de uma razão. Que o motivo é você. Sempre foi você. Fantasma do meu coração.',
    },
    {
      id: 'acordando-o-predio',
      nome: 'Acordando o Prédio',
      trecho:
        'Vamos acordar esse prédio. Fazer invejar pro povo. Enquanto eles tão indo trabalhar. A gente faz amor com os todos de novo, de novo, de novo.',
    },
    {
      id: 'rg',
      nome: 'RG',
      trecho:
        'E ainda se achar que não sei muito de você. Eu posso até falar seu RG. Com quantos elogios vai ficar vermelha. E ainda que você duvide do amor. E olha na janela quem chegou. Na forma o presente preparada. Pra você lhe exemplular. Agora RG, quilômetro sete zero. Quilômetro sete zero.',
    },
    {
      id: 'butterfly',
      nome: 'Butterfly',
      trecho:
        'Venha com o arco-iris. Me cobrir depois da tempestade. Vou girar de um carrocê. Num parque. Na metade. Na garupa de qualquer saudade.',
    },
  ],
};

export default function Musica1977() {
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
