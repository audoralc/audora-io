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

export default class About extends React.PureComponent {
  render() {
    const divStyle={
        background: "#FASFAFA",
        fontFamily: "Raleway",
        overflow: "hidden",
        }

          const aboutMain= {
            background: colors.lightPurple,
            maxWidth: "75vw",
            margin: "20vh auto 10vh 25vh",
            padding: "1.5em",
            zIndex: "2",
            }

              const headingBlock={
                margin: "1.5em",
                color: colors.darkGreen,
                fontSize: "1.5em",
              }

              const textBlock= {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                margin: "1.5em 1.5em 1.5em 30%",
              }

                  const pFont={
                    fontFamily: "Cabin",
                    fontSize: "1.15em",
                    margin: ".25em 0",
                  }

                  const footerReset={
                    position: "fixed",
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
                    <img src="http://placehold.it/200x200" />
                  </div>

                  <div style={textBlock}>
                                    
                    <p style={pFont}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p style={pFont}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p style={pFont}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
              </main>
            </Paper>

        <Footer style={footerReset}></Footer>

      </div>
    );
  }
}
