/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      socialHover:false
    }
  }

  enterHover = () => {
    this.setState({
      socialHover:true
    })
    console.log(this.state.socialHover);
  };

  leaveHover = () => {
    this.setState ({
      socialHover:false
    })
    console.log(this.state.socialHover);
  };

  showAni = () => {

    const iconBlockStyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    }

    const linkTextStyle={
    textDecoration: "none",
    color: "#E7F4F5",
    fontSize: "1em",
  }

    const aniIcons = {
      color: "#444",
      fontSize: "1em",
    }

    if(this.state.socialHover == true)
    {
      return (
        <div style={iconBlockStyle}>
        <li onMouseLeave={this.leaveHover}> <a  href="mailto:scribeklio@gmail.com" style={aniIcons}><FaEnvelope></FaEnvelope></a></li>
        <li onMouseLeave={this.leaveHover}>  <a  href="https://github.com/scribeklio" style={aniIcons}><FaGithub></FaGithub></a></li>
        <li onMouseLeave={this.leaveHover}> <a  href="https://www.linkedin.com/achalker24" style={aniIcons}><FaLinkedin></FaLinkedin></a></li>
        <li onMouseLeave={this.leaveHover}> <a  href="https://twitter.com/klioonthemoon" style={aniIcons}><FaTwitter></FaTwitter></a></li>
        </div>
      )
    }
    else {
      return(
        <div style={iconBlockStyle}>
        <li onMouseEnter={this.enterHover}> <a  href="mailto:scribeklio@gmail.com" style={linkTextStyle}><FaEnvelope></FaEnvelope></a></li>
        <li onMouseEnter={this.enterHover}>  <a  href="https://github.com/scribeklio" style={linkTextStyle}><FaGithub></FaGithub></a></li>
        <li onMouseEnter={this.enterHover}> <a  href="https://www.linkedin.com/achalker24" style={linkTextStyle}><FaLinkedin></FaLinkedin></a></li>
        <li onMouseEnter={this.enterHover}> <a  href="https://twitter.com/klioonthemoon" style={linkTextStyle}><FaTwitter></FaTwitter></a></li>
        </div>
      )
    }
  }

  render() {
    const footerContainer= {
      zIndex: "9",
    }
    const footerStyle={
      background:"#8DE0CA",
      display: "flex",
      flexDirection: "column",
      bottom: "0",
      width: "50%",
      height: "auto",
      margin: "0 auto",
    }

         const footerFontStyle={
           fontFamily: "Cabin",
           justifyContent: "space-between",
           color: "#669daf",
           margin: "0 0",
         }

         const ulstyleReset={
           paddingLeft: "0px",
         }

         const iconBlockStyle={
           display: "flex",
          }

             const iconListStyle= {
                 listStyleType: "none",
               }

               const copyrightStyle= {
                 margin: "0 auto",
                 lineHeight: "1em",
               }

               const linkTextStyle={
               color: "#E7F4F5",
               zIndex: "9999",
             }

    return (
      <div style={footerContainer}>
      <footer>
      <Paper style={footerStyle} zDepth={2}>
      <ul style={ulstyleReset}>
        <div style={iconListStyle}>
        {this.showAni()}
        </div>
      </ul>
        <div style={copyrightStyle}>
        <p style={footerFontStyle}> © 2017 audora chalker. made with ❤️️ & ☕. </p>
        </div>
        </Paper>
      </footer>
      </div>
    );
  }
}

export default Footer;
