import { React } from "react";
import PropTypes from "prop-types";
import Moon from "./header-img/moon.png";
import Sun from "./header-img/sun.png";
import logo from "./header-img/logo.svg";
import "./header.css";
const Header = ({ themeColor, checked, handleChange }) => {
  return (
    <header className={themeColor}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Finance test task </h1>
      <span className="theme_color_wrapper">
        {checked ? <img src={Moon} alt="moon" /> : <img src={Sun} alt="sun" />}
        <input type="checkbox" checked={checked} onChange={handleChange} />
      </span>
    </header>
  );
};

export default Header;

Header.propTypes = {
  themeColor: PropTypes.array,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
