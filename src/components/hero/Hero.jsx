import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { weatherActions } from "../../store/store.js";
import searchIcon from "../../assets/images/icon-search.svg";

const storedSearchedTerms =
  JSON.parse(localStorage.getItem("searchedTerms")) === null
    ? []
    : JSON.parse(localStorage.getItem("searchedTerms"));

const Hero = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerms, setSearchedTerms] = useState(storedSearchedTerms);
  const dispatch = useDispatch();
  const form = useRef();

  const locationName = useSelector(
    (state) => state.weather.weatherData.locationName,
  );

  const isLoading = useSelector((state) => state.weather.isLoading);

  useEffect(() => {
    if (!isLoading && locationName.trim() === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearchedTerms((prevTerms) => {
        const filteredTerms = prevTerms.slice(1);
        localStorage.setItem("searchedTerms", JSON.stringify(filteredTerms));
        return filteredTerms;
      });
    }
  }, [locationName, isLoading]);

  const submitSearchHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const formEntries = Object.fromEntries(formData);

    if (
      formEntries.search.trim() === "" ||
      formEntries.search.trim().toLowerCase() ===
        locationName.trim().toLowerCase()
    ) {
      return;
    }

    const newTerm = formEntries.search.trim();

    const updatedTerms = [
      newTerm,
      ...searchedTerms.filter(
        (term) => term.toLowerCase() !== newTerm.toLowerCase(),
      ),
    ].slice(0, 4);

    setSearchedTerms(updatedTerms);

    localStorage.setItem("searchedTerms", JSON.stringify(updatedTerms));

    dispatch(weatherActions.searchLocation(formEntries.search));
  };

  const focusHandler = () => {
    setSearchIsOpen(true);
  };

  const blueHandler = () => {
    setTimeout(() => {
      setSearchIsOpen(false);
    }, 200);
  };

  const searchClickHandler = (place) => {
    setSearchTerm(place);
  };

  return (
    <section className="hero">
      <h1>How's the sky looking today?</h1>

      <form ref={form} onSubmit={submitSearchHandler} className="form">
        <div className="form-control">
          <label htmlFor="search">
            <img src={searchIcon} alt="search icon" />
          </label>
          <input
            onFocus={focusHandler}
            onBlur={blueHandler}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            id="search"
            name="search"
            placeholder="Search for a place..."
            autoComplete="off"
          />
        </div>
        <button type="submit" className="form-btn">
          Search
        </button>

        {searchedTerms.length > 0 && searchIsOpen && (
          <ul className="search-history">
            {searchedTerms.map((term) => (
              <li key={term}>
                <button
                  type="button"
                  onClick={searchClickHandler.bind(null, term)}
                >
                  {term}
                </button>
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
};

export default Hero;
