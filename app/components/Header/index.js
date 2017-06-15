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
import ReactTooltip from 'react-tooltip';

const StyledHeader = glamorous.nav ({ 
  color:"#424242",  
  ':hover':{ 
    color: "#00B0FF",
  },
  fontSize: '.75em',
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
      display: 'grid', 
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      width: '100%',    
      backgroundImage: 'url(http://i.imgur.com/MfgeDM1.png', 
      backgroundSize: '100vw 15vh',    
    }

      const navBlock = { 
        gridColumn: '1 / 2', 
        margin: '5vh 1em',
      }

        const navbar = {
          display: 'flex', 
          flexDirection: 'row',
          margin: '0 1em', 
          justifyContent: 'space-around', 
          width: '100%',
          fontSize: '1.15em',
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
            </StyledHeader>
          </Link>             
           <nav style={navbar}> 
             <p> <a data-tip="home"><Link to="/"> 
             🏠 </Link> </a>
             <ReactTooltip place="bottom" type="dark" effect="float"/>
             </p>
             <p><a data-tip="blog"><Link to="/blog">  ✍ </Link></a>
               <ReactTooltip place="bottom" type="dark" effect="float"/>
             </p>
             <p> <a data-tip="about"><Link to="/about">  👩‍💻 </Link></a>
              <ReactTooltip place="bottom" type="dark" effect="float"/></p>
            </nav>                    
          
        </nav>  

        <div> </div>
      </div>
    );
  }
}

export default Header;
