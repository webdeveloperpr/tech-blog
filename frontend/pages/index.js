import Head from 'next/head'
import Hero from '../components/Hero';

import Card from '../components/Card';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="homepage">
        <Hero />
        <div className="card-row-component" >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div >
  )
}
