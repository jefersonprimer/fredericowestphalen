import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/logo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        {/* Colunas principais */}
        <div className="row">
          {/* Cada coluna */}
          <div className="col-md-3 mb-3">
            <h5>Conheça-nos</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light">Carreiras</Link></li>
              <li><Link href="/about" className="text-light">Blog</Link></li>
              <li><Link href="/commerces" className="text-light">Sobre a PrimerLabs</Link></li>
              <li><Link href="/contact" className="text-light">Relação do investidor</Link></li>
              <li><Link href="/blog" className="text-light">Dispositivos PrimerLabs</Link></li>
              <li><Link href="/blog" className="text-light">PrimerLabs Science</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Ganhe dinheiro conosco</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light">Carreiras</Link></li>
              <li><Link href="/about" className="text-light">Blog</Link></li>
              <li><Link href="/commerces" className="text-light">Sobre a PrimerLabs</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Formas de pagamento</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light">Carreiras</Link></li>
              <li><Link href="/about" className="text-light">Blog</Link></li>
              <li><Link href="/commerces" className="text-light">Sobre a PrimerLabs</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Deixe-nos ajudar você</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light">Carreiras</Link></li>
              <li><Link href="/about" className="text-light">Blog</Link></li>
              <li><Link href="/commerces" className="text-light">Sobre a PrimerLabs</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo e itens relacionados */}
        <div className="d-flex justify-content-between align-items-center my-4">
          <Image
            src={Logo}
            alt="Logo do site"
            width={200}
            height={200}
            priority={true}
            className={styles.logo}
          />
          <div>
            <p>Ícone de globo e botão de idioma</p>
          </div>
          <div>
            <p>Dólar americano</p>
          </div>
          <div>
            <p>Bandeira e texto 'Estados Unidos'</p>
          </div>
        </div>


        <div className="d-flex justify-content-between align-items-center my-4">
          <div>
          <p><Link href="#">Condições de uso</Link></p>
          </div>
          <div>
          <p>Notificação de Privacidade</p>
          </div>
          <div>
          <p>Divulgação de privacidade de dados e de saúde do consumidor</p>
          </div>
          <div>
          <p>Suas escolhas de privacidade em anúncios publicitários</p>
          </div>
        </div>

        {/* Links no rodapé */}
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Frederico Westphalen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
