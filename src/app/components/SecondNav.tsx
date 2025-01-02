// components/SecondNav.js
import styles from './SecondNav.module.css';
import Link from 'next/link';

export default function SecondNav() {
  return (
    <nav className={styles.secondNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Todos</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/ofertas">Ofertas do Dia</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/comprar-novamente">Comprar novamente</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/atendimento">Atendimento ao Cliente</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/minhas-listas">Minhas listas</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/vales-presente">Vales-presente</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/vender">Vender</Link>
        </li>
      </ul>
    </nav>
  );
}
