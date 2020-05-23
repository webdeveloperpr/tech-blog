
import Date from '../Date';

const Hero = (props) => {  
  const image = props.images && props.images.length
    ? props.images[0].image
    : 'http://unsplash.it/2089/1175'

  return (
    <div className="hero-card-component">
      <div className="hero-card-component__area-1">
        <img
          className="img-responsive"
          src={image}
          alt="hero"
        />
      </div>
      <div className="hero-card-component__area-2">
        <h2>
          {props.title}
        </h2>
        <Date className="mb-1" date="apr 14, 2020" />
        <div
          className="hero-card-component__content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />

        <a
          href={`/articles/view/${props.id}`}
          className="btn d-block t-center"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default Hero;