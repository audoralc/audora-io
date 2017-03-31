/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>


      </div>
    );
  }
}
