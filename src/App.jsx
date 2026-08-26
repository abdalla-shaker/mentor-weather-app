import Aside from "./components/aside/Aside.jsx";
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
        <Aside />
      </div>
    </>
  );
}

export default App;
