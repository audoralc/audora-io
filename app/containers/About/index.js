/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from 'material-ui/Paper';


export default class About extends React.PureComponent {
  render() {
    const divStyle={
        background: "#80C5DB",
        fontFamily: "Raleway",
        display: "flex",
        flexDirection:"column",
      }
          const aboutMain= {
            background: "#828CEC",
            maxWidth: "80vw",
            margin: "30vh auto 10vh auto",
            padding: "1.5em",
          }

              const headingBlock={
                

              }
    return (
      <div style={divStyle}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <Header></Header>

        <Paper style={aboutMain} zDepth={2}>
        <main>
          <section>
            <div style={headingBlock}>
              <h2>about</h2>
              <img src="http://placehold.it/200x100" />
            </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </section>
        </main>
        </Paper>

        <Footer><footer></footer></Footer>
      </div>
    );
  }
}
