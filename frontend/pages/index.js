import Head from 'next/head'
import Hero from '../components/Hero';
import Card from '../components/Card';
import CardHorizontal from '../components/CardHorizontal';
import axios from 'axios';

const Home = props => {
  const posts = props.posts;

  const heroPost = posts[0];
  const cardPosts = posts.slice(1, 3);
  const horizontalCardPosts = posts.slice(4, 10);;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage">
        {heroPost &&
          <section className="homepage__cb-1">
            <Hero
              id={heroPost.id}
              title={heroPost.title}
              html={heroPost.content}
              slug={heroPost.slug}
              images={heroPost.images}
              categories={heroPost.cagetories}
            />
          </section>
        }
        {cardPosts &&
          <section className="homepage__cb-2" >
            {cardPosts.map(post => {
              return (
                <Card
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  html={post.content}
                  slug={post.slug}
                  images={post.images}
                  categories={post.categories}
                />
              )
            })}
          </section>
        }
        {horizontalCardPosts &&
          <section className="homepage__cb-3">
            {horizontalCardPosts.map(post => {
              <CardHorizontal
                title={post.title}
                html={post.content}
                slug={post.slug}
                images={post.images}
                categories={post.categories}
              />
            })}
          </section>
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let posts = [];
  try {
    posts = await axios('http://backend:8000/posts');
    posts = posts.data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts,
    },
  }
}

export default Home;