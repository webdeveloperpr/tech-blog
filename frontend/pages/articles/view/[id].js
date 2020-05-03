import Head from 'next/head';
import axios from 'axios';

const Article = (props) => {
  const image = props.post.images && props.post.images.length
    ? `http://localhost:8000${props.post.images[0].image}`
    : 'http://unsplash.it/2089/1175'

  return (
    <div className="container">
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="article-page">
        <div className="article-page__title">
        </div>
        <aside className="article-page__left-rail">
          <img className="mb-2" src="http://placehold.it/300x250" />

        </aside>
        <div className="article-page__body">
          <h2>{props.post.title}</h2>
          <img
            className="img-responsive mb-4"
            src={image}
          />
          <div dangerouslySetInnerHTML={{ __html: props.post.editor_html }} />

        </div>
        <aside className="article-page__right-rail">
          <img className="img-responsive mb-4" src="http://placehold.it/300x600" />
        </aside>
      </div>
    </div >
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  let post = {};

  try {
    post = await axios(`http://backend:8000/posts/${id}/`);
    post = post.data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      post,
    },
  }
}

export default Article;