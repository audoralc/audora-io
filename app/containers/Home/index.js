/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';
import Header from 'components/Header';
import HomeAboutMe from 'components/HomeAboutMe'; 
import ForHire from 'components/ForHire'; 
import Skills from 'components/Skills'; 
import Projects from 'components/Projects'; 
import BlogPreview from 'components/BlogPreview';
import Footer from 'components/Footer';


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

const Default = ({ children }) => <Responsive minWidth={769} children={children} />;

export default class Home extends
 React.PureComponent {


  render() {
   const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto', 
      gridTemplateRows: 'auto auto auto auto auto 1fr',
      gridGap: '5vh',    
    }     

   

  return (

    <div>
      <Helmet
        title="a.chalker"
        meta={[ { name: 'description', content: 'Description of Home' }]}/>   
        <div style={pageGrid}> 
          <Header></Header> 
          <HomeAboutMe></HomeAboutMe>
          <ForHire> </ForHire>  
          <Skills></Skills>
          
          <Projects></Projects>
       
          <Footer> </Footer>
        </div>

</div>
    );
  }
}
