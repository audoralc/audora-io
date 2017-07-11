/*
*
* ThisSite
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous';

export default class ThisSite extends React.PureComponent {
  render() {
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '15vh auto auto auto auto 1fr',
      gridRowGap: '10vh',
    }

    const bodyWrapper = {
      gridRow: '2 / 5',
      gridColumn: '1 / 4 span',
      width: '90vw',
      margin: '5vh',
    }
    const content = {
      background: "#D1C4E9",
      display: "flex",
      flexDirection: 'column',
      height: '100%',
      padding: '5%',
      fontSize: '1.15em',
    }
    const h2Style = {
      color: "#00C853",
    }
    const ulStyle = {
      marginTop: '0',
    }

    return (

      <div style={pageGrid}>

        <Helmet
          title="About audora.me"
          meta={[ { name: 'description', content: 'Description of SumoRedesign' }]}/>

        <Header>
        </Header>

        <div style={bodyWrapper}>

          <Paper zDepth={2}>

            <div style={content}>

              <h2 style={h2Style}> about this site </h2>


              <h3> This site was created with 3 things in mind:</h3>
              <ul style={ulStyle}>

                <li>
                  pastel material ui,
                </li>

                <li>
                  the use of material ui's Paper component to create deconstructed 'sticky notes' on the page,
                </li>

                <li>
                  and a love of emojis. 😉
                </li>

              </ul>


              <h3>Other concerns: </h3>

              <ul style={ulStyle}>

                <li> Readability - Many sites have become unreadable for me (someone with a medium strength glasses perscription)so I can only imagine how bad it must be for folks with worse eyesight. Font sizes are thus probably a little larger than web standards. </li>

                <li> Components - Components are one of my favorite parts of React; it's element semantics! All of the major elements on these pages are components, and especially those in the home page, which can be removed or added back as needed.</li>

                <li> CSS Grid - I'm super excited about CSS Grid & jumped at the opportunity to use it. As such there are still a few issues with the Edge browser, which is a to do below.</li>

                <li> Performance - basic review was done using Google's Lighthouse extension. A more in depth dive is to do</li>

              </ul>


              <h3> Still Left To Do: </h3>

              <ul style={ulStyle}>

                <li>CSS Grid fallbacks for older browsers. </li>

                <li> Performance - super important!</li>

                <li> ARIA/A11y refactoring</li>

                <li> Write! - I've always been a writer and am eager to start on dev topics.</li>

              </ul>


            </div>

          </Paper>

        </div>

        <Footer>
        </Footer>

      </div>
    );
  }
}
