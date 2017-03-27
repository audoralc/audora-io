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
  render() {
    const footerStyle={
      background:"#8DE0CA",
      display: "flex",
      flexDirection: "column",
      bottom: "0",
      width: "50%",
      height: "5em",
      padding: ".5em",
      margin: "0 auto",
     }

         const footerFontStyle={
           fontFamily: "Cabin",
           justifyContent: "space-between",
           margin: "1em",
           color: "#669daf",

         }
         const iconListStyle= {
             display: 'flex',
             flexDirection: "row",
             listStyleType: "none",
             justifyContent: "space-around",
             margin: "0 0",
             padding: ".25em 3em",
             color: "#E7F4F5",
           }

                const socialIconStyles= {
                  color: "white",
                  fontSize: "1.5em",
                }

           const copyrightStyle= {
             margin: "1.5em auto",
             lineHeight: "2em",
           }

           const linkTextStyle={
           textDecoration: "none",
           color: "#E7F4F5",
           }
    return (
      <div>
      <footer>
      <Paper style={footerStyle} zDepth={2}>
        <ul style={iconListStyle}>
        <li> <a style={socialIconStyles} href="mailto:scribeklio@gmail.com"><FaEnvelope></FaEnvelope></a></li>
        <li> <a style={socialIconStyles} href="https://github.com/scribeklio"><FaGithub></FaGithub></a></li>
        <li> <a style={socialIconStyles} href="https://www.linkedin.com/achalker24"><FaLinkedin></FaLinkedin></a></li>
        <li> <a style={socialIconStyles} href="https://twitter.com/klioonthemoon"><FaTwitter></FaTwitter></a></li>
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
