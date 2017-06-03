/**
*
* BodyContainer
*
*/

import React from 'react';

class BodyContainer extends React.PureComponent {
  render() {

    const bodyContainer = {
      gridRow: '2 / 4 span', 
      gridColumn: '1 / 6 span', 
    }
    
    return (
      <div style={bodyContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default BodyContainer;
