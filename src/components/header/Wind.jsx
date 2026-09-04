import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "../../store/store";

const Wind = ({ checkMark }) => {
  const dispatch = useDispatch();
  const isMPH = useSelector((state) => state.weather.isMPH);

  const convertToKMHHandler = () => {
    if (!isMPH) {
      return;
    }

    dispatch(weatherActions.convertToKMH());
  };

  const convertToMPHHandler = () => {
    if (isMPH) {
      return;
    }

    dispatch(weatherActions.convertToMPH());
  };

  return (
    <fieldset className="units-group">
      <legend>Wind Speed</legend>
      <ul role="group">
        <li>
          <button
            onClick={convertToKMHHandler}
            className={!isMPH ? "active" : null}
            type="button"
          >
            km/h
            {!isMPH && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
        <li>
          <button
            onClick={convertToMPHHandler}
            className={isMPH ? "active" : null}
            type="button"
          >
            mph{isMPH && <img src={checkMark} alt="check icon" />}
          </button>
        </li>
      </ul>
    </fieldset>
  );
};

export default Wind;
