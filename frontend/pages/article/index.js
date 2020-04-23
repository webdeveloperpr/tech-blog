import Head from 'next/head';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import CardHorizontal from '../../components/CardHorizontal';

const Article = () => {
  return (
    <div className="container">
      <Head>
        <title>Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="article-page">
        <div clasName="article-page__title">
        </div>
        <aside className="article-page__left-rail">
          <img className="mb-2" src="http://unsplash.it/300/250" />

        </aside>
        <aside className="article-page__body">

          <img className="img-responsive mb-4" src="http://unsplash.it/740/400" />
          <span className="article-page__time-to-read">
            Posted Apr 16, 2020 . 2 min read
          </span>
          <h1>
            How to Install TeamViewer on Debian 10          
          </h1>
          <p>
            TeamViewer is a cross-platform application that can be used for remote control, desktop sharing, online meetings, and file transfer between computers.
          </p>
          <p>This tutorial explains how to install TeamViewer on Debian 10, Buster.</p>
          <h3>Prerequisites</h3>
          <p>
            Before continuing with this tutorial, make sure you are logged in as a user with sudo privileges.
          </p>

          <h3>Installing TeamViewer on Debian</h3>
          <p>
            TeamViewer is proprietary computer software, and it is not included in the default Debian repositories. TeamViewer maintains its own APT repository from which we’ll install the package, and update it when a new version is available.
            Installing TeamViewer on Debian systems is a pretty straightforward process, just complete the steps below.
          </p>
          <img className="img-responsive mb-4" src="http://unsplash.it/740/400" />
          <h3>1. Download TeamViewer</h3>
          <p>
            Open your terminal either by using the Ctrl+Alt+T keyboard shortcut or by clicking on the terminal icon.
            Use wget to download the latest TeamViewer .deb package:
          </p>

          <h3>2. Install TeamViewer</h3>
          <p>
            Install the downloaded .deb package by typing the following command:
          </p>
          <img className="img-responsive mb-4" src="http://unsplash.it/740/400" />

          <h3>Starting TeamViewer</h3>
          <p>
            TeamViewer application can be launched either from the command line by typing teamviewer or by clicking on its icon in the Applications menu.
            When TeamViewer is started for the first time, a window similar to the following will be displayed. Accept the terms in the license agreement by clicking on the “License Agreement” button.
          </p>
        </aside>
        <aside className="article-page__right-rail">
          <img className="img-responsive mb-4" src="http://unsplash.it/300/600" />
        </aside>
      </div>
    </div >
  )
}

export default Article;