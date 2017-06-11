/**
*
* Skills
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h3 ({ 
  color: "#FAFAFA",
  borderBottom: "2px solid #D1C4E9", 
})

const StyledSection = glamorous.section ({ 
  display: 'flex',
  flexDirection: 'column', 
  color: '#D1C4E9', 
  margin: '1em',
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

class Skills extends React.PureComponent {
  render() {
    const skillsStyle = {
      gridRow: '2 / 2', 
      gridColumn: '4 / 7 span',
      marginTop: '15vh', 
      marginLeft: '5vw',
    }

      const skillsBlock = {
        display: 'flex', 
        flexDirection: 'column',
         padding: '1em', 
          background: "#686868",
      }

        const skills = {
          display: 'flex', 
          flexDirection: 'row',
          margin: '0 1em',          
        }

    return (
      <div style={skillsStyle}>
        
        <Paper zDepth={2} style={skillsBlock}>      

            <h2>Skills</h2> 
            
            <div style={skills}> 
              <StyledSection> 
                <StyledHeader>Front-end</StyledHeader>
              
                <ul> 
                  <li>Javascript - React (JSX), ES6</li>
                  <li>HTML & CSS - Flexbox, CSS Grid & Bootstrap</li>
                  <li>Responsive Design</li>
                  <li>Cross-browser Compatability</li>
                </ul>
              
              </StyledSection>

              <StyledSection> 
                <StyledHeader>Backend</StyledHeader>
                <ul> 
                  <li>PHP - Laravel </li>
                  <li>MySQL</li>
                </ul>
              </StyledSection>

              <StyledSection> 
                <StyledHeader>Dev Tools</StyledHeader>
                <ul>
                  <li>Git & Github</li>
                  <li>RESTful APIS</li>
                  <li>Linux & Nginx</li>
                  <li>Chrome Developer Tools</li>
                  <li>Postman</li>
                  <li>XAMPP</li>
                </ul> 
              </StyledSection>
            </div> 
        </Paper>
      </div>
    );
  }
}

export default Skills;
