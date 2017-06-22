/**
*
* ForHire
*
*/

import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 


class ForHire extends React.PureComponent {
  render() {

    const forHire = {
      gridRow: '3 / 3', 
      gridColumn: '1 / 5',
    }

      const hireContent = {
        background: '#673AB7', 
        textAlign: 'center', 
        color: '0', 
        
        padding: '1em',
      }

      const headerStyle = {
        color: '#FAFAFA', 
      }

      const textStyle = {
        color: '#C8E6C9',
        fontSize: '1.25em', 
      }

      const linkStyle = {
        fontSize: '1.25em', 
        color: '#FAFAFA', 
      }

    return (
      <div style={forHire}>
     

      
      <Paper zDepth={2}> 
        <div style={hireContent}> 
        <p> 🚨🌟🚨</p>
        <h2 style={headerStyle}> For Hire</h2>
        <p style={textStyle}> I'm currently looking for a team that needs an entry-level front-end or fullstack developer. Ideally I would do a lot of Javascript work & y'all have a UI developer I could gleam some design knowledge from. 😉</p>
        <Link href="http://audora.me/storage/chalker-resume.pdf" style={linkStyle}> 🔥 Resume 🔥 </Link>
        </div>
      </Paper>
  

      </div>
    );
  }
}

export default ForHire;
