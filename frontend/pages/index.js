import Head from 'next/head'
import Link from 'next/link';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CardHorizontal from '../components/CardHorizontal';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage">
        <section className="homepage__cb-1">
          <Hero />
        </section>
        <section className="homepage__cb-2" >
          <Card />
          <Card />
          <Card />
        </section>
        <section className="homepage__cb-3">
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
        </section>
      </div>
    </div >
  )
}

export default Home;