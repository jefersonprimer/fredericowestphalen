import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <div>
          <Image
            src={Logo}
            alt="Logo do site"
            width={200}
            height={200}
            priority={true}
            className={styles.logo}
          />
        </div>
        <div className="input-group">
          <input
            className={`form-control ${styles.searchInput}`}
            type="text"
            placeholder="Pesquisar..."
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-search"></i> 
          </button>
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about" className={styles.navLink}>Sobre Nós</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/commerces" className={styles.navLink}>Comércios</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact" className={styles.navLink}>Contato</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
