/*
 *
 * Blog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
        }

    return (
      <div style={blogStyle}>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <main style={blogMainStyle}>
          <article></article>
          <article></article>
          <article></article>
        </main>


        <Footer><footer></footer></Footer>

      </div>
    );
  }
}
