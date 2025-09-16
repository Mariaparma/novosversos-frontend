'use client';
import Slider from 'react-slick';
import styles from './Shows.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const shows = [
  { date: '15/09/2025', event: 'Expopec 2025', location: 'Ituiutaba, MG' },
  { date: '20/09/2025', event: 'Rodeo Festival', location: 'Jaguariúna, SP' },
  { date: '27/09/2025', event: 'Franca Rodeo Music', location: 'Franca, SP' },
  { date: '30/10/2025', event: 'Turnê Internacional', location: 'Madrid, Espanha' },
  { date: '01/11/2025', event: 'Turnê Internacional', location: 'Genebra, Suíça' },
  { date: '22/11/2025', event: 'Tour Ao Vivo na Lua', location: 'Recife, PE' },
  { date: '27/12/2025', event: 'Let’s Pipa Réveillon', location: 'Tibau do Sul, RN' },
];

export default function ShowsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <header className={styles['homepage-header']}>
        <div className={styles['logo-container']}>
          <img src="/icons/novosversos.png" alt="Estrela Guia Logo" className={styles.logo} />
        </div>
        <nav>
          <ul className={styles['nav-menu']}>
            <li><a href="/Paises">Notícias</a></li>
            <li><a href="/servicos">Shows</a></li>
            <li><a href="/contato">Álbuns e Músicas</a></li>
            <li><a href="/contato">Galeria</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.carouselContainer}>
        <h2 className={styles.title}>Próximos Shows</h2>

        <div className={styles.description}>
          <p>
            A cada cidade, uma nova história. A cada palco, uma nova emoção. Luan Santana segue encantando multidões com sua voz marcante e presença única. Em 2025, sua turnê percorre o Brasil e o mundo, levando não apenas música, mas também afeto, nostalgia e celebração.
          </p>
          <p>
            Prepare-se para noites inesquecíveis, onde cada acorde é uma lembrança e cada refrão é um convite para cantar junto. Seja em Ituiutaba, Madrid ou Tibau do Sul, o espetáculo é garantido — e você é parte dele.
          </p>
        </div>

        <Slider {...settings}>
          {shows.map((show, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img
                  src={`https://source.unsplash.com/800x300/?concert,stage,${index}`}
                  alt="Show"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{show.event}</h3>
                <p><strong>Data:</strong> {show.date}</p>
                <p><strong>Local:</strong> {show.location}</p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
}
