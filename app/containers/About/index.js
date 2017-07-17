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
import Responsive from 'react-responsive';
import glamorous from 'glamorous';

const StyledHeaderTwo = glamorous.h2 ({
  color: "#673AB7",
  fontSize: "1.5em",
})

const StyledSection = glamorous.section ({
    marginLeft: '20%',
})

  const StyledHeaderThree = glamorous.h3 ({
    color: "#00B0FF",
    float: 'right',
    fontSize: '1.5em',
  })


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
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '8h 25vh auto auto 1fr',
      gridRowGap: '5vh',
    }


    const mainStyle = {
      background: colors.lightPurple,
      gridRow: '2 / 5',
      gridColumn: '1 / 4 span',
      display: 'flex',
      flexDirection: 'column',
      padding: '2em',
      margin: '15vh 0 0 auto',
      width: '85vw',
      
    }

      const headerBlock = {
       justifyContent: 'flex-start',
      }


    return (
      <div style={pageGrid}>
        <Helmet title="a.chalker"
              meta={[ { name: 'description', content: 'Description of ' }]}/>

        <Header></Header>

        <main style={mainStyle}>

          <div style={headerBlock}>
            <StyledHeaderTwo>it me</StyledHeaderTwo>
            <img src="http://audora.me/img/my-pic.jpg" width="40%" height="60%" />
            <StyledHeaderThree> export default friendship; 🌈 </StyledHeaderThree>
          </div>

          <StyledSection>
            

            <p>
              So, I'm Audora and to be completely honest, that name is a bit weird; for most of my life I've gone by LeeAnn. Don't worry though: It's my middle name & I have no real preference. 
            </p>
            <p> My life philosophy is that the world is tough enough without adding to it by being an asshole. I believe compassion, empathy & radical candor can change the world, not just the tech industry. I want to reach a place where I'm established enough to give back, to put bread upon the waters so to speak. Small things in life are important because they form foundations. I care (maybe too much) about making sure everyone has safety & support. </p>
            <p>
              Topics I'm interested in include: creating opportunities & increasing diversity by bringing tech to underprivileged communities (I'm a bootcamp grad thanks to the Workforce Investment Act), how the backgrounds of career switchers can make software even better (mine is history & journalism), web performance/a11y, and mental health.
            </p>
            <p>
              Other interests include hoarding developer resources, making my home as comfy as possible (ridiculous amounts of candles), and pretty much any kind of media.
              My aesthetic is bayou witchery, 80s neon Miami, 60s all black Parisian chic, and all that is light & gay.
            </p>
          </StyledSection>
        </main>

        <Footer></Footer>
      </div>
    );
  }
}
