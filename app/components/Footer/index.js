/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import SocialHoverAni from 'components/SocialHoverAni';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  lightPurple: "#D1C4E9",
  accentPurple: "#9575CD",
  deepPurple: "#673AB7",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#43A047",
}

class Footer extends React.PureComponent {


  render() {
    const footerContainer= {
      zIndex: "2",
      postion: "fixed",
      }

    const footerStyle={
      display: "flex",
      flexDirection: "column",
      width: "50%",
      margin: "0 auto",
       background: colors.lightGreen,
    }

         const footerFontStyle={
           justifyContent: "space-between",
           color: colors.accentPurple,
           margin: "0 0",
         }

         const ulstyleReset={
           paddingLeft: "0px",
           zIndex: "3",
         }

         const iconBlockStyle={
           display: "flex",
           flexDirection: "row",
           justifyContent: "space-around",
         }

             const iconListStyle= {
                 listStyleType: "none",
               }

               const copyrightStyle= {
                 margin: "0 auto",
                 lineHeight: "1em",
               }

               const linkTextStyle={
               zIndex: "3",
             }

    return (
      <div style={footerContainer}>
      <footer>
      <Paper style={footerStyle} zDepth={2}>
      <ul style={ulstyleReset}>
        <div style={iconListStyle}>
        <div style={iconBlockStyle}>
            <a href="mailto:scribeklio@gmail.com">
            <SocialHoverAni> <FaEnvelope></FaEnvelope></SocialHoverAni></a>
            <a href="https://github.com/scribeklio"> <SocialHoverAni><FaGithub></FaGithub></SocialHoverAni></a>
            <a href="https://www.linkedin.com/in/achalker24"> <SocialHoverAni><FaLinkedin></FaLinkedin></SocialHoverAni></a>
            <a href="https://twitter.com/klioonthemoon"> <SocialHoverAni><FaTwitter></FaTwitter></SocialHoverAni></a>
        </div>
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
