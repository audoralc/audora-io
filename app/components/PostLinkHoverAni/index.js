/**
*
* PostLinkHoverAni
*
*/

import React from 'react';
import {Link} from 'react-router';

const post= {
  title: 'Lorem',
  date: 'Feb 2',
  blurb: 'yo',
  slug: '/about',
};

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
        zIndex: "9",
      };

        const blogTitleAni={
          textDecoration: "none",
          color: "#000",
          zIndex: "9",
        };

        if(this.state.blogTitleHover == true)
        {
          return(
          <Link to={post.slug} style={blogTitleAni} onMouseLeave={this.leaveHover}> {post.title}  </Link>)
        }
        else {
          return(<Link to={post.slug} style={linkTextStyle} onMouseEnter={this.enterHover}> {post.title} </Link>
          )
        }
    }

  render() {

    const h3Style={
      margin: ".5em 1em 0 0",
      zIndex: "10",
    }

    return (


      <h3 style={h3Style}>
      {this.showAni()}
      </h3>


    );
  }
}

export default PostLinkHoverAni;
