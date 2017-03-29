/**
*
* PostPreviews
*
*/

import React from 'react';
import PostLinkHoverAni from "components/PostLinkHoverAni";

const post= {
  title: 'Lorem',
  time: 'Feb 2',
  blurb: 'yo',
  slug: '/blog',
};

class PostPreviews extends React.PureComponent {


  render() {
    const blogCardStyle={
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      padding: ".5em 1em",
      width: "100%",
    }

    const nonHeadingFontStyle={
    fontFamily: "Cabin",
    margin: "auto auto",
    fontSize: "1.15em",
  }



    return (
      <div>
      <article style={blogCardStyle}>
        <header>
        <h3>
        <PostLinkHoverAni> </PostLinkHoverAni>
        </h3>
        </header>
        <section>
          <p style={nonHeadingFontStyle}> {post.blurb} </p>
        </section>

        <footer>
          <small>
          <time> {post.time} </time>
        </small>
        </footer>
      </article>

      </div>
    );
  }

}

export default PostPreviews;
