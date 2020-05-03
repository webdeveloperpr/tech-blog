import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class Nav extends React.Component {
  constructor() {
    super();
    this.lastScrollTop = 0;
    this.state = {
      scrollDirection: 'down',
      categories: []
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

  componentDidMount = async () => {
    window.addEventListener('scroll', this.handleScroll, false);
    let categories = []
    try {
      const result = await axios('http://localhost:8000/categories/');
      categories = result.data;
    } catch (err) {
      console.log(err);
    }
    this.setState({ categories });
  };

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
            {this.state.categories.map(category => {
              return (
                <li
                  key={category.id}
                  className="nav-component__list-item"
                >
                  <a className="mb-0" href="/article">{category.name}</a>
                </li>
              );
            })}
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

Nav.defaultProps = {
  categories: [],
};

export default Nav;