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



export default class Home extends
 React.PureComponent {

  render() {
            const divStyle={
                background: "#FCFAFA",
                fontFamily: "Raleway",
                display: "flex",
                flexDirection:"column",
                overflow: "hidden",
                textAlign: "justify",
                zIndex: "-10",
              }

                    const mainStyle={
                      height: "100%",
                      display: "flex",
                      flexDirection:"column",
                    }

                        const blogStyle={
                         margin: "20vh 0 10vh 20%",
                         background:"#D6E3F8",
                         display: "flex",
                         flexDirection: "row",
                         zIndex: "3",
                        }
                              const blogGroupStyle={
                                display: "flex",
                                margin: ".5em 1em 1em 1em",
                              }



                        const aboutStyle={
                        background:"#C9AFC2",
                        padding: ".5em",
                        width: "35%",
                        marginBottom:"10%",
                        display: "flex",
                        zIndex: "3",
                      }


/* FONT STYLES */
                const nonHeadingFontStyle={
                fontFamily: "Cabin",
                margin: "auto auto",
                fontSize: "1.15em",
                marginBottom: ".5em",
              }

                const linkTextStyle={
                textDecoration: "none",
              }

                const blogTitleStyle={
                zIndex: "5",
              }

                const aboutTextBlockStyle= {
                  margin: "1em",
               }

               const aboutLinkStyle={
                 textDecoration: "none",
                 color: "#266DD3",
                 zIndex: "5",

               }

               const blogHeaderStyle={
                 margin: "1em 1em -.5em 1em",
                }

       return (

<div>
  <div className="responsiveContainer">
    <Responsive maxDeviceWidth={1023}>
      <ResponsiveHome></ResponsiveHome>
    </Responsive>
  </div>

  <Responsive minDeviceWidth={1024}>
    <div style={divStyle}>


      <Header> </Header>

      <main style={mainStyle}>

        <Paper style={blogStyle} zDepth={2}>
          <div>
            <div>
              <header>
                <h2 style={blogHeaderStyle}> Blog </h2>
              </header>
            </div>

            <div style={blogGroupStyle}>
              <PostPreviews></PostPreviews>
              <PostPreviews> </PostPreviews>
              <PostPreviews> </PostPreviews>
            </div>
          </div>
        </Paper>



        <Paper style={aboutStyle} zDepth={2}>
          <div>
            <section style={aboutTextBlockStyle}>
              <header>
                <h2> About Me </h2>
              </header>
              <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                <Link to="/about" style={aboutLinkStyle}> >>> </Link>
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
