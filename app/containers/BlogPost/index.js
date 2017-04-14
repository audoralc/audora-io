/*
 *
 * BlogPost
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import Header from 'components/Header';
import Footer from 'components/Footer';

const post= {
  title: 'Lorem',
  time: 'Feb 2',
  blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' ,
  body: '',
  img: '',
  slug: '/about',
};

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


export default class BlogPost extends React.PureComponent {


  render() {

  const containerReset={
    display: "flex",
    flexDirection: "column",
    fontFamily: "Raleway",
    background: colors.white,

    }

    const blogMainStyle={
      width: "70vw",
      margin: "15% auto 5vh 28vh",
      height: "100%",
    }

                const imageStyle= {
                  float: "left",
                  padding: "1em 1em 1em 0",
                  margin: "auto 0 auto -5vh",
                  width: "50vw",
                  maxWidth: "25vw",
                }

    const footerReset = {
      bottom: "0",
      width: "100vw",
      zIndex: "2",
      background: colors.white,
    }
                const pStyle={
                  fontFamily: "Cabin",
                }

                const h2Style={
                  color: colors.brightBlue,
                }


    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <div style={containerReset}>
        <main>
          <article style={blogMainStyle}>

          <header>
            <h2 style={h2Style}>Indeed</h2>
            <time>16:00</time>
          </header>
          <section>


            /*{post.body}*/



              <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
/*{post.img}*/ 
              <img src="http://placehold.it/300x300" style={imageStyle} />

              <p  style={pStyle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

              <p style={pStyle}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure </p>
            </section>
          </article>
        </main>

        </div>

      <div style={footerReset}>
        <Footer></Footer>
      </div>

      </div>


    );
  }
}
