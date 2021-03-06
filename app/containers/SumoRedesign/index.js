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

const Paragraph = glamorous.p ({ 
    fontSize: '1.15em', 
    fontWeight: '400',
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
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '15vh auto auto auto auto 1fr', 
      gridRowGap: '20vh', 
      maxWidth: '100vw',
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
              fontSize: '1.15em',
            }

            const explainBlock = {
              width: '85%', 
              margin: '0 auto',
              padding: '2%',
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
                <h2 style={headerStyle}> <HeaderLink href="http://sumorobotleague.com" target="_blank" > Sumo Robot League Site</HeaderLink> Redesign </h2>

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

                <Paragraph>  In my opinion, the original site was a little too dark & strong for a site with young people in mind, so I softened the dark neutrals, added a few primary colors and more whitespace.</Paragraph>

                <Paragraph> The monospace font used in the navigation & for headers was chosen to invoke the programming element of the Robot League, and happened to have the perfect name: Share Tech Mono. </Paragraph>

                <Paragraph> Photos were chosen carefully to display the diversity of the teams, so that any potential student, or teacher thinking of their students, could find representation. </Paragraph>
                </div>

                <div style={explainBlock}>
                <h4 style={h4Style}> 💾 Server-side Improvements:</h4>

                <Paragraph> Administrative duties made easier via CRUD-based dashboards. Multiple tasks grouped together on the same page using components within Material UI tabs.  </Paragraph>  
                </div> 
              </div> 

                 <div style={carouselStyle}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:"80%",width:"100%"}}>
              <img src="http://audora.me/img/srl-home.png" width="100%" /> 
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
               <img src="http://audora.me/img/srl-about.png" width="100%"/>  
            </div>
            <div style={{height:"80%",width:"80%", margin:'0 auto'}}>
              <img src="http://audora.me/img/srl-contact.png" width="100%"/>
            </div>
            <div>
              <img src="http://audora.me/img/dash-example.gif" width="100%"/>
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
