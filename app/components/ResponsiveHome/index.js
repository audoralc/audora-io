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
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Footer from 'components/Footer';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';

class ResponsiveHome extends React.PureComponent {
  render() {
    const divStyle={
        background: "#80C5DB",
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
                 background:"#69BAC2",
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
                background:"#E7F4F5",
                padding: ".5em",
            /*  width: "30%", */
     /*CHANGE*/ margin:"10%",
                display: "flex",
                zIndex: "3",
              }

              const footerStyle={
                background:"#8DE0CA",
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
                       color: "#E7F4F5",
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
        color: "#E7F4F5",
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
         color: "#669daf",
       }

    return (

<Responsive maxDeviceWidth={1023}>
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
                    <article style={blogCardStyle}>
                      <header>
                        <h3>  <Link to="/" style={linkTextStyle}>Lorem 1 </Link>
                            </h3>
                      </header>
                      <section>
                        <p style={nonHeadingFontStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                      </section>
                    </article>

                    <article style={blogCardStyle}>
                      <header>
                        <h3>
                              <Link to="/" style={linkTextStyle}> Ipsum 2
                              </Link>
                                  </h3>
                      </header>
                      <section>
                        <p style={nonHeadingFontStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </section>
                    </article>

                    <article style={blogCardStyle}>
                      <header>
                        <h3>
                              <Link to="/" style={linkTextStyle}> Dolor 3
                              </Link>
                              </h3>
                      </header>
                      <section>
                        <p style={nonHeadingFontStyle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                      </section>
                    </article>
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
      <footer style={footerStyle}>

        <ul style={socialIconStyles}>
        <li> <a href="mailto:scribeklio@gmail.com"><FaEnvelope></FaEnvelope></a></li>
        <li> <a href="https://github.com/scribeklio"><FaGithub></FaGithub></a></li>
        <li><a href="https://www.linkedin.com/achalker24"><FaLinkedin></FaLinkedin></a></li>
        <li><a href="https://twitter.com/klioonthemoon"><FaTwitter></FaTwitter></a></li>
        </ul>

        <div style={copyrightStyle}>
        <p style={footerFontStyle}> © 2017 audora chalker. made with ❤️️ & ☕. </p>
        </div>

      </footer>
      </div>

      </div>
</Responsive>

    );
  }
}

export default ResponsiveHome;
