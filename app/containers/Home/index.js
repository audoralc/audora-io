/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class Home extends React.PureComponent {
  render() {
               const divStyle={
                background: "#80C5DB",
                height: "100%",
                fontFamily: "Raleway",
                display: "grid",

                }

                const nonHeadingFontStyle={
                fontFamily: "Cabin",
             }

              const headerStyle={
                background:"#828CEC",
                fontSize: ".8em",
                margin: "0 0", 

              }

              const mainStyle={
              }

                  const blogStyle={
                   margin: "40px",
                   background:"#69BAC2",
                   display: "flex",
                   width: "60%",
                }

                          const blogCardStyle={
                            padding: ".5em",
                            flexWrap: "wrap",
                          }

                  const aboutStyle={
                  background:"#E7F4F5",
                  padding: ".5em",
                  width: "30%",
                  height: "auto",
                }

               const footerStyle={
                 background:"#8DE0CA",
                 color: "#669daf",
                 position: "fixed",
                 bottom: "0",
                 width: "100%",
                }
                    const socialLinksStyle= {
                      display: 'flex',
                      flexDirection: "row",
                      listStyleType: "none",
                      alignSelf: "auto",

                      }

    return (
      <div style={divStyle}>
         <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

           <header style={headerStyle}>
             <h1> Audora Chalker </h1>
             <nav>
               <Link to="/"> Home </Link>
             </nav>
           </header>

<main style={mainStyle}>
    <div style={blogStyle}>
      <header>
        <h2> Blog </h2>
      </header>


              <article style={blogCardStyle}>
                <header>
                  <h3>
                    <a href=""> Lorem 1 </a>
                  </h3>
                </header>
                <section>
                  <p style={nonHeadingFontStyle}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </section>
              </article>

                <article style={blogCardStyle}>
                  <header>
                    <h3>
                      <a href=""> Ipsum 2 </a>
                    </h3>
                  </header>
                  <section>
                    <p style={nonHeadingFontStyle}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </section>
                </article>

                <article style={blogCardStyle}>
                  <header>
                    <h3>
                      <a href=""> Dolor 3 </a>
                    </h3>
                  </header>
                  <section>
                    <p style={nonHeadingFontStyle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </section>
                </article>

          </div>


          <div style={aboutStyle}>
                <section>
                  <header>
                    <h2> About Me </h2>
                  </header>
                    <p style={nonHeadingFontStyle}> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>

                </section>
          </div>
  </main>

          <footer style={footerStyle}>
            <ul class="socialLinks" style={socialLinksStyle}>
              <li><a href="mailto:audoralc@gmail.com">📧</a></li>
              <li> <a href="https://github.com/scribeklio"> X </a> </li>
              <li> <a href="https://www.linkedin.com/achalker24"> X </a></li>
              <li> <a href="https://twitter.com/klioonthemoon"> X </a></li>
            </ul>

            <p style={nonHeadingFontStyle}> made with ❤️️ & ☕ </p>
          </footer>


      </div>
    );
  }
}
