import dropDown from "../../assets/images/icon-dropdown.svg";

const Aside = () => {
  return (
    <aside className="aside">
      <header className="aside-header">
        <h2>Hourly forecast</h2>
        <button className="forecast-list-btn" aria-haspopup="listbox">
          -
          <img src={dropDown} alt="" aria-hidden="true" />
        </button>
      </header>

      <dl className="hourly-list">
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
