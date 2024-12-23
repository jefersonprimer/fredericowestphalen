// components/SecondNav.js
import styles from './SecondNav.module.css';
import Link from 'next/link';

export default function SecondNav() {
  const navLinks = [
    { label: 'Todos', href: '/' },
    { label: 'Ofertas do Dia', href: '/ofertas' },
    { label: 'Comprar novamente', href: '/comprar-novamente' },
    { label: 'Atendimento ao Cliente', href: '/atendimento' },
    { label: 'Minhas listas', href: '/minhas-listas' },
    { label: 'Vales-presente', href: '/vales-presente' },
    { label: 'Vender', href: '/vender' },
  ];

  return (
    <nav className={styles.secondNav}>
      <ul className={styles.navList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
