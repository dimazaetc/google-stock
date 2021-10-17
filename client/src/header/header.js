import { React } from "react";
import PropTypes from "prop-types";

import Moon from "./headerImg/moon.png";
import Sun from "./headerImg/sun.png";
import logo from "./headerImg/logo.svg";

const Header = ({ themeColor, checked, handleChange }) => {
  return (
    <header className={themeColor}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Finance test task </h1>
      <span className="themeColorWrapper">
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
