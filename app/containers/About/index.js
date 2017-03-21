/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class About extends React.PureComponent {
  render() {
    const divStyle={

    }
    return (
      <div style={divStyle}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <header>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
          </nav>
        </header>

        <main></main>

        <footer></footer>
      </div>
    );
  }
}
