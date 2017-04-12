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
      display: "flex",
      justifyContent: "center",
      color: "#000",
      margin: "1em 0",
    };

    const homeAni = {
      display: "flex",
      justifyContent: "center",
      color: "#266DD3",
      margin: "1em 0",
      transition: "color .5s",
    }

    if(this.state.homeHover == false)
    {
      return (
        <div style={navBarStyle} onMouseEnter={this.enterHover}> <FaHome> <Link to="/">
         </Link></FaHome> </div>
      )
    }
    else {
      return(
        <div style={homeAni} onMouseLeave={this.leaveHover}>
          <FaHome> <Link to="/" >
          </Link></FaHome> </div>
      )
    }
  }

  render() {

    const headerStyle={
      fontSize: "1em",
      display: "flex",
      flexDirection: "column",
    }

        const headerShapeStyle= {
          border: "0 solid transparent",
          borderWidth:"100vh",
          borderTop: "15vh solid #828CEC",
          position: "fixed",
          zIndex: "1",
          maxHeight: "1vh",
          position: "absolute",
        }

        const headerTextBlockStyle= {
          position: "fixed",
          margin: "auto auto",
          padding: "1em 0 2em 1em",
          maxWidth: "28vw",
          zIndex: "2",
          }

          const navBarStyle= {
            display: "flex",
            justifyContent: "center",
            color: "#000",
            margin: "1em 0",
            };

            const headerOneStyle={
              fontSize: "2vw",
              color: "#89B6A5",
              padding: "1vw 1vw 0 1vw",
              lineHeight: "1",
            }

            const linkTextStyle={
            textDecoration: "none",
            color: "#E7F4F5",
            }

    return (
      <div className="header">
      <Helmet title="a.chalker " meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div style={headerShapeStyle}>
        </div>
        <header style={headerStyle}>
            <div style={headerTextBlockStyle}>
              <h1 style={headerOneStyle}> Audora Chalker </h1>
              <nav>
                {this.showAni()}
              </nav>
              </div>

        </header>
      </div>
    );
  }
}

export default Header;
