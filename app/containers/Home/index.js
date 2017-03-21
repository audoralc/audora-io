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
                height: "100vh",
                fontFamily: "Raleway",
                fontWeight: "bold",
                display: "grid",
                }

              const headerStyle={
                background:"#828CEC",
              }

              const mainStyle={

              }

                  const blogStyle={
                   background:"#69BAC2",
                   display: "flex",
                  }

                  const aboutStyle={
                  background:"#E7F4F5",
                   }

               const footerStyle={
                 background:"#8DE0CA",
                 position: "absolute",
                 bottom: "0",


               }

    return (
      <div style={divStyle}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <header style={headerStyle}>
        //  Audora Chalker
            <nav>
              <Link to="/"> Home </Link>
            </nav>
          </header>

          <main style={mainStyle}>
              <div style={blogStyle}>
                <section>
                  //   Blog
                  <p></p>
                  <p></p>
                </section>
              </div>
              <div style={aboutStyle}>
                <section>
                //   About
                </section>
              </div>
          </main>

          <footer style={footerStyle}>
            <ul>
              <li><i class="fa fa-envelope-open-o" aria-hidden="true">  </i></li>
              <li><i class="fa fa-github" aria-hidden="true">  </i></li>
              <li><i class="fa fa-linkedin" aria-hidden="true">  </i></li>
              <li><i class="fa fa-twitter" aria-hidden="true">  </i> </li>
            </ul>

            <p> made with ❤️️ & ☕ </p>
          </footer>


      </div>
    );
  }
}
