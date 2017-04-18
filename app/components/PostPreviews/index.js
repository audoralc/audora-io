/**
*
* PostPreviews
*
*/

import React from 'react';
import {Link} from 'react-router';
import PostLinkHoverAni from 'components/PostLinkHoverAni';



const post= {
  title: 'Lorem',
  time: 'Feb 2',
  blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' ,
  body: '',
  img: '',
  slug: '/about',
};

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
class PostPreviews extends React.PureComponent {


  render() {
    const blogCardStyle={
      display: "flex",
      flexDirection: "column",
      alignContent: "space-around",
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


        <PostLinkHoverAni> </PostLinkHoverAni>


        <section>
          <p style={nonHeadingFontStyle}> {post.blurb} </p>
        </section>

        <footer>
          <small>
          <time> {post.time} </time>
        </small>
        </footer>
      </article>
        {this.props.children}
      </div>
    );
  }

}

export default PostPreviews;
