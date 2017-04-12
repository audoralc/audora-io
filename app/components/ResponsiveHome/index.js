/**
*
* ResponsiveHome
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Header from 'components/Header';
import PostPreviews from 'components/PostPreviews';
import Footer from 'components/Footer';

class ResponsiveHome extends React.PureComponent {
  render() {
    const divStyle={
        background: "#FCFAFA",
        fontFamily: "Raleway",
        display: "flex",
        flexDirection:"column",
        overflow: "hidden",
      }

            const mainStyle={
              height: "100%",
              display: "flex",
              flexDirection:"column",
            }

                const blogStyle={
      /*change*/ margin: "20vh 10vh 0 10vh",
                 background:"#D6E3F8",
              /* width: "60%", */
                 display: "flex",
                }
                      const blogGroupStyle={
                        display: "inline-flex",
                        margin: "-1.25em 1em 1em 1em",
                        flexWrap: "wrap",
                        flexDirection: "row",
                    }
                            const blogCardStyle={
                              padding: ".5em",
                              margin: ".5em",
                              display: "block",
                            }

                const aboutStyle={
                background:"#C9AFC2",
                padding: ".5em",
            /*  width: "30%", */
     /*CHANGE*/ margin:"10%",
                display: "flex",
                zIndex: "3",
              }

              const footerStyle={
                background:"#89B6A5",
                display: "flex",
                flexDirection: "column",
                bottom: "0",
                width: "50%",
                height: "5em",
                padding: ".5em",
                margin: "auto auto",

               }

                   const socialIconStyles= {
                       display: 'flex',
                       flexDirection: "row",
                       listStyleType: "none",
                       justifyContent: "space-around",
                       margin: "0 0",
                       padding: ".25em 1em",
                       color: "#FCFAFA",
                     }

                     const copyrightStyle= {
                       margin: "1.5em auto",
                       lineHeight: "1.5em",
                     }




/* FONT STYLES */
        const nonHeadingFontStyle={
        fontFamily: "Cabin",
        margin: "auto auto",
      }

        const linkTextStyle={
        textDecoration: "none",
        color: "#FCFAFA",
      }

        const blogTitleStyle={
        margin: "1em 1em 1em 1.5em",
      }

        const aboutTextBlockStyle= {
          margin: "1em",
       }

       const footerFontStyle={
         fontFamily: "Cabin",
         justifyContent: "space-between",
         margin: "1em",
         color: "#7A3B69",
       }

    return (


      <div style={divStyle}>

        <Header> </Header>

        <main style={mainStyle}>

            <div style={blogStyle}>
              <div style={blogTitleStyle}>
                <header>
                  <h2> Blog </h2>
                </header>
              </div>
                  <div style={blogGroupStyle}>
                  <PostPreviews></PostPreviews>
                  <PostPreviews> </PostPreviews>
                  <PostPreviews> </PostPreviews>
              </div>
            </div>



        <div style={aboutStyle}>
              <section style={aboutTextBlockStyle}>
                <header>
                  <h2> About Me </h2>
                </header>
                <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

              </section>
            </div>
      </main>

      <div>
        <Footer> </Footer>
      </div>

      </div>

    );
  }
}

export default ResponsiveHome;
