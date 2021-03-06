/**
*
* ExampleBoxes
*
*/

import React from 'react';
import glamorous from 'glamorous';



const PicDiv = glamorous.div({
  width: '25vw',
  height: 'auto',
  flexWrap: 'wrap',
})

const StyledImg = glamorous.img({
  ':hover' : {
    opacity: '0',
  },
  display: 'block',
  height: 'auto',
  width: '100%',
  transition: 'all 0.3s',
})

const Overlay1 = glamorous.div({
  ':hover' : {
    backgroundColor: '#900014',
    backgroundImage: 'url(http://i.imgur.com/ZMPk686.png)',
    opacity: '1',
  },
  top: '0',
  left: '0',
  display: 'block',
  height: '30vh',
  padding: '.5em .25em',
  width: '100%',
  opacity: '.75',
  transition: '.5s ease',
  backgroundColor: '#434343',
  color: '#fafafa',
})

const Overlay2 = glamorous.div({
  ':hover' : {
    backgroundColor: '#57003D',
    backgroundImage: 'url(http://i.imgur.com/rZuVd7c.png)',
    opacity: '1',
  },
  top: '0',
  left: '0',
  display: 'block',
  height: '30vh',
  padding: '.5em .25em',
  width: '100%',
  opacity: '.75',
  transition: '.5s ease',
  backgroundColor: '#434343',
  color: '#fafafa',
})


const Overlay3 = glamorous.div({
  ':hover' : {
    backgroundColor: '#411565',
    backgroundImage: 'url(http://i.imgur.com/m61lIBF.png)',
    opacity: '1',
  },
  top: '0',
  left: '0',
  display: 'block',
  height: '30vh',
  padding: '.5em .25em',
  width: '100%',
  opacity: '.75',
  transition: '.5s ease',
  backgroundColor: '#434343',
  color: '#fafafa',
})




class ExampleBoxes extends React.PureComponent {
  render() {

    const ribbonStyle = {
      gridRow: '2 / 2',
      gridColumn: '1 / 6 span',
      background: '#f6edeb',
      textAlign: 'center',
      padding: '10vh 0',
    }

    const imgRow = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      margin: '5%',
      height:'auto',
    }

    const headerStyle ={
      fontSize: '2.25em',
      color: '#0c3a7f',
    }

    const pStyle = {
      textAlign: 'justify',
      padding: '.5em',
      fontSize: '.75em',
    }

    return (
      <div style={ribbonStyle}>
        <h2 style={headerStyle}>
          Past Boxes
        </h2>


        <div style={imgRow}>

          <PicDiv>
            <Overlay1>
              <h3> February </h3>
              <h4 style={{color: '#fafafa'}}> LUST </h4>
              <p style={pStyle}>
                Just in time for Valentine's this box features everything one would need for the most amorous celebration of the holiday. </p>
              </Overlay1>
            </PicDiv>

            <PicDiv>
              <Overlay2>
                <h3 style={{margin: '0'}}> Spring </h3>
                <h3 style={{margin: '0'}}> (Late March - Early April) </h3>
                <h4 style={{margin: '.5em 0 0 0', color: '#fafafa'}}> GLUTTONY </h4>
                <p style={pStyle}> Spring's bounty allows for a little over indulgence. This box is filled with rich drinks & edibles fit for a feast.</p>
                </Overlay2>
              </PicDiv>

              <PicDiv>
                <Overlay3>
                  <h3 style={{margin: '0'}}> Early Summer </h3>
                  <h3 style={{margin: '0'}}>(Late May - Early June) </h3>
                  <h4 style={{margin: '.5em 0 0 0', color: '#fafafa'}}>  PRIDE </h4>
                  <p style={pStyle}> This time of year Pride is tranformed from sin to celebration. This box has 2 versionsto chose from: one for Pride of the rainbow variety & one for regular old vanity. </p>
                </Overlay3>
              </PicDiv>
            </div>
            
          </div>
        );
      }
    }

    export default ExampleBoxes;
