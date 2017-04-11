/**
*
* PostLinkHoverAni
*
*/

import React from 'react';
import {Link} from 'react-router';

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
        color: "#E7F4F5",
        zIndex: "2",
      };

        const blogTitleAni={
          textDecoration: "none",
          color: "#000",
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
