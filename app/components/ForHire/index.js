/**
*
* ForHire
*
*/

import React from "react";
import { Link } from "react-router";
import Paper from "material-ui/Paper";
import glamorous from "glamorous";

class ForHire extends React.PureComponent {
  render() {
    const forHire = {
      gridRow: "3 / 3",
      gridColumn: "1 / 3",
      minWidth: "300px",
      maxWidth: "800px"
    };

    const hireContent = {
      background: "#B3E5FC",
      textAlign: "center",
      color: "0",
      padding: "1em"
    };

    const headerStyle = {
      color: "#673AB7"
    };

    const textStyle = {
      fontSize: "1.25em"
    };

    const linkStyle = {
      fontSize: "1.25em",
      color: "#673AB7",
      marginLeft: ".5em"
    };

    return (
      <div style={forHire}>

        <Paper zDepth={2}>

          <div style={hireContent}>

            <p>

              <img
                src="http://audora.me/img/emoji/siren.png"
                height="24px"
                width="24px"
                alt="siren emoji"
                />


              <img
                src="http://audora.me/img/emoji/glow-star.png"
                height="24px"
                width="24px"
                alt="glow star emoji"
                />


              <img
                src="http://audora.me/img/emoji/siren.png"
                height="24px"
                width="24px"
                alt="siren emoji"
                />

            </p>

            <h2 style={headerStyle}> For Hire</h2>

            <p style={textStyle}>

              I'm currently looking for a team that needs an entry-level
              front-end or fullstack developer. Ideally I would do a lot of
              Javascript work & y'all have a UI developer I could glean some
              design knowledge from.{" "}
              <img
                src="http://audora.me/img/emoji/wink.png"
                height="24px"
                width="24px"
                alt="winking face emoji"
                />

            </p>

            <Link
              href="http://audora.me/storage/chalker-resume.pdf"
              style={linkStyle}
              >
              <img
                src="http://audora.me/img/emoji/fire.png"
                height="24px"
                width="24px"
                alt="fire emoji"
                />
              Resume
            </Link>


            <Link
              href="mailto:audoralc@gmail.com"
              style={linkStyle}>

              <img
                src="http://audora.me/img/emoji/email.png"
                height="24px"
                width="24px"
                alt="email emoji"
                />

              Email
            </Link>


            <Link
              href="https://github.com/audoralc"
              style={linkStyle}>

              <img
                src="http://audora.me/img/emoji/file-box.png"
                height="24px"
                width="24px"
                alt="file box emoji"
                />
              Github
            </Link>

          </div>

        </Paper>       

      </div>
    );
  }
}

export default ForHire;
