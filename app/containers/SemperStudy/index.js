/*
 *
 * SemperStudy
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
})


export default class SemperStudy extends React.PureComponent {
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
          background:"#D1C4E9",
          display: "flex", 
          flexDirection: 'column',
          height: '100%',         
        }

          const textBlock = {
            padding: '2em 2em 0 2em', 
            fontSize: '1.15em',  
            textAlign: 'center', 
          }  
            const explainBlock = {
              width: '85%', 
              margin: '5% auto',
            }

              const h4Style = {
                color: "#673AB7",
                fontSize: '1.25em',
              }
          const carouselStyle = { 
            height:'90%',
            margin:'5%',
          }
    return (
     
      <div style={pageGrid}>
        <Helmet title="Semper Disco Study" meta={[ { name: 'description', content: 'Description of Semper Disco Study' }]}/>
        <Header></Header>
        <div style={bodyWrapper}> 
          <Paper zDepth={2}> 
            <div style={content}>

            <div style={textBlock}>         
                 <h2> <HeaderLink href="/semper-disco"> Semper Disco </HeaderLink> </h2>

                <div style={explainBlock}>
                  <h4 style={h4Style}> </h4>
                </div>              

                 <a href="https://github.com/audoralc/semper-disco" style={h4Style}><h4> SD README.md on Github</h4></a>

              </div> 


                <div style={carouselStyle}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:"80%",width:"100%", margin:'0 auto'}}>
             <img src="http://i.imgur.com/W3MgJCp.jpg" width="100%"/>  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
               <img src="http://i.imgur.com/ZdVozMV.jpg" width="100%" />  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
             <img src="http://i.imgur.com/68wPR5I.jpg" width="100%" />
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
