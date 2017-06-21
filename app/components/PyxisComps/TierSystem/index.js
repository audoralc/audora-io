/**
*
* TierSystem
*
*/

import React from 'react';
import glamorous from 'glamorous'; 





const DetailGroup = glamorous.div({
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'flex-end',       
    flexWrap: 'wrap',       
    margin: '.5em 0',
    color: "#FFECDB", 
})
    const StyledHeader = glamorous.h3 ({
        minWidth: '80px', 
        color: "#FAFAFA",
        borderTop: '4px solid #434343',
        paddingTop: '.5em',   
        fontFamily: 'Lato, sans serif',
        fontSize: '1.15em',
        marginTop: '-.5em',    
    })

    const SmallBlock = glamorous.div ({ 
    background: '#0c3a7f',
    height: '14vw', 
    width: '14vw',
    textAlign: 'center',
    fontSize: '1.15em',
    fontWeight: 'bold',
  })

    const MediumBlock = glamorous.div({
          height: '16vw', 
          width: '16vw', 
          background: '#0c3a7f',
          textAlign: 'center',
          fontSize: '1.15em',
          fontWeight: 'bold',
    })

    const LargeBlock = glamorous.div({
          height: '20vw', 
          width: '20vw', 
          background: '#0c3a7f',
          textAlign: 'center',
          fontSize: '1.15em',
          fontWeight: 'bold',
    })



class TierSystem extends React.PureComponent {
  render() {

    const tierRibbon = { 
        background: '#f6edeb',
        gridRow: '3 / 3', 
        gridColumn: '1 / 6 span',
        padding: '5% 0',       
      }
    
        const tierDetails = {             
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          margin: '0 auto', 
          paddingBottom: '5%',     
        }

        const h2Style = {
          margin: '1em',
          fontSize: '1.75em',
        }

    return (

      <div style={tierRibbon}> 

        <h2 style={h2Style}> Choose your level</h2>

        <div style={tierDetails}>    
          

          <DetailGroup>           
            <SmallBlock>              
             <p> 3 items  </p>
             <p> 3 x $39</p>
              <StyledHeader> Small </StyledHeader> 
            </SmallBlock>   
          </DetailGroup> 

          <DetailGroup>
           
            <MediumBlock>
               <p>5 items </p>
               <p>3 x $59</p>
               <StyledHeader> Medium </StyledHeader>
              </MediumBlock> 
          </DetailGroup> 

          <DetailGroup>
            
           <LargeBlock>
              <p>7 items </p>
              <p>3 x $79</p>
              <StyledHeader> Large </StyledHeader>
              </LargeBlock>     
          </DetailGroup> 
        

        </div>

      </div>
    );
  }
}

export default TierSystem;
