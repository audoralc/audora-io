/*
*
* About
*
*/

/* 
TODO 
create vars/etc so that text will only have to be in one place 
*/ 

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from 'material-ui/Paper';
import Responsive from 'react-responsive';

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

export default class About extends React.PureComponent {
  render() {
    const divStyle={
      background: colors.white,
      height: "100%",
    }

    const aboutMain= {
      background: colors.lightPurple,
      maxWidth: "75vw",
      margin: "20vh auto 15vh 20vw",
      padding: "1.5em",
      zIndex: "2",
    }

    const headingBlock={
      margin: "1.5em",
      color: colors.darkGreen,
      fontSize: "1.5em",
    }

    const textBlock= {
      margin: "1.5em 1.5em 1.5em 30%",

    }

    const pFont={
      fontSize: "1.15em",
      margin: ".25em 0",
    }

      //Mobile Styles
    const aboutMainMobile= {
      background: colors.lightPurple,
      maxWidth: "75vw",
      margin: "20vh auto 10vh auto",
      padding: "1.5em",
      zIndex: "2",
    }


    return (
      <div>
        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle} className='postRenderPageContainer'>
            <Helmet
              title="a.chalker"
              meta={[ { name: 'description', content: 'Description of ' }]}/>

            <Header></Header>

            <main style={aboutMainMobile}>

              <section>

                <div style={headingBlock}>
                  <h2>about</h2>
                  <img src="http://placehold.it/200x200" />
                </div>

                <div style={textBlock}>
                  <p style={pFont}>
                    export default friendship; 
                  </p>
                  <p style={pFont}>
                    So, I'm Audora (sometimes LeeAnn) Chalker, a bootcamp grad & wannabe UI developer. Currently I work with Javascript (manily React) & the LEMP stack, but eyeing MERN & MEAN. 
                  </p>
                  <p style={pFont}>
                    Topics I'm interested in include: creating opportunities & increasing diversity by bringing tech to underprivileged communities, how the backgrounds of career switchers can make software even better, web performance and mental health. 
                  </p>
                  <p style={pFont}> 
                    Other interests include 
                    My aesthetic is bayou witchery, 80s neon Miami, 60s all black Parisian chic, and all that is light & gay. 
                  </p>
                </div>

              </section>
            </main>

            <Footer>
            </Footer>
          </div>
        </Responsive>

        <Responsive minDeviceWidth={1024}>
          <div
            style={divStyle}
            className='postRenderPageContainer'>
              <Helmet
                title="a.chalker"
                meta={[ { name: 'description', content: 'Description of Blog' }]}/>

            <Header>
            </Header>

            <Paper style={aboutMain} zDepth={2}>
              <main>
                <section>

                  <div style={headingBlock}>
                    <h2>about</h2>
                    <img src="http://placehold.it/200x200" />
                  </div>

                  <div style={textBlock}>
                    <p style={pFont}>
                      export default friendship; 
                    </p>
                    <p style={pFont}>
                      I'm Audora (sometimes LeeAnn) Chalker, a bootcamp grad & wannabe UI developer. Currently I work with Javascript (manily React) & the LEMP stack, but eyeing MERN & MEAN. 
                    </p>
                    <p style={pFont}>
                        Topics I'm interested in include: creating opportunities & increasing diversity by bringing tech to underprivileged communities, how the backgrounds of career switchers can make software even better, web performance and mental health. 
                    </p>
                    <p style={pFont}> 
                       Other interests include 
                       My aesthetic is bayou witchery, 80s neon Miami, 60s all black Parisian chic, and all that is light & gay. 
                    </p>
                  </div>

                </section>
              </main>
            </Paper>

            <Footer></Footer>

          </div>
        </Responsive>

      </div>
    );
  }
}
