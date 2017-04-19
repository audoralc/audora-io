/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class SignIn extends React.PureComponent {
  render() {

    const divStyle= {
      background: '#ffffff',
      height: '100vh',
    }
      const ribbonStyle={
        height:'40vh',
        width: '100%',
        background: '#00BFA5',
      }

      const formContainer={
        display: 'flex',
        flexDirection: 'column',
        margin: '-10vh auto 0 auto',
        width: '50vw',
      }
        const labelRibbon= {
          background:'#1355C5',
          height: '10%',
        }
          const labelStyle={
            padding: '0 .5em',
            margin: 'auto .5em',
            lineHeight: "2em",
            color: "#FAFAFA",
            fontSize: "1.5em",
          }

        const formStyle={
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          flexShrink: '0',
          padding: "2em",
        }

          const inputStyle= {
            background: 'white',
            margin: '0 auto',
            padding: '1em',
          }
            const textFieldStyles= {
               errorStyle: {
                 color: '#FFA361',
               },
              underlineStyle: {
                borderColor: '#FFA361',
              },
              floatingLabelStyle: {
                color: '#FFA361',
              },
              floatingLabelFocusStyle: {
                color: '#1355C5',
              },
            };

          const buttonStyle= {
            margin: '1em auto',
          }

    return (
      <div style={divStyle}>

        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

        <div style={ribbonStyle}> </div>

    <div style={formContainer}>
      <Paper zDepth={2} >
        <form>

          <div style={labelRibbon}>
            <label style={labelStyle}> Login </label>
          </div>

          <fieldset style={formStyle}>
            <legend> </legend>

            <TextField type="email" name="email" placeholder="email" style={inputStyle} underlineStyle={textFieldStyles.underlineStyle}/>

            <TextField type="text" name="password" placeholder="password" style={inputStyle} underlineStyle={textFieldStyles.underlineStyle}/>

            <FlatButton label="Submit" primary={true} style={buttonStyle}  hoverColor="rgba(255, 163, 97, .5)">  </FlatButton>
          </fieldset>
        </form>
      </Paper>
    </div>

      </div>
    );
  }
}
