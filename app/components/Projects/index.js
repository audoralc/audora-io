/**
*
* Projects
*
*/

import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h2 ({
  color: "#673AB7", 
  textAlign: "center",
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


class Projects extends React.PureComponent {
  render() {

    const projectBlock = { 
        gridRow: '4 / 4', 
        gridColumn: '2 / 5 span', 
        
      }

      const theStuff ={         
        background: colors.lightGreen,
        padding: "1em", 
        
      }

        const cardBlock ={ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-around',
        }

    return (
      <div style={projectBlock}>
        <Paper zDepth={2} style={theStuff}> 
          <StyledHeader> 💻 My Work </StyledHeader>

          <section style={cardBlock}>
              <div> </div>
              <div> </div>
              <div> </div>

          </section>
        </Paper>
      </div>
    );
  }
}

export default Projects;
