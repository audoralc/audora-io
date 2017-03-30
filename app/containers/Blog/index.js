/*
 *
 * Blog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import PostPreviews from 'components/PostPreviews';
import Paper from 'material-ui/Paper';
import Footer from 'components/Footer';

export default class Blog extends React.PureComponent {
  render() {
      const blogStyle={
        fontFamily: "Raleway",
        display: "flex",
        flexDirection:"column",
        overflow: "hidden",
        background:"#E7F4F5",
      }

        const blogMainStyle={
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: "20vh auto 10vh auto",
          justifyContent: "space-between",
        }

          const articleStyle={
            height: "auto",
            width: "70vw",
            background: "#80C5DB",
            }

    return (
      <div style={blogStyle}>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <main style={blogMainStyle}>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews></PostPreviews></article></Paper>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews></PostPreviews></article></Paper>
          <Paper zDepth={2}><article style={articleStyle}><PostPreviews></PostPreviews></article></Paper>
        </main>


        <Footer><footer></footer></Footer>

      </div>
    );
  }
}
