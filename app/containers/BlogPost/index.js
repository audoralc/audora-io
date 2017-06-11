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
import glamorous from 'glamorous'; 

const post= {
  title: 'Lorem',
  time: 'Feb 2',
  blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.' ,
  body: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure ',
  img: '',
  slug: '/about',
};

const StyledTitle = glamorous.h2 ({
  color: "#00B0FF", 
  fontSize: "2.5em",
  margin: '0',
})

const StyledTime = glamorous.time ({
  color: "#00C853",
  fontWeight: 'bold',
})

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

  const pageGrid = { 
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', 
    gridTemplateRows: '15vh auto auto auto 1fr', 
    gridRowGap: '5vh',       
  }   

    const bodyStyle = { 
      gridRow: '2 / 5', 
      gridColumn: '2 / 7 span',
      margin: '0 5vw', 
      height: '75vh',
    }

      const imageStyle = {
        float: 'left', 
        margin: '1em',     
     }

    return (
      <div style={pageGrid}>
  
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header></Header>

        <div style={bodyStyle}>
          <main>
            <article>

                <header>
                  <StyledTitle>{post.title}</StyledTitle>
                  <StyledTime>{post.time}</StyledTime>
                </header>            

                <section>
                    <p> {post.blurb}</p>                   
                    <img src="http://placehold.it/300x300" style={imageStyle}  />
                    <p> {post.body}</p>                        
                </section>
            </article>
          </main>

        </div>
              
        <Footer></Footer>                

      </div>
    );
  }
}
