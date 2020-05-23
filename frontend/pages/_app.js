import '../css/styles.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import { config, library } from '@fortawesome/fontawesome-svg-core';
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;
import { faBars, faSearch, faClock, faRss } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

library.add(
  faClock,
  faSearch,
  faTwitter,
  faFacebookSquare,
  faRss,
)

export default function MyApp({ Component, pageProps }) {  
  return (
    <>
      <Nav />
      <main className="mt-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}