import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-component-links">
        <ul>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="footer-component-social white">
        <FontAwesomeIcon
          icon="rss"
          size="sm"
        />
      </div>
    </footer>
  );
}

export default Footer;