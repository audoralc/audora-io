/*
 *
 * PyxisStudy
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';  

const HeaderLink = glamorous.a({
    ':hover': { 
     color: "#00B0FF",
     textDecoration: 'none', 
    },  
    color:  "#00C853",
    textDecoration: 'none',
    fontSize: '.75em', 
})

export default class PyxisStudy extends React.PureComponent {
  render() {
    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '15vh auto auto auto auto 1fr', 
      gridRowGap: '10vh',       
    }     

      const bodyWrapper = {
        gridRow: '2 / 5', 
        gridColumn: '1 / 7 span',
        width: '90vw',     
        margin: '0 auto',   
      }

        const content = { 
          background: "#D1C4E9",
          display: "flex", 
          flexDirection: 'column',
          height: '100%',         
        } 
           const textBlock = {
            padding: '2em 2em 0 2em', 
            fontSize: '1.15em',  
          }  

          const objStyle = {
              margin: '5%',
              background: "#B3E5FC",
              padding: '1em', 
            }
            
            const explainBlock = {
              width: '85%', 
              margin: '2.5% auto',
             
            }

              const h4Style = {
                color: "#673AB7",
                fontSize: '1.25em',
                marginBottom: '1em',
              }

       const carouselStyle = { 
          height:'90%',
          margin:'5%',
        }
    return (
      
      <div style={pageGrid}>
        <Helmet title="Pyxis Study" meta={[ { name: 'description', content: 'Description of Pyxis Study' }]}/>
        <Header></Header>
        <div style={bodyWrapper}> 
          <Paper zDepth={2}> 
            <div style={content}>

            
             <div style={textBlock}> 
               <h2> Pyxis - <HeaderLink href="/pyxis-home"> 👀Front Page Demo </HeaderLink>  </h2> 
               
               <Paper zDepth={2} style={objStyle}>
                 <div> 
                  <h3>📌 Objective:</h3>
                  <p style={explainBlock}> Create a website for a subscription box service based on marketing proposal from local agency. Integrate as many features & as much marketing know-how as possible. Design elements & assets were not provided. 
                  </p>
                </div>
                </Paper>

                <div style={explainBlock}> 

                  <h4 style={h4Style}>📏 Design thinking:</h4>

                  <p>Standard stacked ribbon layout paired with shapes that split the page into halves using CSS Grid.</p> 

                  <p>Color palette was inspired by the 14th cen frescos of Giotto de Bondone (an example of which is on Slide 3 the FAQ page). The warm neutrals were complimented by rich, saturated colors where appropriate. The major call to action colors were blue & green, but other colors, each historically associated with a specific deadly sin were used in the backgrounds/ mouseover backgrounds on <a href="/pyxis"> the front page.</a></p>

                  <p> All flat icons & images, other than social icons, are in svg format.</p>

                  <p> Without graphic design elements I tried to get as creaive as possible with plain CSS. </p>

                </div> 

                <div style={explainBlock}>
                  <h4 style={h4Style}> 💾 Server-side Improvements (handled by project partner & all around amazing backend guy Austin):</h4>
                  <p> Payment system mockup via Stripe's API, which has nifty options for reoccuring subscription charges. </p> 
                  <p> Invoice PDF generation for every order. </p> 
                </div> 
              
              </div> 

                     <div style={carouselStyle}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:"80%",width:"100%", margin:'0 auto'}}>
             <img src="http://audora.me/img/pyxis-home.png" width="100%"/>  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
               <img src="http://audora.me/img/pyxis-about.png"  width="100%" />  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
             <img src="http://audora.me/img/pyxis-faq.png" width="100%" />
            </div>
          </React_Bootstrap_Carousel>
        </div>
               
            
            </div> 
       </Paper>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
