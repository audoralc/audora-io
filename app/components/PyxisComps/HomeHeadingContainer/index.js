/**
*
* HomeHeadingContainer
*
*/

import React from 'react';
import Header from 'components/PyxisComps/Header';
import glamorous from 'glamorous';

const PicDiv = glamorous.div({
  width: '50%',
  position: 'relative',
  margin: '5% auto',
})


const StyledImg = glamorous.img({
  ':hover' : {
    opacity: '1',
  },
  display: 'block',
  height: 'auto',
  width: '100%',
  transition: 'all 0.3s',
  backgroundColor: '#979216',
})

const Overlay1 = glamorous.div({
  ':hover' : {
    opacity: '0',
  },
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  opacity: '.75',
  transition: '.5s ease',
  backgroundColor: '#434343',
})





class HomeHeadingContainer extends React.PureComponent {
  render() {
    const bodyStyle = {
      gridColumn: '1 / span 6',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '10% 1fr 1fr 1fr',
      height: '100%',
    }

    const leftStyle = {
      gridRow: '2 / 4 span',
      gridColumn: '1 / 3 span',
      background: '#4d3b3b',
    }

    const insetBoxRibbon = {
      background: '#FFECDB',
      margin: '5% 10% 0 10%',
      height: '75vh',
      width: '65%',
    }

    const rightStyle= {
      gridRow: '2 / 4 span',
      gridColumn: '4 / 6 span',
      background: '#f6edeb',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }

    const headerBlock = {
      padding: '2em',
      fontFamily: '"Crimson Text", serif',
      marginBottom: '10vh',
    }

    const h1Style = {
   
      color: '#000000',
      fontSize: '2.5em',
    }

    const h2Style ={
      margin: '.5em 0',
      color: '#017B63',
      fontStyle: 'italic',
    }

    const logoStyle = {
      float: 'right',
      marginTop: '-30%',
    }

    const pStyle = { 
      
    }


    const currentBoxDes = {
      color: '#fafafa',
      textAlign: 'center',
      padding: '1em',
      fontSize: '.75em',
    }

    const currentTitleStyle = {
      color: '#0c3a7f',
      fontFamily: 'Lato, sans-serif',
      textAlign: 'center',
    }

    return (
      <div style={bodyStyle}>
        <Header>
        </Header>

        <div style={leftStyle}>

          <div style={insetBoxRibbon}>
            <img
              src="http://audora.me/img/pandora.jpg"
              height="80%" />
          </div>
          <div>
          </div>
        </div>


        <div style={rightStyle}>
          <div style={headerBlock}>
            <h1 style={h1Style}> man's folly is your gain </h1>
            <h2 style={h2Style}> bespoke luxury boxes based on the 7 sins </h2>
            </div>

            <div>
              <h2 style={currentTitleStyle}> Current Box </h2>
                <PicDiv>
                  <StyledImg src="http://i.imgur.com/U14PRQb.png"/>

                  <Overlay1>
                    <div style={currentBoxDes}>
                      <h3> Midsummer (Late June - Early July) </h3>
                      <h4 style={{color: '#fafafa'}}> GREED </h4>
                      <p style={pStyle}>All that glitters lies within this box. Luxurious items made of luxurious materials. </p>
                      </div>
                    </Overlay1>
                  </PicDiv>
                </div>


              </div>

            </div>

          );
        }
      }

      export default HomeHeadingContainer;
