/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import Responsive from 'react-responsive';
import Header from 'components/Header';
import HomeAboutMe from 'components/HomeAboutMe'; 
import Skills from 'components/Skills'; 
import Projects from 'components/Projects'; 
import BlogPreview from 'components/BlogPreview';
import Footer from 'components/Footer';

import LaravelTest from 'components/LaravelTest'; 




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

export default class Home extends
 React.PureComponent {


  render() {
   const pageGrid = { 
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', 
      gridTemplateRows: '15vh auto auto auto 1fr', 
      gridRowGap: '10vh',       
    }     

  return (

    <div style={pageGrid}>

      <Helmet
        title="a.chalker"
        meta={[ { name: 'description', content: 'Description of Home' }]}/>

      <Header></Header> 

      <HomeAboutMe></HomeAboutMe>  
      <Skills></Skills>

      <Projects></Projects>

      <BlogPreview></BlogPreview>  

      <Footer> </Footer>
</div>
    );
  }
}
