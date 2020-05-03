
import Date from '../Date';

const Card = (props) => {
  const image = props.images && props.images.length
    ? `http://localhost:8000${props.images[0].image}`
    : 'http://unsplash.it/2089/1175'

  return (
    <div className="card-component">
      <div className="card-component__area-1">

        <img
          className="img-responsive card-component__image"
          src={image}
        />
      </div>
      <div className="card-component__area-2">
        <h2>
          {props.title}
        </h2>
        <Date className="mb-1" date="apr 14, 2020" />
        <div
          className="card-component__content"
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        <a
          href={`/articles/view/${props.id}`}
          className="btn">Read More
        </a>

      </div>
    </div>
  )
}

export default Card;