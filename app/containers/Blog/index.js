/*
*
* Blog
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Footer from 'components/Footer';
import glamorous from 'glamorous'; 

const StyledArticle = glamorous.section ({ 
  display: 'flex', 
  flexDirection: 'row',  
})

const StyledTitle = glamorous.h2 ({
  color: "#424242", 
   ':hover' : { 
    color: "#00B0FF", 
  },
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


export default class Blog extends React.PureComponent {


  render() {
    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '15vh auto auto auto 1fr', 
      gridRowGap: '5vh',       
    }   


      const blogStyle= {
        display: "flex",
        flexDirection:"column",
        gridRow: '2 / 5',
        gridColumn: '1 / 7 span',
        margin: '0 2.5vw', 
      }

        const textBlock = { 
          background: "#D1C4E9",
          marginBottom: "5%",
          width: '75%',
          padding: '1em',
        }

        const imageStyle = {
          margin: "0 5% 5% 0",
          width: '25%',
        }


    return (

      <div style={pageGrid}>
        <Helmet
          title="Blog"
          meta={[ { name: 'description', content: 'Description of Blog' }]}/>

        <Header> </Header>

        <main style={blogStyle}>

          <StyledArticle> 
            <img src="http://placehold.it/100x100" style={imageStyle}/>
            <Paper zDepth={2} style={textBlock}>
              <a href="/blog/post"><StyledTitle>  Article 1 </StyledTitle></a>
              <article>
                <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <StyledTime>17:00</StyledTime>
              </article>
            </Paper>
          </StyledArticle> 

          <StyledArticle> 
            <img src="http://placehold.it/100x100" style={imageStyle}/>
            <Paper zDepth={2} style={textBlock}>
              <a href="/blog/post"><StyledTitle>  Article 2 </StyledTitle></a>
              <article>
                <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <StyledTime>16:00</StyledTime>
              </article>
            </Paper>
          </StyledArticle>         

          <StyledArticle> 
            <img src="http://placehold.it/100x100" style={imageStyle}/>
            <Paper zDepth={2} style={textBlock}>
              <a href="/blog/post"><StyledTitle>  Article 3 </StyledTitle></a>
              <article>
                <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <StyledTime> 02:00</StyledTime>
              </article>
            </Paper>
          </StyledArticle> 
          
        </main>

        <Footer></Footer>

      </div>
    );
  }
}
