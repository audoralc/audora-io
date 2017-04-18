/**
*
* SocialHoverAni
*
*/

import React from 'react';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  accentPurple: "#9575CD",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
lightGreen: "#C8E6C9",
darkGreen: "#00C853",

}

class SocialHoverAni extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      socialHover:false
    }
  }

  enterHover = () => {
    this.setState({
      socialHover:true
    })
    console.log(this.state.socialHover);
  };

  leaveHover = () => {
    this.setState ({
      socialHover:false
    })
    console.log(this.state.socialHover);
  };

  showAni = () => {

    const linkTextStyle={
    textDecoration: "none",
    color: colors.black,
    fontSize: "1.25em",
  }

    const aniIcons = {
      color: colors.brightBlue,
      fontSize: "1.25em",
    }

    if(this.state.socialHover == true)
    {
      return (
        <li onMouseLeave={this.leaveHover} style={aniIcons}> {this.props.children}  </li>
      )
    }

    else {
      return(
        <li onMouseEnter={this.enterHover} style={linkTextStyle}> {this.props.children}  </li>
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

export default SocialHoverAni;
