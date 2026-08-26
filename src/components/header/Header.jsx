import logo from "../../assets/images/logo.svg";
import dropDown from "../../assets/images/icon-dropdown.svg";
import unitsIcon from "../../assets/images/icon-units.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="A shine sun logo" aria-hidden="true" />
      <button className="header--btn" aria-haspopup="listbox">
        <img src={unitsIcon} alt="Gear icon" />
        Units
        <img src={dropDown} alt="Drop down arrow icon" />
      </button>
    </header>
  );
};

export default Header;
