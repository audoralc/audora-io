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
      gridColumn: '1 / 3',
    }

      const hireContent = {
        background: '#673AB7', 
        textAlign: 'center', 
        color: '0', 
        marginTop: '-10vh',
      }

    return (
      <div style={forHire}>
      <Paper zDepth={2}> 
        <div style={hireContent}> 
        <h2> 🚨🌠🚨 </h2>
        </div>
      </Paper>
      </div>
    );
  }
}

export default ForHire;
