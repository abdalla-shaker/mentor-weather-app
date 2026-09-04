import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../store/store";

const Precipitation = ({ checkMark }) => {
  const dispatch = useDispatch();
  const isInch = useSelector((state) => state.weather.isInch);

  const covertToMMHandler = () => {
    if (!isInch) {
      return;
    }

    dispatch(weatherActions.convertToMM());
  };

  const convertToInchHandler = () => {
    if (isInch) {
      return;
    }

    dispatch(weatherActions.convertToInch());
  };
  return (
    <fieldset className="units-group">
      <legend>Precipitation</legend>
      <ul role="group">
        <li>
          <button
            onClick={covertToMMHandler}
            className={!isInch ? "active" : null}
            type="button"
          >
            Millimeters (mm)
            {!isInch && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
        <li>
          <button
            onClick={convertToInchHandler}
            className={isInch ? "active" : null}
            type="button"
          >
            Inches (in)
            {isInch && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
      </ul>
    </fieldset>
  );
};

export default Precipitation;
