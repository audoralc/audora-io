/*
 *
 * Blog
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Blog extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
