'use client';
import Slider from 'react-slick';
import styles from './Shows.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const shows = [
  {
    date: '15/09/2025',
    event: 'Expopec 2025',
    location: 'Ituiutaba, MG',
    image: 'https://www.ituiutaba.mg.gov.br/temp/e11691450248f704201b9a74a96b985f.jpg', 
  },
  {
    date: '20/09/2025',
    event: 'Jaguariuna Rodeo Festival',
    location: 'Jaguariúna, SP',
    image: 'https://i0.wp.com/www.agitossp.com.br/wp-content/uploads/2025/09/535350096_18523327195057841_1035785359981051382_n.jpg',
  },
  {
    date: '27/09/2025',
    event: 'Franca Rodeo Music',
    location: 'Franca, SP',
    image: 'https://9382cdebf7.clvaw-cdnwnd.com/9b71833bc45df38b547939216d0d77fa/200021475-3643336435/WhatsApp%20Image%202025-08-26%20at%2016.36.42.jpeg?ph=9382cdebf7',
  },
  {
    date: '01/11/2025',
    event: 'Turnê Internacional',
    location: 'Madri, Espanha',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1060743533%2F2527581533171%2F1%2Foriginal.20250625-221837?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=f4774ad80ce19b96c06ecba25f5fa0eb',
  },
  {
    date: '22/11/2025',
    event: 'Tour Ao Vivo na Lua',
    location: 'Recife, PE',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1060743533%2F2527581533171%2F1%2Foriginal.20250625-221837?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=f4774ad80ce19b96c06ecba25f5fa0eb',
  },
  {
    date: '27/12/2025',
    event: 'Let’s Pipa Réveillon',
    location: 'Salvador, BA',
    image: 'https://akamai.sscdn.co/tb/letras-news/wp-content/uploads/2025/04/8846843-luan-santana-turne-ao-vivo-na-lua-1024x735.jpg',
  },
];

export default function ShowsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <header className={styles['homepage-header']}>
        <div className={styles['logo-container']}>
          <img
            src="/icons/novosversos.png"
            alt="Novos Versos Logo"
            className={styles.logo}
          />
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
            A cada cidade, uma nova história. A cada palco, uma nova emoção. Luan Santana segue encantando multidões com sua voz marcante e presença única.
          </p>
          <p>
            Em 2025, sua turnê percorre o Brasil e o mundo, levando não apenas música, mas também afeto, nostalgia e celebração.
          </p>
        </div>

        <Slider {...settings}>
          {shows.map((show, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img
                  src={show.image}
                  alt={`Show ${show.event}`}
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
