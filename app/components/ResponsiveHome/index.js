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

class ResponsiveHome extends React.PureComponent {
  render() {
    const divStyle={
      background: colors.white,
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
      background: colors.lightBlue,
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
      background: colors.lightPurple,
      padding: ".5em",
      /*  width: "30%", */
      /*CHANGE*/ margin:"10%",
      display: "flex",
     
    }




    /* FONT STYLES */
    const nonHeadingFontStyle={
      fontFamily: "Cabin",
      margin: "auto auto",
    }

    const linkTextStyle={
      textDecoration: "none",
      color: colors.white,
    }

    const blogTitleStyle={
      margin: "1em 1em 1em 1.5em",
    }

    const aboutTextBlockStyle= {
      margin: "1em",
    }



    return (


      <div style={divStyle}>


        <Header>
        </Header>


        <main style={mainStyle}>


          <div style={blogStyle}>

            <div style={blogTitleStyle}>

              <header>

                <h2> Blog </h2>

              </header>

            </div>

            <div style={blogGroupStyle}>

              <PostPreviews>
              </PostPreviews>

              <PostPreviews>
              </PostPreviews>

              <PostPreviews>
              </PostPreviews>

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
          
          <Footer></Footer>

        </div>


      </div>

    );
  }
}

export default ResponsiveHome;
