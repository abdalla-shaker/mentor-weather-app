import searchIcon from "../../assets/images/icon-search.svg";

const Hero = () => {
  return (
    <section className="hero">
      <h1>How's the sky looking today?</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <div className="form-control">
          <label htmlFor="search">
            <img src={searchIcon} alt="search icon" />
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search for a place..."
          />
        </div>
        <button type="submit" className="form-btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
