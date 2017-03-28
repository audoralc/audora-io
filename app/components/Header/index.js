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
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {FaHome} from 'react-icons/lib/fa';

class Header extends React.PureComponent {
  constructor(props) {
   super(props);
   this.state = {
     infoHover:false
   }
 }

 enterHover = () => {
   this.setState({
     infoHover:true
   })
   console.log(this.state.infoHover);
 };

 leaveHover = () => {
   this.setState({
     infoHover:false
   })
   console.log(this.state.infoHover);
 };

  showAni = () => {
    const navBarStyle= {
      display: "flex",
      justifyContent: "center",
      color: "#000",
      marginBottom: "1em",
    };

    const aniBox = {
      display: "flex",
      justifyContent: "center",
      color: "#828CEC",
      marginBottom: "1em",
      transition: "color .5s",
    }
    if(this.state.infoHover == true)
    {
      return (
        <div style={aniBox}  onMouseOver={this.enterHover}><FaHome> <Link to="/">
         Home
         </Link></FaHome> </div>
      )
    }
    else {
      return(
        <div style={navBarStyle} onMouseLeave={this.leaveHover}>
          <FaHome> <Link to="/">
         Home
          </Link></FaHome> </div>
      )
    }
  }
  render() {

    const headerStyle={
      fontSize: "1em",
      display: "flex",
      flexDirection: "column",
      zIndex: "2",
    }
        const headerShapeStyle= {
          border: "0 solid transparent",
          borderWidth:"100vh",
          borderTop: "15vh solid #828CEC",
          position: "fixed",
          zIndex: "4",
        }

        const headerTextBlockStyle= {
          position: "fixed",
          margin: "auto auto",
          padding: "2em 2em 0 2em",
          maxWidth: "28vw",
          borderRadius: "0 0 50% 50%",
          background: "#E7F4F5",
          }

          const navBarStyle= {
            display: "flex",
            justifyContent: "center",
            color: "#000",
            marginBottom: "1em",
          };

            const headerOneStyle={
              fontSize: "2.5vw",
              color: "#5D64A8",
              padding: "1vw 1vw 0 1vw",
              lineHeight: "1",
            }

            const linkTextStyle={
            textDecoration: "none",
            color: "#E7F4F5",
            width: "1vw",
            height: "1vw",
            }

    return (
      <div className="header">
      <Helmet title="a.chalker " meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div style={headerShapeStyle}>
        </div>
        <header style={headerStyle}>
          <Paper style={headerTextBlockStyle} zDepth={2}>
            <div>
              <h1 style={headerOneStyle}> Audora Chalker </h1>
              <nav>
                {this.showAni()}
              </nav>
              </div>
            </Paper>
        </header>
      </div>
    );
  }
}

export default Header;
