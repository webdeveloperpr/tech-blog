import Head from 'next/head';
import Editor from '../../components/Editor';

const Article = () => {
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
        <aside className="article-page__body">
          <Editor />
        </aside>
        <aside className="article-page__right-rail">
          <img className="img-responsive mb-4" src="http://placehold.it/300x600" />
        </aside>
      </div>
    </div >
  )
}

export default Article;