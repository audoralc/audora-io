/**
*
* Header
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class Header extends React.PureComponent {
  render() {


   const iconButtonStyle= {
     display: "initial",
   }

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
          margin: "0",
          padding: "2em 2em 0 2em",
          maxWidth: "30vw",
          borderRadius: " 0 0 50% 50%",
          background: "#E7F4F5",

          }

        const headerOneStyle={
          fontSize: "1.5em",
          color: "#5D64A8",
          padding: "1vw 1vw 0 1vw",
          lineHeight: "1",
        }

        const linkTextStyle={
        textDecoration: "none",
        color: "#E7F4F5",
        }

    return (
      <div>
      <Helmet title="a.chalker " meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div style={headerShapeStyle}>
        </div>
        <header style={headerStyle}>
          <div style={headerTextBlockStyle}>
            <h1 style={headerOneStyle}> Audora Chalker </h1>
            <nav>

                <IconButton href="/" style={iconButtonStyle}>
                   <ActionHome>
               Home
                    </ActionHome>
                  </IconButton>

            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
