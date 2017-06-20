/*
 *
 * Pyxis
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Pyxis extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Pyxis" meta={[ { name: 'description', content: 'Description of Pyxis' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
