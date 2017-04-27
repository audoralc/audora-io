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
  body: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure ',
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
  darkGreen: "#00C853",
}


export default class BlogPost extends React.PureComponent {


  render() {

  const bodyContainerReset={
    background: colors.white,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    }

    const blogMainStyle={
      width: "70vw",
      margin: "10vh auto 5vh 25vw",

    }

                const imageStyle= {
                  float: "left",
                  padding: "0 1em 1em 0",
                  margin: "auto 0 auto -5vh",
                  width: "50vw",
                  maxWidth: "25vw",
                }

    const footerReset = {
      bottom: "0",
      width: "100vw",
      zIndex: "2",
      background: colors.white,
      fontFamily: "Cabin",
    }
                const pStyle={
                  fontSize: "1.15em",
                }

                const h2Style={
                  color: colors.brightBlue,
                  fontSize: "2.5em",
                  marginBottom: "0",
                }

  //mobile styles

  const blogMainStyleMobile={
    width: "70vw",
    margin: "10% auto 5vh auto",
    height: "100vh",
  }

    return (
      <div className='pageContainer'>
      <Responsive maxDeviceWidth={1023}>
            <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

            <Header></Header>

            <div style={bodyContainerReset}>
                <main style={blogMainStyleMobile}>
                  <article>

                      <header>
                        <h2 style={h2Style}>{post.title}</h2>
                        <time>{post.time}</time>
                      </header>

                      <section>
                          <p style={pStyle}> {post.blurb}</p>

                          <img src="http://placehold.it/300x300" style={imageStyle} />

                          <p style={pStyle}> {post.body}</p>

                      </section>
                  </article>
                </main>

                </div>

              <div style={footerReset}>
                <Footer></Footer>
              </div>

      </Responsive>


      <Responsive minDeviceWidth={1024}>
        <Helmet title={post.title} meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <div style={bodyContainerReset}>
            <main style={blogMainStyle}>
              <article >

                  <header>
                    <h2 style={h2Style}>{post.title}</h2>
                    <time>{post.time}</time>
                  </header>

                  <section>

                      <p style={pStyle}> {post.blurb} </p>

                      <img src="http://placehold.it/300x300" style={imageStyle} />

                      <p style={pStyle}> {post.body}</p>
                  </section>
              </article>
            </main>

            </div>

          <div style={footerReset}>
            <Footer></Footer>
          </div>
        </Responsive>

      </div>
    );
  }
}
