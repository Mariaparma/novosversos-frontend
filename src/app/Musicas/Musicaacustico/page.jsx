'use client';
import React from 'react';
import styles from './MusicaAcustico.module.css';

const album = {
  titulo: 'Acústico (2015)',
  capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx6pCPIQMyVc44I_gq2AQHrT8-TL4HLs67w&s',
  descricao:
    'Álbum ao vivo que apresenta Luan Santana em uma performance intimista e acústica, destacando sua voz e talento musical.',
  musicas: [
    {
      id: 'escreve-ai',
      nome: 'Escreve Aí',
      trecho: 'Escreve aí, chego em casa e dou de cara com sua foto, uma ducha e um vinho pra tomar.',
    },
    {
      id: 'chuva-de-arroz',
      nome: 'Chuva de Arroz',
      trecho: 'Vai ser nossa cidade, nosso telefone, nosso endereço, nosso apartamento. Sabe aquela igreja? Tô aqui na frente, imaginando chuva de arroz na gente.',
    },
    {
      id: 'vergonha-na-cara',
      nome: 'Vergonha na Cara',
      trecho: 'Vai embora, pode voltar, eu não tô com vergonha na cara. Eu te amo e assumo, pois você também não vale nada.',
    },
    {
      id: 'um-ser-so',
      nome: 'Um Ser Só',
      trecho: 'E vai a chuva, molha o meu rosto, lembro do mel e lembro do seu gosto, olho na janela, vejo o jardim.',
    },
    {
      id: 'o-recado',
      nome: 'O Recado',
      trecho: 'Você roda a roda e para em mim, sou seu destino, meio e fim, como tatuagem que se faz.',
    },
    {
      id: 'eu-nao-merecia-isso',
      nome: 'Eu Não Merecia Isso',
      trecho: 'Agora. Te amei, fui sincero, te quis e você sabe disso, eu não merecia isso, eu não merecia isso.',
    },
    {
      id: 'cafe-com-leite',
      nome: 'Café com Leite',
      trecho: 'Café com leite eu lembro, ponto de fadas. E às nove da manhã, quando você acordar e se perguntar como foi, como é. A gente só saiu pra jantar e foi ficando, é que a gente só saiu pra jantar.',
    },
    {
      id: 'falando-serio',
      nome: 'Falando Sério',
      trecho: 'Chega, você não tem hora, você me provoca e eu entro no seu jogo. Sabe dar as cartas, sabe me imparir de uma vez com essa brincadeira. Chega de bobeira, tô falando sério, preciso desse amor te amar a noite meia.',
    },
    {
      id: 'conto-de-fadas',
      nome: 'Conto de Fadas',
      trecho: 'Jurei ser diferente, falei que era feio, homem que mente. Que meninas vêm com seus parentes, mas espera um pouco, deixa eu te falar.',
    },
    {
      id: 'a-outra',
      nome: 'A Outra',
      trecho: 'Tenho medo de acordar de madrugada e uma luz semi-apagada refletir ela pra mim. Sei que está tão curiosa e louca pra me perguntar quem está no seu lugar. Quem roubou meu coração se chama solidão.',
    },
  ],
};

export default function MusicaAcustico() {
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
