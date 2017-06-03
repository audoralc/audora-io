/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import ResponsiveHome from 'components/ResponsiveHome';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from 'material-ui/Paper';
import PostPreviews from 'components/PostPreviews';
import Images from 'components/Images';
import LinkHoverAni from 'components/LinkHoverAni';



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

export default class Home extends
 React.PureComponent {


  render() {
   const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '15vh 50vh 50vh 50vh 1fr', 
      gridRowGap: '5vw', 
    }
      
      const aboutBlock = { 
        gridRow: '2 / 2', 
        gridColumn: '1 / 3 span', 
      }   

      const workBlock = { 
        gridRow: '3 / 3', 
        gridColumn: '2 / 4 span', 
      }

      const blogBlock = {
        gridRow: '4 / 4', 
        gridColumn: '1 / 6', 
      }
   


/* FONT STYLES */
                const nonHeadingFontStyle={
                margin: "auto auto",
                fontSize: "1.15em",
                marginBottom: ".5em",
              }

                const linkTextStyle={
                textDecoration: "none",
              }
             
                const aboutTextBlockStyle= {
                  margin: "1em",
               }

               const sectionLinkStyle= {
                 textDecoration: "none",
               }

               const blogHeaderStyle={
                 margin: "1em 1em -.5em 1em",
                }

       return (

    <div style={pageGrid}>

      <Helmet
        title="a.chalker"
        meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <Header> </Header>

          <Paper style={aboutBlock} zDepth={2}>
            <div className='aboutMeBlock'>            
              <section style={aboutTextBlockStyle}>
                <header>
                  <Link to="/about" style={sectionLinkStyle}>
                    <h2>
                      <LinkHoverAni>
                         About Me
                      </LinkHoverAni>
                    </h2>
                  </Link>
                </header>
                <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

              </section>
            </div>
          </Paper>

        <Paper style={workBlock} zDepth={2}> 

          <div> 
            yes hello this is a work block in progress
          </div>                
        
        </Paper>  

        <Paper  style={blogBlock} zDepth={2}>
           <div>

             <div className='headerBlock'>
               <header>
               <Link to="/blog" style={sectionLinkStyle}>
                 <h2 style={blogHeaderStyle}>
                 <LinkHoverAni>
                   Blog
                 </LinkHoverAni>
                  </h2>
                  </Link>
               </header>
             </div>

             <div>
               <PostPreviews> <Images> </Images></PostPreviews>
             </div>


           </div>
         </Paper>

  

      <Footer> </Footer>
</div>
    );
  }
}
