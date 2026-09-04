import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { weatherActions } from "../../store/store";
import useWeather from "../../hooks/useWeather";

import logo from "../../assets/images/logo.svg";
import dropDown from "../../assets/images/icon-dropdown.svg";
import unitsIcon from "../../assets/images/icon-units.svg";
import checkMark from "../../assets/images/icon-checkmark.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isFahrenheit = useSelector((state) => state.weather.isFahrenheit);
  const isMPH = useSelector((state) => state.weather.isMPH);
  const isInch = useSelector((state) => state.weather.isInch);

  useWeather(
    30.04,
    31.23,
    isFahrenheit ? "fahrenheit" : "celsius",
    isMPH ? "mph" : "kmh",
    isInch ? "inch" : "mm",
  );

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

  const covertToImperialHandler = () => {
    dispatch(weatherActions.convertToMM());
    dispatch(weatherActions.convertToKMH());
    dispatch(weatherActions.convertToCelsius());
  };

  const unitMenuButtonHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <img src={logo} alt="Sun logo" />

      <div className="units-container">
        <button
          onClick={unitMenuButtonHandler}
          className="header--btn"
          aria-haspopup="listbox"
        >
          <img src={unitsIcon} alt="" />
          <span>Units</span>
          <img src={dropDown} alt="" />
        </button>

        {isOpen && (
          <div className="units-menu" role="listbox">
            <fieldset className="units-group">
              <legend className="visually-hidden">Unit System Preset</legend>
              <button onClick={covertToImperialHandler} type="button">
                Switch to Imperial
              </button>
            </fieldset>

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
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
