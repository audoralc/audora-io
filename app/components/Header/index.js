/**
*
* Header
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import {FaHome} from 'react-icons/lib/fa';

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
  constructor(props) {
   super(props);
   this.state = {
     homeHover:false
   }
 }

 enterHover = () => {
   this.setState({
     homeHover:true
   })
   console.log(this.state.homeHover);
 };

 leaveHover = () => {
   this.setState({
     homeHover:false
   })
   console.log(this.state.homeHover);
 };

  showAni = () => {
    const navBarStyle= {
      color: colors.black,
    };

    const homeAni = {
      color:  colors.brightBlue,
      transition: "color .5s",
    }

    if(this.state.homeHover == false)
    {
      return (
        <div onMouseEnter={this.enterHover}>  <Link to="/" style={navBarStyle}><FaHome></FaHome>
        </Link> </div>
      )
    }
    else {
      return(
        <div  onMouseLeave={this.leaveHover}>
           <Link to="/" style={homeAni}><FaHome></FaHome>
          </Link> </div>
      )
    }
  }

  render() {

    const headerStyle = {
      gridRow: '1 / 1', 
      gridColumn: '1 / 6 span', 
      border: "0 solid transparent",
      borderWidth:"100vh",
      position: 'absolute', 
      borderTop: "10vh solid rgba(149,117,205,.6)",    
     
    }
      const titleBlock = { 
       
      }

      const h1Style = { 
        fontSize: '1.5em', 
      }

    return (
      <div style={headerStyle}> 
        <header style={titleBlock}>            
              <h1 style={h1Style}> Audora Chalker </h1>
              <nav>
                {this.showAni()}
              </nav>              
        </header>
      </div>
    );
  }
}

export default Header;
