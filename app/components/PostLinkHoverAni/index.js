/**
*
* LinkHoverAni
*
*/

import React from 'react';
import {Link} from 'react-router';

const post= {
  title: 'Lorem',
  date: 'Feb 2',
  blurb: 'yo',
  slug: '/blog',
};

class LinkHoverAni extends React.PureComponent {
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

    return (
      <div>
      {this.showAni()}
      </div>
    );
  }
}

export default LinkHoverAni;
