/**
*
* LaravelTest
*
*/

import React from 'react';

class LaravelTest extends React.PureComponent {
  constructor(props) { 
    super(props); 

    this.state = {
      users: []
    }
  }

  componentDidMount() { 
    fetch('localhost:8000/api/latest-articles')
    
  }
  render() {
    return (
      <div>
        <h1> YOU DID IT </h1>
      </div>
    );
  }
}

export default LaravelTest;

if (document.getElementById('example')) { 
  ReactDOM.render(<LaravelTest />, document.getElementById('example')); 
}