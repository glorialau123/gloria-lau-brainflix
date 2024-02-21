import "./App.scss";
import videoDetails from "./data/video-details.json";

import Header from "./components/Header/Header";

function App() {
  console.log(videoDetails);
  return (
    <div className="App">
      <header className="header">
        <Header />
        {/* <div className="header__title">
          <div className="header__logo">
            <img src={logo} alt="BrainFlix logo" className="header__logo-icon" />
          </div>
          <div className="header__searching">
            <input type="text" className="header__search" placeholder="Search" />
            <img src={avatar} alt="" className="header__avatar" />
            <button className="header__button">UPLOAD</button>
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
