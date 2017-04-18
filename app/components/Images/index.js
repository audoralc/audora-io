/**
*
* Images
*
*/

import React from 'react';

class Images extends React.PureComponent {
  render() {

  const imgStyle= {
    margin: "1vh 25%",
    width: "50%",
  }
      return (
      <div>
        <img src="http://placehold.it/100x100" style={imgStyle} />
      </div>
    );
  }
}

export default Images;
