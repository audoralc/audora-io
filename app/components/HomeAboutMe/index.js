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
        gridColumn: '1 / 3 span',
        marginTop: '5vh',      
      }   
        const aboutTextBlockStyle= {
               padding: "1em",
               background: colors.lightPurple,
               }

            

    return (
      <div style={aboutBlock}>
        <Paper  zDepth={2} style={aboutTextBlockStyle}>                 
          <section>              
            
              <StyledHeader> Hi! </StyledHeader>           
             
              <p> I'm Audora and I love making sites & apps for the web. Also a bootcamp grad & wannabe UI developer. Currently I work with Javascript (mainly React) & the LEMP stack, but eyeing MERN & MEAN.  </p>

              <Link to="/about"> </Link>
          </section>            
        </Paper>
      </div>
    );
  }
}

export default HomeAboutMe;
