/*
*
* Pyxis
*
*/


import React from 'react';
import Helmet from 'react-helmet';
import HomeHeadingContainer from 'components/PyxisComps/HomeHeadingContainer';
import ExampleBoxes from 'components/PyxisComps/ExampleBoxes';
import TierSystem from 'components/PyxisComps/TierSystem';
import HowItWorks from 'components/PyxisComps/HowItWorks';
import HomeSignUpRib from 'components/PyxisComps/HomeSignUpRib';
import Footer from 'components/PyxisComps/Footer';

export default class Home extends React.PureComponent {
  render() {
    const pageGrid = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr auto auto auto auto 10%',
    }

    return (
      <div style={pageGrid}>

        <Helmet
          title="Pyxis Home Demo"
          meta={[ { name: 'description', content: 'Description of Pyxis Home Demo' }]}/>

        <HomeHeadingContainer>
        </HomeHeadingContainer>

        <ExampleBoxes>
        </ExampleBoxes>

        <TierSystem>
        </TierSystem>

        <HowItWorks>
        </HowItWorks>

        <HomeSignUpRib>
        </HomeSignUpRib>

        <Footer>
        </Footer>

      </div>
    );
  }
}
