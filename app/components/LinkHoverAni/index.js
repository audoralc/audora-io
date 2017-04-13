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

class PostLinkHoverAni extends React.PureComponent {
  constructor(props) {
    super(props)
      super(props);
      this.state = {
        blogTitleHover:false
      }
    }

      enterHover = () => {
        this.setState({
          blogTitleHover:true
        })
        console.log(this.state.blogTitleHover);
      };

      leaveHover = () => {
        this.setState({
          blogTitleHover:false
        })
        console.log(this.state.blogTitleHover);
      };

      showAni = () => {

        const linkTextStyle={
        textDecoration: "none",
        color: colors.white,
        zIndex: "2",
      };

        const blogTitleAni={
          textDecoration: "none",
          color: colors.black,
          zIndex: "2",
        };

        if(this.state.blogTitleHover == true)
        {
          return(
          <Link to="/blog" style={blogTitleAni} onMouseLeave={this.leaveHover}>Lorem 1 </Link>)
        }
        else {
          return(<Link to="/blog" style={linkTextStyle} onMouseEnter={this.enterHover}>Lorem 1 </Link>
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
