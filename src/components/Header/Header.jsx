import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="BrainFlix logo" className="header__logo-icon" />
      </div>
      <div className="header__upload">
        <div className="header__searching">
          <div className="header__search-container">
            <input type="text" className="header__search" placeholder=" Search" />
          </div>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </div>
        <button className="header__button">UPLOAD</button>
        <img src={avatar} alt="" className="header__avatar header__avatar--hidden" />
      </div>
    </header>
  );
}

export default Header;
