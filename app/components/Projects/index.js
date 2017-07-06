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
import ReactTooltip from 'react-tooltip'; 

const StyledHeader = glamorous.h2 ({
  color: "#673AB7", 
  textAlign: 'center',
  padding: '0 1em',
})

const StyledProjectHeader = glamorous.h3 ({ 
  color: "#424242", 
  textAlign: 'center',
})

const StyledLink = glamorous.a ({ 
  color: '#0091EA',
  marginBottom: '1em', 
  fontWeight: '600',
  lineHeight: '1.5em',
})

const Card = glamorous.div ({ 
  backgroundImage: 'url(http://i.imgur.com/jxZe93K.png)',
  backgroundPosition: 'cover',
  margin: '2vw 0', 
  minWidth: '350px', 
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
        gridRow: '5 / 5', 
        gridColumn: '1 / 4 span',        
      }

    
        const headerBlock ={
         margin: '0 auto',
        }
          const specialProject = {
            width: '300px',
            textAlign: 'center',
            margin: '1.5em auto', 
            backgroundImage: 'url(http://i.imgur.com/o1nYwKa.png)', 
            backgroundPosition: 'cover',         
          }


        const cardBlock ={ 
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around', 

         
        }
          const cardHeader = {

          }

          const linkBlock = { 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap', 
            justifyContent: 'space-around',
          }   

          const picStyle = {
            margin: '0 auto',
          }             

    return (
      <div style={projectBlock}>
        
          
          <div style={headerBlock}> 
             <StyledHeader> 💻 My Work </StyledHeader> 
            
            <div style={specialProject}> 
              <h3>This Site</h3>  
              <a href="/this-site">🌠Case Study & To Do 🌠 </a> 
            </div>  
          </div>  

          <section style={cardBlock}> 
                    
              <Card>
               <div style={cardHeader}>  
               <StyledProjectHeader>   <StyledLink href="http://sumorobotleague.com">sumorobotleague.com </StyledLink>Redesign </StyledProjectHeader> 
               </div> 

               <div style={linkBlock}> 
                 <StyledLink href="https://github.com/audoralc/sumorobot-store-clientside">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/sumo-redo"> 🌠Case Study </StyledLink>
               </div> 

               <div style={picStyle}>
               <Link href="/sumo-redo">
                <Paper zDepth={3} style={{width:'300px'}}> 
                  <img src="http://audora.me/img/srl-home.png" height="400px" width="300px" />
                </Paper>
               </Link>
               </div>

              </Card>   

              <Card> 
               <StyledProjectHeader> pyxis </StyledProjectHeader> 
               <div style={linkBlock}> 
                 <StyledLink href="https://github.com/audoralc/pyxis">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/pyxis" data-tip="Desktop Only Please"> 👀Front Page Demo </StyledLink>
                 <StyledLink href="/pyxis-study"> 🌠Case Study </StyledLink>                
               </div>
               <Link href="/pyxis"> 
                  <Paper zDepth={3} style={{width:'300px'}}> 
                    <img src="http://audora.me/img/cropped-pyxis.png"  height="400px" width="300px"/>
                  </Paper>
                </Link>
              </Card>       
</section>

<section style={cardBlock}> 
               <Card> 
              
               <StyledProjectHeader> semper-disco (📐In Progress)</StyledProjectHeader>
                
            
               
               <div style={linkBlock}> 
                 
                 <StyledLink href="https://github.com/audoralc/semper-disco">  Github <FaCode></FaCode> </StyledLink>
                 <StyledLink href="/semper-study"> 🌠Design Plan </StyledLink>                
               </div> 
               <Link href="/semper-study">
                <Paper zDepth={3} style={{width:'300px'}}> 
                  <img src="http://audora.me/img/semper-one.jpg" height="400px" width="300px" />
                </Paper>
               </Link>   
              </Card> 
           </section>   
          
       
      </div>
    );
  }
}

export default Projects;
