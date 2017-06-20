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

       const carouselStyle = { 
  
        }
    return (
      
      <div style={pageGrid}>
        <Helmet title="Pyxis Study" meta={[ { name: 'description', content: 'Description of Pyxis Study' }]}/>
        <Header></Header>
        <div style={bodyWrapper}> 
          <Paper zDepth={2}> 
            <div style={content}>

             <div> 
                <h2> <a href="/pyxis-home"> Pyxis </a> </h2>
                <h3> </h3>
                <ol> 
                  <li>  </li>
                  <li> </li>
                </ol>

                <p>  </p>
              </div> 

                     <div style={{height:'90%',margin:'5%'}}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:"80%",width:"100%"}}>
             <img src="" width="100%"/>  
            </div>
            <div style={{height:"80%",width:"80%"}}>
               <img src="http://i.imgur.com/UkZ7fAp.png"  width="100%" />  
            </div>
            <div style={{height:"80%",width:"80%"}}>
             <img src="http://i.imgur.com/8Gmi4fB.png" width="100%" />
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
