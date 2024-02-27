import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__link-logo" to="/">
          <img src={logo} alt="BrainFlix logo" className="header__logo-icon" />
        </Link>
      </div>
      <div className="header__upload">
        <div className="header__searching">
          <div className="header__search-container">
            <input type="text" className="header__search" placeholder=" Search" />
          </div>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </div>
        <Link className="header__link-button" to="/upload">
          <button className="header__button">UPLOAD</button>
        </Link>

        <img src={avatar} alt="" className="header__avatar header__avatar--hidden" />
      </div>
    </header>
  );
}

export default Header;
