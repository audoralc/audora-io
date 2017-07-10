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
import Responsive from 'react-responsive';

const StyledArticle = glamorous.section ({ 
  display: 'flex', 
  flexDirection: 'row',  
  justifyContent: 'space-between',
  width: '90vw',  
})

const MobileStyledArticle = glamorous.section ({ 
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

const Default = ({ children }) => <Responsive minWidth={768} children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;

export default class Blog extends React.PureComponent {
  constructor(props){
    super(props); 
    this.state={
      articles:[], 
    }
  }

 componentWillMount(){
    fetch('http://localhost:8000/api/getArticles')

    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      this.setState({
        articles:json
      })
    }.bind(this))
  }

  render() {
    const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr', 
      gridTemplateRows: '15vh 1fr 1fr', 
      gridRowGap: '5vh',     
    }   

      const blogStyle= {
        display: "flex",
        flexDirection:"column",
        gridRow: '2 / 3',
        gridColumn: '1 / 4 span',
        margin: '0 2.5vw', 
        minHeight: '85vh',  
      }
        const blogRow ={ 
          display: 'flex',
          flexDirection: 'row',
               
        }

        const textBlock = {          
          background: "#D1C4E9",
          margin: "5%",
          padding: '1em',
          width: '70vw',
        }

        const imageStyle = {
          margin: "5%",
        }

        const mobileImageStyle = {
          margin: "0 5% 5% 0",
      
        }


    return (

      <div>
        <Helmet
          title="Blog"
          meta={[ { name: 'description', content: 'Description of Blog' }]}/>

      <Mobile style={pageGrid}> 
          <Header> </Header>

        <main style={blogStyle}>

                     
              {this.state.articles.map((a, i) => (
            <div>  
              <Link to={'/${a.id}'} style={imageStyle}>
                <img src={a.image} />
                </Link>  

              <Paper zDepth={2} style={textBlock} key={i}>       
                <Link to={'/${a.id}'}>
                <StyledTitle> {a.title} </StyledTitle>
                </Link>

                <article>
                  {a.body}                 
                </article>
                 <StyledTime>17:00</StyledTime>
              </Paper>
              </div>              
              ))}

                    
        </main>
        <Footer></Footer>
      </Mobile>

      <Default style={pageGrid}>
        <Header> </Header>

        <main style={blogStyle}>

         
                        
              {this.state.articles.map((a, i) => (
                <StyledArticle> 
              <Link to={'/blog/${a.slug}'} style={imageStyle}>
                <img src={a.image} />
                </Link> 

              <Paper zDepth={2} style={textBlock} key={i}>         
                <Link to={'/blog/${a.slug}'}>
                <StyledTitle> {a.title} </StyledTitle>
                </Link>

                <article>
                  {a.blurb}
                </article>
                 <StyledTime>{a.time}</StyledTime>
              </Paper>
            </StyledArticle>              
              ))}           
          
                           
        </main>
        <Footer></Footer>
      </Default> 

      </div>
    );
  }
}
