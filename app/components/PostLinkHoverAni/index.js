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
  darkGreen: "#00C853",
}


const post= {
  title: 'Lorem',
  date: 'Feb 2',
  blurb: 'yo',
  slug: '/about',
};

class PostLinkHoverAni extends React.PureComponent {
  constructor(props) {
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
        color: colors.darkGreen,
      };

        const blogTitleAni={
          textDecoration: "none",
          color: colors.deepPurple,
        };

        if(this.state.blogTitleHover == true)
        {
          return(
          <Link to="/blog/post" style={blogTitleAni} onMouseLeave={this.leaveHover}> {post.title} {this.props.children}  </Link>)
        }
        else {
          return(<Link to="/blog/post" style={linkTextStyle} onMouseEnter={this.enterHover}> {post.title} {this.props.children} </Link>
          )
        }
    }

  render() {

    const h3Style={
      zIndex: "2",
      margin: "1em 0 -.5em 0",
      }

    return (


      <h3 style={h3Style}>
      {this.showAni()}
      </h3>


    );
  }
}

export default PostLinkHoverAni;
