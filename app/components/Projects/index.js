/**
*
* Projects
*
*/

import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 
import { FaCode } from 'react-icons/lib/fa'; 

const StyledHeader = glamorous.h2 ({
  color: "#673AB7", 
})

const StyledProjectHeader = glamorous.h3 ({ 
  color: "#424242", 
  textAlign: 'center',
  marginTop: '15%', 
})

const StyledLink = glamorous.a ({ 
  color: '#0091EA',
  marginBottom: '1em', 
  fontWeight: '600',
  lineHeight: '1.5em',
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
        const headerBlock ={
          display: 'flex',
          flexDirection: 'row', 
          justifyContent: 'space-around',
        }
          const specialProject = {
            textAlign: 'center',
            border: '2px solid #673AB7',
            padding: '0 .5em .5em .5em',
          }
        const cardBlock ={ 
           display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignContent: 'stretch', 
        }
      
      const linkBlock = { 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
      }

      const statusStyle = {
        textAlign: 'center',
      }

    return (
      <div style={projectBlock}>
        <Paper zDepth={2} style={theStuff}> 
          
          <div style={headerBlock}> 
            <StyledHeader> 💻 My Work </StyledHeader>
            <div style={specialProject}> 
              <h3>This Site</h3>  
              <a href="/this-site">🌠Case Study & To Do 🌠 </a> 
            </div>  
          </div>  

          <section style={cardBlock}> 
                    
              <div> 
               <StyledProjectHeader>   <StyledLink href="http://sumorobotleague.com">sumorobotleague.com </StyledLink>Redesign </StyledProjectHeader> 
               <div style={linkBlock}> 
                 <StyledLink href="https://github.com/audoralc/sumorobot-store-clientside">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/sumo-redo"> 🌠Case Study </StyledLink>
               </div> 

               <Link href="/sumo-redo">
                <Paper zDepth={3}> 
                  <img src="http://i.imgur.com/ILUXgj0.png" height="500px" width="350px" />
                </Paper>
               </Link>
              </div>   

              <div> 
               <StyledProjectHeader> pyxis </StyledProjectHeader> 
               <div style={linkBlock}> 
                 <StyledLink href="https://github.com/audoralc/pyxis">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/pyxis"> 👀Front Page Demo </StyledLink>
                 <StyledLink href="/pyxis-study"> 🌠Case Study </StyledLink>                
               </div>
               <Link href="/pyxis"> 
                  <Paper zDepth={3}> 
                    <img src="" height="500px" width="350px" />
                  </Paper>
                </Link>
              </div>       

               <div> 
               <StyledProjectHeader> semper-disco </StyledProjectHeader> 
               <p style={statusStyle}>📐In Progress</p>  
               <div style={linkBlock}> 
                 <StyledLink href="https://github.com/audoralc/semper-disco">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/semper-study"> 🌠Design Plan </StyledLink>                
               </div> 
               <Link href="/semper-study">
                <Paper zDepth={3}> 
                  <img src="http://i.imgur.com/W3MgJCp.jpg" height="500px" width="350px" />
                </Paper>
               </Link>   
              </div> 

          </section>
        </Paper>
      </div>
    );
  }
}

export default Projects;
