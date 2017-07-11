/**
*
* Skills
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h3 ({ 
  color: "#673AB7",
  textAlign: 'center',
  margin: '0', 
  fontWeight: '700',
})

const StyledSection = glamorous.section ({ 
  color: "#424242",
  fontWeight: '600',
  maxWidth: '200px' 
})

const StyledUL = glamorous.ul({ 
  listStyle: "none",
  padding: '1em',
  fontSize: '.85em',
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
      gridColumn: '1 / 4 span',
           
    }

      const skillsBlock = {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around', 
        flexWrap: 'wrap',
        minWidth: '350px',
        padding: '.75em', 
        background: "rgba(66,66,66, .25)",               
      }

      const skillLists = { 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
      }
  
    return (
      <div style={skillsStyle}>
        
        <div style={skillsBlock}>      
        
            <h2>🎒 Skills</h2> 
       
            <div style={skillLists}> 
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
                  <li> Node & Express </li>
                  <li> Agile Development </li>
                  <li> UX/UI Principles </li>                    
                  <li>Test Driven Development </li> 
                  <li> More PHP </li>
                  <li> More MySQL</li>
                </StyledUL>
              </StyledSection> 
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
