import { useState } from "react";
import { useSelector } from "react-redux";

import useWeather from "../../hooks/useWeather";

import logo from "../../assets/images/logo.svg";
import dropDown from "../../assets/images/icon-dropdown.svg";
import unitsIcon from "../../assets/images/icon-units.svg";
import UnitsMenu from "./UnitsMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {isOpen && <UnitsMenu />}
      </div>
    </header>
  );
};
export default Header;
