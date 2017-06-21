/*
 *
 * SumoRedesign
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
 

export default class SumoRedesign extends React.PureComponent {
     constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
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
          const headerStyle = { 
            color: '', 
          }
          const textBlock = {
            padding: '2em 2em 0 2em', 
            fontSize: '1.15em',           
          }
            const olStyle = {
              margin: '5%',
              background: "#B3E5FC",
              padding: '1em',
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
        <Helmet title="SumoRedesign" meta={[ { name: 'description', content: 'Description of SumoRedesign' }]}/>

        <Header></Header>

        <div style={bodyWrapper}> 
          <Paper zDepth={2}> 
            <div style={content}>

             <div style={textBlock}> 
                <h2 style={headerStyle}> <HeaderLink href="http://sumorobotleague.com"> Sumo Robot League Site</HeaderLink> Redesign </h2>

                <Paper zDepth={2} style={olStyle}> 
                <div > 
                  <h3>📌 Objectives:</h3>
                  <ol> 
                    <li> Redesign clientside. </li>
                    <li> Overhaul backend & create API linked administrator dashboards.</li>
                  </ol>
                </div>
                </Paper> 

                <div style={explainBlock}> 
                <h4 style={h4Style}>📏 Design thinking:</h4>

                <p>  The original site to me was a little too dark & strong for any appeal to young people, so I softened the dark neutrals, added a few primary colors and more whitespace.</p>

                <p> The monospace font used in the navigation & for headers was chosen to invoke the programming element of the Robot League, and happened to have the perfect name Share Tech Mono. </p>

                <p> Photos were chosen carefully to display the diversity of the teams, so that any potential student, or teacher thinking of their students, could find themselves represented. </p>
                </div>

                <div style={explainBlock}>
                <h4 style={h4Style}> 💾 Server-side Improvements:</h4>

                <p> Administrative duties made easier via CRUD-based dashboards. Multiple tasks grouped together on the same using components within Material UI tabs.  </p>  
                </div> 
              </div> 

                 <div style={carouselStyle}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:"80%",width:"100%"}}>
              <img src="http://i.imgur.com/ILUXgj0.png" width="100%" /> 
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
               <img src="http://i.imgur.com/Hj5KnF4.png" width="100%"/>  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
              <img src="http://i.imgur.com/KVviOfz.png" width="100%"/>
            </div>
            <div>
              <img src="http://i.imgur.com/mWU1Aob.gif" width="100%"/>
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
