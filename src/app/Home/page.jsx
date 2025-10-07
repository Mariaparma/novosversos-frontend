import React from 'react';
import styles from './Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <Header />
      <main className={styles.homepagemain}>
        <section className="intro">
          <h3>Bem-vindo ao Novos Versos</h3>
          <p>Informações oficiais sobre o cantor Luan Santana</p>
        </section>

        <section className={styles.cards}>
          <div className={styles.card}>
            {/* Card 1 */}
            <div className={styles.cardimagecontainer}>
              <img
                src="/images/luansantanacapa1.png"
                alt="Imagem Genérica"
                className={styles.cardimage}
              />
            </div>
            <div className={styles.cardcontent}>
              <h4 className={styles.cardtitle}>Explore as principais notícias do Luan Santana</h4>
              <h4 className={styles.cardtitle}>Descubra os próximos shows do Luan Santana</h4>
              <a href="/Noticias" className={styles.cardbutton}>Descubra Mais</a>
            </div>

            {/* Card 2 */}
            <div className={styles.cardimagecontainer}>
              <img
                src="/images/novosversos3.png"
                alt="Imagem Genérica"
                className={styles.cardimage}
              />
            </div>
            <div className={styles.cardcontent}>
              <h4 className={styles.cardtitle}>Descubra os próximos shows do Luan Santana</h4>
              <h4 className={styles.cardtitle}>
                Descubra os melhores pontos turísticos pra fazer sua viagem mais especial
              </h4>
              <a href="/Shows" className={styles.cardbutton}>Descubra Mais</a>
            </div>

            {/* Card 3 */}
            <div className={styles.cardimagecontainer}>
              <img
                src="/images/novosversos1.png"
                alt="Imagem Genérica"
                className={styles.cardimage}
              />
            </div>
            <div className={styles.cardcontent}>
              <h4 className={styles.cardtitle}>Explore os álbuns do Luan Santana</h4>
              <h4 className={styles.cardtitle}>Descubra o trecho das músicas de cada álbum</h4>
              <a href="/Albuns" className={styles.cardbutton}>Descubra Mais</a>
            </div>

            {/* Card 4 */}
            <div className={styles.cardimagecontainer}>
              <img
                src="/images/novosversos4.png"
                alt="Imagem Genérica"
                className={styles.cardimage}
              />
            </div>
            <div className={styles.cardcontent}>
              <h4 className={styles.cardtitle}>Veja a galeria de fotos do cantor</h4>
              <h4 className={styles.cardtitle}>E participe da área de fãs deixando seu Post!</h4>
              <a href="/Galeria" className={styles.cardbutton}>Descubra Mais</a>
            </div>

            {/* Card 5 */}
            <div className={styles.cardimagecontainer}>
              <img
                src="/images/novosversos5.png"
                alt="Imagem Genérica"
                className={styles.cardimage}
              />
            </div>
            <div className={styles.cardcontent}>
              <h4 className={styles.cardtitle}>Entre em contato conosco!</h4>
              <h4 className={styles.cardtitle}>Tire suas dúvidas</h4>
              <a href="/Contato" className={styles.cardbutton}>Descubra Mais</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
