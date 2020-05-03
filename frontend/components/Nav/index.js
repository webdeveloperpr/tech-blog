import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Nav extends React.Component {
  constructor() {
    super();
    this.lastScrollTop = 0;
    this.state = {
      scrollDirection: 'down',
    };
  }

  handleScroll = () => {
    // element should be replaced with the actual target element on which you 
    // have applied scroll, use window in case of no target element.
    var st = window.pageYOffset || document.documentElement.scrollTop;
    st > this.lastScrollTop
      ? this.setState({ scrollDirection: 'up' })
      : this.setState({ scrollDirection: 'down' });
    // For Mobile or negative scrolling
    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const navState = {
      up: 'nav-component--is-slide-up',
      down: 'nav-component--is-slide-down',
    };
    return (
      <nav className={`nav-component ${navState[this.state.scrollDirection]}`}>
        <div className="nav-component__logo">
          <h1 className="p mb-0">
            <a href="/">Tech Blog</a>
          </h1>
        </div>
        <div className="nav-component__links">
          <ul className="nav-component__list">
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Ubuntu</a>
            </li>
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Centos</a>
            </li>
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Debian</a>
            </li>
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Commands</a>
            </li>
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Series</a>
            </li>
            <li className="nav-component__list-item">
              <a className="mb-0" href="/article">Donate</a>
            </li>
          </ul>
        </div>
        <div className="nav-component__search">
          <FontAwesomeIcon
            className="date-component__icon white"
            icon="search"
            size="1x"
          />
        </div>
      </ nav>
    );
  }
}

export default Nav;