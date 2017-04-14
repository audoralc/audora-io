/**
*
* PostLinkHoverAni
*
*/

import React from 'react';
import {Link} from 'react-router';

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  lightPurple: "#D1C4E9",
  accentPurple: "#9575CD",
  deepPurple: "#673AB7",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#43A047",
}

class LinkHoverAni extends React.PureComponent {
  constructor(props) {
    super(props)
      super(props);
      this.state = {
        titleHover:false
      }
    }

      enterHover = () => {
        this.setState({
          titleHover:true
        })
        console.log(this.state.titleHover);
      };

      leaveHover = () => {
        this.setState({
          titleHover:false
        })
        console.log(this.state.titleHover);
      };

      showAni = () => {

        const linkTextStyle={
        textDecoration: "none",
        zIndex: "2",
        color: colors.deepPurple, 
      };

        const titleAni={
          textDecoration: "none",
          zIndex: "2",
          color: colors.black,
        };

        if(this.state.titleHover == true)
        {
          return(
          <div style={titleAni} onMouseLeave={this.leaveHover}>{this.props.children} </div>)
        }
        else {
          return(<div style={linkTextStyle} onMouseEnter={this.enterHover}>{this.props.children} </div>
          )
        }
    }

  render() {

    return (
      <div>
      {this.showAni()}
      </div>
    );
  }
}

export default LinkHoverAni;
