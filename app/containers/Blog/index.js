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
  slug: '/about',
};

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
          margin: "20vh auto 10vh 28vh",
          justifyContent: "space-between",
        }

          const articleStyle={
            height: "auto",
            width: "70vw",
            background: "#D6E3F8",
            }

    return (

    <Responsive minDeviceWidth={1024}>
      <div style={blogStyle}>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <main style={blogMainStyle}>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews> </PostPreviews></article></Paper>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews></PostPreviews></article></Paper>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews></PostPreviews></article></Paper>
        </main>


        <Footer><footer></footer></Footer>

      </div>
    </Responsive>
    );
  }
}
