import styles from '../styles/Header.module.css';

export default function Header() {
    return (
      <div className={styles['header-container']}>
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
    </div>
    );
}