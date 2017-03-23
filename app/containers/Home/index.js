/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


export default class Home extends
 React.PureComponent {
  render() {
               const divStyle={
                background: "#80C5DB",
                fontFamily: "Raleway",
                display: "flex",
                flexDirection:"column",
                overflow: "hidden",
              }

                const nonHeadingFontStyle={
                fontFamily: "Cabin",
                margin: "auto auto",
             }

              const headerStyle={
                fontSize: "1em",
                display: "flex",
                flexDirection: "column",
                zIndex: "2",

              }
                  const headerShapeStyle= {
                    width: "0",
                    height:"0",
                    border: "0 solid transparent",
                    borderWidth:"100vh",
                    borderTop: "15vh solid #828CEC",
                    position: "fixed",
                    zIndex: "4",
                  }

                  const headerTextBlockStyle= {
                    position: "fixed",
                    margin: "3vh 0 0 0",
                    padding: "0 0 0 1em",
                    width: "30vw",
                    }

                  const headerOneStyle={
                    fontSize: "1.5em",
                    color: "#fff",
                  }

                  const linkTextStyle={
                  textDecoration: "none",
                  color: "#fff",
                  }

              const mainStyle={
                height: "100%",
                display: "flex",
                flexDirection:"column",

              }

                  const blogStyle={
                   margin: "20vh 0 10% 40%",
                   background:"#69BAC2",
                   width: "60%",
                   display: "flex",

                  }


                          const blogTitleStyle={
                            margin: "1em 1em 1em 1.5em",

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
                  width: "30%",
                  marginBottom:"10%",
                  display: "flex",
                  zIndex: "3",
                }
                    const aboutTextBlockStyle= {
                      margin: "1em",

                    }

               const footerStyle={
                 background:"#8DE0CA",
                 color: "#669daf",
                 display: "flex",
                 flexDirection: "column",
                 bottom: "0",
                 width: "100%",
                 height: "5em",
                 padding: ".5em",
              }

                    const footerFontStyle={
                      fontFamily: "Cabin",
                      justifyContent: "space-between",
                      margin: "auto",

                    }
                    const socialLinksStyle= {
                      display: 'flex',
                      flexDirection: "row",
                      listStyleType: "none",
                      justifyContent: "space-between",
                      margin: "0 40vw",
                    }


        return (
<div style={divStyle}>


  <Helmet title="a.chalker " meta={[ { name: 'description', content: 'Description of Home' }]}/>
  <div style={headerShapeStyle}>
  </div>
  <header style={headerStyle}>
    <div style={headerTextBlockStyle}>
      <h1 style={headerOneStyle}> Audora Chalker </h1>
      <nav>
        <Link to="/" style={linkTextStyle}>
          <IconButton>
             <FontIcon className="muidocs-icon-action-home">
         Home
              </FontIcon>
            </IconButton>
          </Link>
      </nav>
    </div>
  </header>
  <main style={mainStyle}>

  <Paper style={blogStyle} zDepth={2}>
    <div>
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
  </Paper>

  <Paper style={aboutStyle} zDepth={2}>
    <div>
      <section style={aboutTextBlockStyle}>
        <header>
          <h2> About Me </h2>
        </header>
        <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

      </section>
    </div>
    </Paper>

  </main>

  <footer style={footerStyle}>
    <ul class="socialLinks" style={socialLinksStyle}>
      <li>
        <Link to="mailto:audoralc@gmail.com" style={linkTextStyle}>📧</Link>
      </li>
      <li>
        <Link to="https://github.com/scribeklio" style={linkTextStyle}> X </Link>
      </li>
      <li>
        <Link to="https://www.linkedin.com/achalker24" style={linkTextStyle}> X </Link>
      </li>
      <li>
        <Link to="https://twitter.com/klioonthemoon" style={linkTextStyle}> X </Link>
      </li>
    </ul>

    <p style={footerFontStyle}> audora chalker. made with ❤️️ & ☕ </p>
  </footer>




</div>
    );
  }
}
