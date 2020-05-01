import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <nav className="footer-component">
      <div className="footer-component-links">
        <ul>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="footer-component-social">
        <FontAwesomeIcon
          icon="rss"
          size="sm"
        />
      </div>
    </nav>
  );
}

export default Footer;