import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Date = (props) => {
  return (
    <div className="date-component">
      <FontAwesomeIcon
        className="date-component__icon"
        icon="clock"
        size="xs"
      />
      <span className="date-component_time">
        {props.date}
      </span>
    </div>
  )
};


export default Date;