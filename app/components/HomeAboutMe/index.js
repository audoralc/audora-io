/**
*
* HomeAboutMe
*
*/

import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h2 ({
  color: "#673AB7", 
})

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  lightPurple: "#D1C4E9",
  accentPurple: "#9575CD",
  deepPurple: "#673AB7",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
lightGreen: "#C8E6C9",
darkGreen: "#00C853",
}

class HomeAboutMe extends React.PureComponent {
  render() {

      const aboutBlock = { 
        gridRow: '2 / 2', 
        gridColumn: '1 / 5 span',
            
      }   
        const aboutTextBlockStyle= {
               padding: "1em",
               background: colors.lightPurple,
               lineHeight: '24px'
              }
              
      const intro = { 
        color: colors.deepPurple, 
        fontSize: '1.5em',
      }
            

    return (
      <div style={aboutBlock}>
        <Paper  zDepth={2} style={aboutTextBlockStyle}>                 
          <section>              
            
              <StyledHeader> ✨ Hi! ✨ </StyledHeader>           
             
              <p style={intro}> I'm Audora, a Helper & Maker of Things. </p> 
              
              <p> Also a bootcamp grad & wannabe UI developer. Currently I work with Javascript (mainly React <img src="http://i.imgur.com/DTGywL1.png" height='24px' width='24px' />
                
                 &nbsp;) & the LEMP stack, but eyeing MERN & MEAN.  </p>
              <Link to="/about"> </Link>
          </section>            
        </Paper>
      </div>
    );
  }
}
export default HomeAboutMe;