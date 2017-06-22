/**
*
* Skills
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h3 ({ 
  color: "#B3E5FC",
  textAlign: 'center',
  margin: '0', 
  fontWeight: '700',
})

const StyledSection = glamorous.section ({ 
  display: 'flex',
  flexDirection: 'column',
  color: "#FAFAFA",
  fontWeight: '600', 
  width: "40%",
})

const StyledUL = glamorous.ul({ 
  listStyle: "none",
  padding: '0',
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
      gridRow: '4 / 4', 
      gridColumn: '2 / 7 span',       
      marginLeft: '5vw',
    }

      const skillsBlock = {
        display: 'flex', 
        flexDirection: 'column',
        minWidth: '350px',
        padding: '.5em', 
        background: "#909090",        
      }

      const skillGrouping = {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '85%',
        
      }

    return (
      <div style={skillsStyle}>
        
        <Paper zDepth={2} style={skillsBlock}>      

            <h2>🎒 Skills</h2> 
            
            <div style={skillGrouping}> 
              <StyledSection> 
                <StyledHeader>Front-end</StyledHeader>
              
                <StyledUL> 
                  <li>Javascript - React (JSX), ES6</li>
                  <li>HTML & CSS - Flexbox, CSS Grid & Bootstrap</li>
                  <li>Responsive Design</li>
                  <li>Cross-browser Compatability</li>
                </StyledUL>
              
              </StyledSection> 

              <StyledSection> 
                <StyledHeader>Backend</StyledHeader>
                <StyledUL> 
                  <li>PHP - Laravel </li>
                  <li>MySQL</li>
                </StyledUL>
              </StyledSection>
              </div> 

              <div style={skillGrouping}>
              <StyledSection> 
                <StyledHeader>Dev Tools</StyledHeader>
                <StyledUL>
                  <li>Git & Github</li>
                  <li>RESTful APIS</li>
                  <li>Linux & Nginx</li>
                  <li>Chrome Developer Tools</li>
                  <li>Postman</li>
                  <li>XAMPP</li>
                </StyledUL> 
              </StyledSection>

              <StyledSection>
                <StyledHeader>Learning</StyledHeader> 
                <StyledUL> 
                  <li> Javascript - always</li>
                  <li> Agile Development </li>
                  <li> UX/UI Principles </li>                    
                  <li>Test Driven Development </li> 
                  <li> More PHP </li>
                  <li> More MySQL</li>
                </StyledUL>
              </StyledSection> 
            </div> 
        </Paper>
      </div>
    );
  }
}

export default Skills;
