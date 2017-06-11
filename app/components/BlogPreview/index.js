/**
*
* BlogPreview
*
*/

import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous'; 

const StyledHeader = glamorous.h2 ({
  color: "#673AB7", 
   ':hover' : { 
    color: "#00C853", 
  },
})

const StyledArticle = glamorous.article ({ 
    margin: '0 1em',
    textAlign: 'justify', 
    display: 'flex', 
    flexDirection: 'column', 
})

const StyledTitle = glamorous.h3 ({
  color: "#424242", 
   ':hover' : { 
    color: "#00B0FF",
    borderLeft: '2px solid #424242',
    borderBottom: '2px solid #424242', 
  },
  lineHeight: '1.2',
  margin: '0', 
  padding: '2px',
  borderLeft: '2px solid #00B0FF',
  borderBottom:'2px solid #00B0FF',
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

class BlogPreview extends React.PureComponent {
  render() {

    const blogBlock = {
        gridRow: '4 / 4', 
        gridColumn: '3 / 7 span',        
      }

      const bgColor = {
        background: "#B3E5FC",
        padding: "1em", 
      }

      const articleRow = {
        display: 'flex', 
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'flex-start',  
        justifyContent: 'space-around',
      }

    return (
      <div style={blogBlock}>
        <Paper zDepth={2} style={bgColor}>

          <header>
          <Link to="/blog" >
            <StyledHeader> Blog </StyledHeader>
          </Link>
          </header>

          <section style={articleRow}> 
            <StyledArticle> 
              <StyledTitle> Article 1 </StyledTitle>
              <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <StyledTime>16:00</StyledTime>
            </StyledArticle>

            <StyledArticle>
              <StyledTitle> Article 2 </StyledTitle> 
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              <StyledTime>21:00</StyledTime>
            </StyledArticle>

            <StyledArticle> 
              <StyledTitle> Article 3 </StyledTitle>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              <StyledTime>04:00</StyledTime>
            </StyledArticle>
          </section>
             
         </Paper>
      </div>
    );
  }
}

export default BlogPreview;
