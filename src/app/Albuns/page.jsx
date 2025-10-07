'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Albuns.module.css';

const albums = [
  {
    id: 'Musicacg',
    title: 'Ao Vivo em Campo Grande (2009)',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/e/e5/Luan-Santana-Ao-Vivo-2009.jpg',
    link: '/Musicas/Musicacg',
  },
  {
    id: 'ao-vivo-rio',
    title: 'Ao Vivo no Rio (2010)',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/e/ec/Luan_Santana_-_Ao_Vivo_no_Rio_de_Janeiro.jpg',
    link: '/Musicas/Musicario',
  },
  {
    id: 'quando-chega-a-noite',
    title: 'Quando Chega a Noite (2011)',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx6pCPIQMyVc44I_gq2AQHrT8-TL4HLs67w&s',
    link: '/Musicas/Musicaqcn',
  },
  {
    id: 'nosso-tempo',
    title: 'O Nosso Tempo é Hoje (2013)',
    cover: 'https://static.qobuz.com/images/covers/26/22/7891430282226_600.jpg',
    link: '/Musicas/Musicant',
  },
  {
    id: 'acustico',
    title: 'Acústico (2015)',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d6/Capa_Acustico_Luan_Santana.jpg/250px-Capa_Acustico_Luan_Santana.jpg',
    link: '/Musicas/Musicaacustico',
  },
  {
    id: '1977',
    title: '1977 (2016)',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/4/46/Capa_de_1977.jpg',
  },
  {
    id: 'viva-salvador',
    title: 'Viva (2019)',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/a/a4/Luan_Santana_-_Viva.png',
  },
  {
    id: 'luan-city',
    title: 'Luan City (2022)',
    cover: 'https://i.scdn.co/image/ab67616d0000b2735e804b9556311abf0567d269',
  },
  {
    id: 'luan-city-2',
    title: 'Luan City 2.0 (2023)',
    cover: 'https://i.scdn.co/image/ab67616d0000b273845b7e5dfb634d609b154e7a',
  },
  {
    id: 'ao-vivo-na-lua',
    title: 'Ao Vivo na Lua (2024)',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e7071d4b0d4ee1b625fb76cf',
  },
    {
    id: 'registro-historico',
    title: 'Registro Histórico (2025)',
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05pbt5ZOP4B6mR_SHiYq0O0rvXxtju_XZ4g&s',
  },
];

const Albuns = () => {

  const router = useRouter();

  const handleViewSongs = (album) => {
    const path = album.link || `/musicas/${album.id}`;
    router.push(path);
  };

  return (
    <div className={styles['album-page']}>
      <h1 className={styles['album-title']}>Álbuns de Luan Santana</h1>
      <div className={styles['album-grid']}>
        {albums.map((album) => (
          <div className={styles['album-card']} key={album.id}>
            <img src={album.cover} alt={album.title} className={styles['album-cover']} />
            <div className={styles['card-content']}>
              <h2 className={styles['card-title']}>{album.title}</h2>
              <button
                className={styles['view-button']}
                onClick={() => handleViewSongs(album)}
              >
                Ver músicas
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albuns;