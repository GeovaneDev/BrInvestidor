import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" passHref className="navbar-brand d-flex align-items-center">
          <Image src="/BrInvestAPI.png" alt="BrInvestAPI Icon" width={50} height={50} />
          <span className="fw-bold">BrInvestAPI</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="navbarNav" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Abrir menu">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/docs" passHref className="nav-link btn btn-outline-primary active rounded-pill">Documentação</Link>
            </li>
            <li className="nav-item">
              <a href="https://github.com/GeovaneDev/BrInvestAPI" target="_blank" className="nav-link" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
