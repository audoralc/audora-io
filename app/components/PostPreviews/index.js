/**
*
* PostPreviews
*
*/

import React from 'react';
import {Link} from 'react-router';
import PostLinkHoverAni from "components/PostLinkHoverAni";

const post= {
  title: 'Lorem',
  time: 'Feb 2',
  blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' ,
  slug: '/about',
};

class PostPreviews extends React.PureComponent {


  render() {
    const blogCardStyle={
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      padding: "1em",
      margin: "-.5em 1em",
      textAlign: "justify",
      }

    const nonHeadingFontStyle={
    fontFamily: "Cabin",
    fontSize: "1.15em",
  }



    return (
      <div>
      <article style={blogCardStyle}>


        <PostLinkHoverAni> <header></header> </PostLinkHoverAni>


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
