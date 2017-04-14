/*
 *
 * Blog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Responsive from 'react-responsive';
import PostPreviews from 'components/PostPreviews';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Footer from 'components/Footer';

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
  darkGreen: "#43A047",
}


export default class Blog extends React.PureComponent {


  render() {
      const blogStyle={
        fontFamily: "Raleway",
        display: "flex",
        flexDirection:"column",
        overflow: "hidden",
      }

        const blogMainStyle={
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: "20vh auto 10vh 0",
          justifyContent: "space-between",
          zIndex: "2",
        }

          const articleBlockStyle={
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }

            const articleStyle={
              background: colors.lightPurple,
              maxWidth: "72vw",

              }

            const imgStyle={
              margin: "0 2vw",
              width: "28vw",
            }

    return (

<Responsive minDeviceWidth={1024}>
  <div style={blogStyle}>
    <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

    <Header></Header>

    <main style={blogMainStyle}>


      <div style={articleBlockStyle}>
      <img src="http://placehold.it/100x100" style={imgStyle}/>
          <Paper zDepth={2}>
            <article style={articleStyle}>
              <PostPreviews> </PostPreviews>
            </article>
          </Paper>
      </div>

      <div style={articleBlockStyle}>
        <img src="http://placehold.it/100x100" style={imgStyle} />
          <Paper zDepth={2}>
            <article style={articleStyle}>
              <PostPreviews></PostPreviews>
            </article>
          </Paper>
      </div>


      <div style={articleBlockStyle}>
        <img src="http://placehold.it/100x100" style={imgStyle}/>
          <Paper zDepth={2}>
            <article style={articleStyle}>
              <PostPreviews></PostPreviews>
            </article>
          </Paper>
      </div>
    </main>
/*
  FUTURE PAGINATION
*/
    <Footer>
      <footer></footer>
    </Footer>

  </div>
</Responsive>
    );
  }
}
