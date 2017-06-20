/*
 *
 * SemperDisco
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SemperDisco extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="SemperDisco" meta={[ { name: 'description', content: 'Description of SemperDisco' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
