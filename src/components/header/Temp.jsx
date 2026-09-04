import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../store/store";

const Temp = ({ checkMark }) => {
  const dispatch = useDispatch();
  const isFahrenheit = useSelector((state) => state.weather.isFahrenheit);

  const convertToFahrenheitHandler = () => {
    if (isFahrenheit) {
      return;
    }
    dispatch(weatherActions.convertToFahrenheit());
  };

  const convertToCelsiusHandler = () => {
    if (!isFahrenheit) {
      return;
    }

    dispatch(weatherActions.convertToCelsius());
  };

  return (
    <fieldset className="units-group">
      <legend>Temperature</legend>
      <ul role="group">
        <li>
          <button
            onClick={convertToCelsiusHandler}
            className={!isFahrenheit ? "active" : null}
            type="button"
          >
            Celsius (°C)
            {!isFahrenheit && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
        <li>
          <button
            onClick={convertToFahrenheitHandler}
            className={isFahrenheit ? "active" : null}
            type="button"
          >
            Fahrenheit (°F)
            {isFahrenheit && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
      </ul>
    </fieldset>
  );
};

export default Temp;
