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


class Footer extends React.PureComponent {


  render() {
    const footerContainer= {
      zIndex: "2",
      background: "#FCFAFA",
      postion: "fixed",
      }

    const footerStyle={
      background:"#89B6A5",
      display: "flex",
      flexDirection: "column",
      width: "50%",    
      margin: "0 auto",
    }

         const footerFontStyle={
           fontFamily: "Cabin",
           justifyContent: "space-between",
           color: "#7A3B69",
           margin: "0 0",
         }

         const ulstyleReset={
           paddingLeft: "0px",
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
               color: "#FCFAFA",
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
