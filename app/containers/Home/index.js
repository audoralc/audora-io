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
import Paper from 'material-ui/Paper';
import PostPreviews from 'components/PostPreviews';
import Footer from 'components/Footer';
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
  darkGreen: "#43A047",
}

export default class Home extends
 React.PureComponent {



  render() {
            const divStyle={
                background: colors.white,
                display: "flex",
                flexDirection:"column",
                overflow: "hidden",
                textAlign: "justify",
                zIndex: "-1",
              }

                    const mainStyle={
                      height: "100%",
                      display: "flex",
                      flexDirection:"column",
                    }

                        const blogStyle={
                         margin: "20vh 0 10vh 20%",
                         background: colors.lightBlue,
                         zIndex: "2",
                        }
                              const blogGroupStyle={
                                display: "flex",
                                flexDirection: "row",
                                margin: ".5em 1em 1em 1em",
                              }

                              const imgBlockStyle={
                                margin: ".5em 1em 1em 1em",
                              }





                        const aboutStyle={
                        background:colors.lightPurple,
                        padding: ".5em",
                        width: "35%",
                        marginBottom: "10vh",
                        zIndex: "2",
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

                const blogTitleStyle={
                zIndex: "2",
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

<div className='pageContainer'>
  <div className="responsiveContainer">
    <Responsive maxDeviceWidth={1023}>
      <ResponsiveHome></ResponsiveHome>
    </Responsive>
  </div>

  <Responsive minDeviceWidth={1024}>
    <div style={divStyle} className='regularScreenContainer'>


      <Header> </Header>

      <main style={mainStyle}>

        <Paper style={blogStyle} zDepth={2}>
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

             <div style={blogGroupStyle}>
               <PostPreviews> <Images> </Images></PostPreviews>
               <PostPreviews> <Images> </Images></PostPreviews>
               <PostPreviews> <Images> </Images></PostPreviews>
             </div>


           </div>
         </Paper>



          <Paper style={aboutStyle} zDepth={2}>
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

      </main>

      <Footer> </Footer>

    </div>
  </Responsive>

</div>
    );
  }
}
