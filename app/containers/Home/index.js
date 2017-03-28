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
import Footer from 'components/Footer';
import {FaEnvelope,FaGithub,FaLinkedin,FaTwitter} from 'react-icons/lib/fa';


export default class Home extends
 React.PureComponent {
  constructor(props) {
    super(props)
      super(props);
      this.state = {
        blogTitleHover:false
      }
    }

      enterHover = () => {
        this.setState({
          blogTitleHover:true
        })
        console.log(this.state.blogTitleHover);
      };

      leaveHover = () => {
        this.setState({
          blogTitleHover:false
        })
        console.log(this.state.blogTitleHover);
      };

      showAni = () => {

        const blogTitleStyle={
        zIndex: "5",
      };

        const blogTitleAni={
          color: "#000",
        };

        if(this.state.blogTitleHover == true)
        {
          return( <div style={blogTitleStyle}>
            <header>
              <h2> Blog </h2>
            </header>
          </div>
          )
        }
        else {
          return( <div style={blogTitleAni}>
            <header>
              <h2> Blog </h2>
            </header>
          </div>

          )
        }
    }

  render() {
            const divStyle={
                background: "#80C5DB",
                fontFamily: "Raleway",
                display: "flex",
                flexDirection:"column",
                overflow: "hidden",
                zIndex: "-10",
              }

                    const mainStyle={
                      height: "100%",
                      display: "flex",
                      flexDirection:"column",
                    }

                        const blogStyle={
                         margin: "30vh 0 10vh 20%",
                         background:"#69BAC2",
                         display: "flex",
                         flexDirection: "row",
                        }
                              const blogGroupStyle={
                                display: "flex",
                                margin: " .5em 1em",
                                width: "100%",
                            }
                                    const blogCardStyle={
                                      display: "flex",
                                      flexDirection: "column",
                                      alignContent: "space-between",
                                      padding: ".5em 1em",
                                    }


                        const aboutStyle={
                        background:"#E7F4F5",
                        padding: ".5em",
                        width: "35%",
                        marginBottom:"10%",
                        display: "flex",
                      }


/* FONT STYLES */
                const nonHeadingFontStyle={
                fontFamily: "Cabin",
                margin: "auto auto",
                fontSize: "1.15em",
              }

                const linkTextStyle={
                textDecoration: "none",
                color: "#E7F4F5",
              }

                const blogTitleStyle={
                zIndex: "5",
              }

                const aboutTextBlockStyle= {
                  margin: "1em",
               }

               const blogHeaderStyle={
                 margin: "0 1.5em",
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
            <div style={blogHeaderStyle}>
              <header>
                <h2> Blog </h2>
              </header>
            </div>

            <div style={blogGroupStyle}>

              <article style={blogCardStyle}>
                <header>
                  <h3 style={blogTitleStyle}>  <Link to="/" style={linkTextStyle}>Lorem 1 </Link>
                        </h3>
                </header>
                <section>
                  <p style={nonHeadingFontStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </section>

                <footer>
                  <small>
                  <time dateTime="2017-02-02T16:00">Feb 2</time>
                </small>
                </footer>
              </article>

              <article style={blogCardStyle}>
                <header>
                  <h3 style={blogTitleStyle}>
                          <Link to="/" style={linkTextStyle}> Ipsum 2
                          </Link>
                              </h3>
                </header>
                <section>
                  <p style={nonHeadingFontStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <footer>
                  <small>
                  <time dateTime="2017-01-17T21:45">Jan 17</time>
                </small>
                </footer>
              </article>

              <article style={blogCardStyle}>
                <header>
                  <h3 style={blogTitleStyle}>
                          <Link to="/" style={linkTextStyle}> Dolor 3
                          </Link>
                          </h3>
                </header>
                <section>
                  <p style={nonHeadingFontStyle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                </section>
                <footer>
                  <small>
                  <time dateTime="2016-12-30T11:00">Dec 30</time>
                </small>
                </footer>
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
              <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

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
