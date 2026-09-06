import Temp from "./Temp";
import Wind from "./Wind";
import checkMark from "../../assets/images/icon-checkmark.svg";
import Precipitation from "./Precipitation";
import Imperial from "./Imperial";

const UnitsMenu = () => {
  return (
    <div className="units-menu" role="dialog" aria-label="Unit Settings">
      <Imperial />

      <Temp checkMark={checkMark} />

      <Wind checkMark={checkMark} />

      <Precipitation checkMark={checkMark} />
    </div>
  );
};

export default UnitsMenu;
