import Head from 'next/head'
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="homepage">
        <Hero />
        {/* <Grid columns={3}>
          <Card />
          <Card />
          <Card />
        </Grid> */}
      </main>
    </div>
  )
}
