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

class Header extends React.PureComponent {
/*  constructor(props) {
    super (props);
    this.state = {onMouseEnter: true};
    this.
  }

  handleMouseEnter() {
  }



  TitleLinkEvent() {

  }

  HomeIconEvent () {

  }
*/



  render() {
    
    const headerStyle={
      fontSize: "1em",
      display: "flex",
      flexDirection: "column",
      zIndex: "2",
    }
        const headerShapeStyle= {
          width: "0",
          height:"0",
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

          const navBarStyle={
            display: "flex",
            justifyContent: "center",
          }


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
      <div class="header">
      <Helmet title="a.chalker " meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div style={headerShapeStyle}>
        </div>
        <header style={headerStyle}>
          <Paper style={headerTextBlockStyle} zDepth={2}>
            <div>
              <h1 style={headerOneStyle}> Audora Chalker </h1>
              <nav style={navBarStyle}>
                  <IconButton href="/">
                     <ActionHome>
                 Home
                      </ActionHome>
                    </IconButton>
                </nav>
              </div>
            </Paper>
        </header>
      </div>
    );
  }
}

export default Header;
