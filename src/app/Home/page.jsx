import React from 'react';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <header className={styles['homepage-header']}>
        <div className={styles['logo-container']}>
          <img src="/icons/novosversos.png" alt="Estrela Guia Logo" className={styles.logo} />
        </div>
        <nav>
          <ul className={styles['nav-menu']}>
            <li><a href="/Noticias">Notícias</a></li>
            <li><a href="/Shows">Shows</a></li>
            <li><a href="/Albuns">Álbuns e Músicas</a></li>
            <li><a href="/Galeria">Galeria</a></li>
             <li><a href="/Contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles['homepage-main']}>
        <section className="intro">
        <h3>Bem-vindo ao Novos Versos</h3>
        <p>Informações oficiais sobre o cantor Luan Santana</p>
        </section>
        <section className={styles.cards}>
          <div className={styles.card}>
            <div className={styles['card-image-container']}>
              <img src="/images/luansantanacapa1.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore as princípais notícias do Luan Santana</h4>  
              <h4 className={styles['card-title']}>Descubra os próximos shows do Luan Santana</h4>
             <a href="/Paises" className={styles['card-button']}>Descubra Mais</a>
            </div>
            
            <div className={styles['card-image-container']}>
              <img src="/images/novosversos3.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>

            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Descubra os próximos shows do Luan Santana</h4>
              <h4 className={styles['card-title']}>Descubra os melhores pontos turisticos pra fazer sua viagem mais especial </h4>
              <a href="/Shows" className={styles['card-button']}>Descubra Mais</a>
            </div>

            <div className={styles['card-image-container']}>
              <img src="/images/novosversos1.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>

            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore o melhor país pra você fazer sua viagem dos sonhos </h4>
              <h4 className={styles['card-title']}>Descubra a melhor gastronomia da sua viagem dos sonhos </h4>
              <a href="/Albuns" className={styles['card-button']}>Descubra Mais</a>
            </div>

            <div className={styles['card-image-container']}>
              <img src="/images/novosversos4.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>

            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore o melhor país pra você fazer sua viagem dos sonhos </h4>
              <h4 className={styles['card-title']}>Descubra a melhor gastronomia da sua viagem dos sonhos </h4>
              <a href="/paises" className={styles['card-button']}>Descubra Mais</a>
            </div>

              <div className={styles['card-image-container']}>
              <img src="/images/novosversos5.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>

            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore o melhor país pra você fazer sua viagem dos sonhos </h4>
              <h4 className={styles['card-title']}>Descubra a melhor gastronomia da sua viagem dos sonhos </h4>
              <a href="/paises" className={styles['card-button']}>Descubra Mais</a>
            </div>


          </div>
        </section>
      </main>
      <footer className={styles['homepage-footer']}>
        <p>&copy; 2025 Estrela Guia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;