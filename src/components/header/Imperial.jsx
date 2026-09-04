import { useDispatch } from "react-redux";
import { weatherActions } from "../../store/store";

const Imperial = () => {
  const dispatch = useDispatch();

  const covertToImperialHandler = () => {
    dispatch(weatherActions.convertToMM());
    dispatch(weatherActions.convertToKMH());
    dispatch(weatherActions.convertToCelsius());
  };

  return (
    <fieldset className="units-group">
      <legend className="visually-hidden">Unit System Preset</legend>
      <button onClick={covertToImperialHandler} type="button">
        Switch to Imperial
      </button>
    </fieldset>
  );
};

export default Imperial;
