/**
*
* Header
*
*/

import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import {FaHome} from 'react-icons/lib/fa';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.nav ({ 
  color:"#424242",  
  ':hover':{ 
    color: "#00B0FF",
  },
  fontSize: '.8em',
  width: '60%',
  margin: '1.5em 1em',
})

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  accentPurple: "#9575CD",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#00C853",

}

class Header extends React.PureComponent {
  render() {

    const headerStyle = {
      gridRow: '1 / 1', 
      gridColumn: '1 / 7 span',
      textDecoration: 'none', 
      textAlign: 'center',
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr',         
    }

      const navBlock = { 
        gridColumn: '1 / 2', 
      }

        const h1Style = { 
          margin: '0',
        }

    return (
      <div style={headerStyle}>
        <nav style={navBlock}>
          <Link to="/">
          <StyledHeader>            
            <h1 style={h1Style}> Audora Chalker </h1>             
            <FaHome></FaHome>                          
          </StyledHeader>
          </Link>
        </nav>  

        <div> </div>
      </div>
    );
  }
}

export default Header;
