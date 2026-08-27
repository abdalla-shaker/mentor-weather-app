import dropDown from "../../assets/images/icon-dropdown.svg";

const Aside = () => {
  return (
    <aside
      className="aside"
      aria-busy="true"
      aria-label="Loading Hourly forecast"
    >
      <header className="aside-header" aria-hidden="true">
        <h2>Hourly forecast</h2>
        <button className="forecast-list-btn" aria-haspopup="listbox">
          -
          <img src={dropDown} alt="" aria-hidden="true" />
        </button>
      </header>

      <dl className="hourly-list" aria-hidden="true">
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
        <div className="hourly-list--item loading"></div>
      </dl>
    </aside>
  );
};

export default Aside;
