import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Main from "./components/main/Main.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="weather-details-container">
        <Main />
        <aside>
          <h2>Hourly forecast</h2>
        </aside>
      </div>
    </>
  );
}

export default App;
