/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';
import glamorous from 'glamorous';
import ReactTooltip from 'react-tooltip'; 

const StyledIcon = glamorous.a ({
  fontSize: '1.25em', 
  color:"#424242",  
  ':hover':{ 
    color: "#00B0FF",
  }
})

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  accentPurple: "#9575CD",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#00C853",

}


class Footer extends React.PureComponent {


  render() {
    const footerContainer= {
      gridRow: '6 / 6', 
      gridColumn: '1 / 4 span', 
    }

  
    const footerStyle={
      display: "flex",
      flexDirection: "column",
      background: colors.lightGreen,
      padding: '.5em 1em',
    }

    const footerFontStyle={
      justifyContent: "space-between",
      color: colors.accentPurple,
      margin: "0 0",
    }

    const ulstyleReset={
      paddingLeft: "0px",
    }

    const iconBlockStyle={
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: '50vw',
      margin: '0 auto',
    }

    const iconListStyle= {
      listStyleType: "none",
    }

    const copyrightStyle= {
      textAlign: 'center',
      lineHeight: "1em",
    }

    const linkTextStyle={
   
    }

    return (
      <div style={footerContainer}> 

       
       
        <footer>

          <Paper style={footerStyle} zDepth={2}>

            <ul style={ulstyleReset}>

              <div style={iconListStyle}>

                <div style={iconBlockStyle}>

                  <a data-tip="Email"  href="mailto:scribeklio@gmail.com">
                    <StyledIcon>
                      <FaEnvelope>
                      </FaEnvelope>
                    </StyledIcon>
                  </a>

                  <a data-tip="Github" href="https://github.com/audoralc">
                    <StyledIcon>
                      <FaGithub>
                      </FaGithub>
                    </StyledIcon>
                    
                  </a>

                  <a data-tip="LinkedIn"  href="https://www.linkedin.com/in/achalker24">
                    <StyledIcon>
                      <FaLinkedin>
                      </FaLinkedin>
                    </StyledIcon>
                  </a>

                  <a data-tip="Twitter"  href="https://twitter.com/klioonthemoon">
                    <StyledIcon>
                      <FaTwitter>
                      </FaTwitter>
                    </StyledIcon>
                   
                  </a>

                  
                </div>

              </div>

            </ul>

            <div style={copyrightStyle}>

              <p style={footerFontStyle}> © 2017 audora chalker. made with  ❤️&#xFE0E; + ☕. </p>

            </div>

          </Paper>

        </footer>
      

      </div>
    );
  }
}

export default Footer;
