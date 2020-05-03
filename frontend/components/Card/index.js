
import Date from '../Date';

const Card = () => {
  return (
    <div className="card-component">
      <div className="card-component__area-1">
        <img
          className="img-responsive"
          src="http://unsplash.it/2089/1175"
        />
      </div>
      <div className="card-component__area-2">
        <h2>
          How to Install TeamViewer on Debian 10
        </h2>
        <Date className="mb-1" date="apr 14, 2020" />
        <p>
          TeamViewer is a cross-platform application that can be used for remote control, desktop sharing, online meetings, and file transfer between computers.
          This tutorial explains how to install TeamViewer on Debian 10, Buster.
          Prerequisites
          </p>

        <a className="btn">Read More</a>
      </div>
    </div>
  )
}

export default Card;