import Date from '../Date';

const CardHorizontal = (props) => {
  return (
    <div className="card-horizontal-component">
      <div className="card-horizontal-component-details">
        <Date date="APR 14, 2020" />
        <h3 className="h6">
          How to Install Mono in Debian10
        </h3>
      </div>
      <div className="card-horizontal-component-image">
        <img
          className="img-responsive"
          src="https://unsplash.it/200/100"
        />
      </div>
    </div>
  );
};

export default CardHorizontal;
