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
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '8h 25vh auto auto 1fr', 
      gridRowGap: '5vh',       
    }   
   

    const mainStyle = {
      background: colors.lightPurple,
      gridRow: '2 / 5', 
      gridColumn: '2 / 6 span', 
      padding: "1.5em",
      display: 'flex', 
      flexDirection: 'column',
      padding: '2em', 
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
          </div>

          <StyledSection>
            <StyledHeaderThree> export default friendship; 🌈 </StyledHeaderThree>
            
            <p>
              So, I'm Audora (sometimes LeeAnn) Chalker, a bootcamp grad & wannabe UI developer. Currently I work with Javascript (mainly React) & the LEMP stack, but eyeing MERN & MEAN. 
            </p>
            <p>
              Topics I'm interested in include: creating opportunities &increasing diversity by bringing tech to underprivileged communities, how the backgrounds of career switchers can make software even better, web performance and mental health. 
            </p>
            <p> 
              Other interests include hoarding developer resources, making my home as comfy as possible, and pretty much any kind of media. 
              My aesthetic is bayou witchery, 80s neon Miami, 60s all black Parisian chic, and all that is light & gay. 
            </p>
          </StyledSection>              
        </main>

        <Footer></Footer>
      </div>     
    );
  }
}
