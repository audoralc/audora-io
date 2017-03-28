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

    const socialIconStyles= {
      color: "white",
      fontSize: "1.5em",
    };

    const aniIcons = {
      color: "#444",
      fontSize: "1.5em",
    }

    if(this.state.socialHover == true)
    {
      return (
        <div style={iconBlockStyle}>
        <li style={socialIconStyles} onMouseLeave={this.leaveHover}> <a  href="mailto:scribeklio@gmail.com"><FaEnvelope></FaEnvelope></a></li>
        <li style={socialIconStyles} onMouseLeave={this.leaveHover}>  <a  href="https://github.com/scribeklio"><FaGithub></FaGithub></a></li>
        <li style={socialIconStyles} onMouseLeave={this.leaveHover}> <a  href="https://www.linkedin.com/achalker24"><FaLinkedin></FaLinkedin></a></li>
        <li style={socialIconStyles} onMouseLeave={this.leaveHover}> <a  href="https://twitter.com/klioonthemoon"><FaTwitter></FaTwitter></a></li>
        </div>
      )
    }
    else {
      return(
        <div style={iconBlockStyle}>
        <li style={aniIcons} onMouseOver={this.enterHover}> <a  href="mailto:scribeklio@gmail.com"><FaEnvelope></FaEnvelope></a></li>
        <li style={aniIcons} onMouseOver={this.enterHover}>  <a  href="https://github.com/scribeklio"><FaGithub></FaGithub></a></li>
        <li style={aniIcons} onMouseOver={this.enterHover}> <a  href="https://www.linkedin.com/achalker24"><FaLinkedin></FaLinkedin></a></li>
        <li style={aniIcons} onMouseOver={this.enterHover}> <a  href="https://twitter.com/klioonthemoon"><FaTwitter></FaTwitter></a></li>
        </div>
      )
    }
  }

  render() {
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

         const iconBlockStyle={
           display: "flex",
           flexDirection: "row",
         }

             const iconListStyle= {
                 listStyleType: "none",
                 margin: "0 0",
                 padding: ".25em 3em",
               }

                  const socialIconStyles= {
                    color: "white",
                    fontSize: "1.5em",
                  }

               const copyrightStyle= {
                 margin: "0 auto",
                 lineHeight: "1em",
               }

    return (
      <div>
      <footer>
      <Paper style={footerStyle} zDepth={2}>
      <ul>
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
