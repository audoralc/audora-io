/**
*
* Header
*
*/

import React from "react";
import { Link } from "react-router";
import Helmet from "react-helmet";
import Responsive from "react-responsive";
import Paper from "material-ui/Paper";
import glamorous from "glamorous";
import ReactTooltip from "react-tooltip";

const StyledHeader = glamorous.nav({
  color: "#424242",
  ":hover": {
    color: "#00B0FF",
    textDecoration: "none"
  },
  fontSize: ".75em"
});

const colors = {
  white: "#FAFAFA",
  black: "#424242",
  accentPurple: "#9575CD",
  lightBlue: "#B3E5FC",
  brightBlue: "#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#00C853"
};

class Header extends React.PureComponent {
  render() {
    const headerStyle = {
      gridRow: "1 / 1",
      gridColumn: "1 / 4 span",
      textDecoration: "none",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      width: "100%",
      backgroundImage: "url(http://audora.me/img/header.png",
      backgroundSize: "100vw 15vh"
    };

    const navBlock = {
      gridColumn: "1 / 2 span",
      margin: "7vh 5vw 5vh .5em"
    };

    const navbar = {
      display: "flex",
      flexDirection: "row",
      margin: "1em 0 0 0",
      justifyContent: "space-around",
      fontSize: "1.15em"
    };

    const h1Style = {
      margin: " .25em 0",
      fontSize: "24px"
    };

    return (
      <div style={headerStyle}>
        <nav style={navBlock}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledHeader>
              <h1 style={h1Style}> Audora Chalker </h1>
            </StyledHeader>
          </Link>
          <nav style={navbar}>
            <p aria-label="homepage link">
              <a data-tip="home">
                <Link to="/">
                  <img
                    src="http://audora.me/img/emoji/house.png"
                    height="24px"
                    width="24px"
                    alt="house emoji"/>
                </Link>
                {" "}
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="float" />
            </p>
            <p aria-label="blog link">
              <a data-tip="coming soon!">
                <Link to="">
                  <img
                    src="http://audora.me/img/emoji/writing-hand.png"
                    height="24px"
                    width="24px"
                    alt="writing hand emoji"
                    />
                </Link>
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="float" />
            </p>
            <p aria-label="about page link">
              <a data-tip="about">
                <Link to="/about">
                  <img
                    src="http://audora.me/img/emoji/female-technologist.png"
                    alt="female technologist emoji"
                    height="24px"
                    width="24px"
                    />

                </Link>
              </a>
              <ReactTooltip
                place="bottom"
                type="dark"
                effect="float" />
            </p>
          </nav>
        </nav>

        <div>
        </div>
      </div>
    );
  }
}

export default Header;
