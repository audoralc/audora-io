/**
*
* SocialHoverAni
*
*/

import React from 'react';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';

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
    color: "#E7F4F5",
    fontSize: "1.25em",
  }

    const aniIcons = {
      color: "#69BAC2",
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
