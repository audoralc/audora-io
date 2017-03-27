/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
        const containerStyle={
          background: "hsl(231, 15%, 18%)",
          fontFamily: "Raleway",
          height: "100vh",
          overflow: "hidden",

        }
            const textBlock= {
              margin: "auto",
            }
                const headerFont={
                  color: "hsl(0, 100%, 67%)",


        }

    return (
      <div style={containerStyle}>
        <div style={textBlock}>
          <h1 style={headerFont}>
            404: Not Found 
          </h1>
        </div>
      </div>
    );
  }
}
