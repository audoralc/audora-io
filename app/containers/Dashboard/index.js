/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Paper from 'material-ui/Paper';

export default class Dashboard extends React.PureComponent {

//state variables temp hold input

constructor(props) {
  super(props);
  this.state = {
    title: "",
    body: "",
    image:"",
    preview:"",
    }
}
// handle functions

handleTitle = (event) => {
  this.setState({
    title: event.target.value
  })
//double check that state updates
  console.log(this.state.title);
}

handleBody = (event) => {
  this.setState({
    body: event.target.value
  })
}

handleImage = (event) => {
  event.preventDefault();
  //using JS FileReader, can't reassign lets', new = initialize from JS
  let reader = new FileReader();
  //assoc var file with file in array
  let file = event.target.files[0];
  //make sure imgs have properly loaded
  reader.onloadend = () => {
    this.setState({
      image: file,
      preview: reader.result,
    })
  }
  reader.readAsDataURL(file);
}

//take temp stored to backend, condense states into one var
storeArticle = () => {
  var data= new FormData();
  data.append("title", this.state.title);
  data.append("body", this.state.body);
  data.append("image", this.state.image);
  data.append("preview", this.state.image);
/*another JS func used to send & recieve, will put API point -an URL- in quotes  ex= fetch("http://localhost:8000/API/storeArticle")*/
    fetch("http://localhost:8000/api/storeArticle", {
//getting & posting, body is builtin key of fetch
        method: "post",
        body: data,
    })
//now backend needs to respond -> error or naw
// .then runs after fetch goes to backend IS PROMISE
  .then(function(response) {
// convert response back to front lang
return response.json();
})
//now return error or naw
  .then(function(json) {
   if (json.success) {
     console.log("Success!");
   }
   else if (json.error) {
     console.log(":(");
   }
 })
}

  render() {
      const formContainer ={
        background: 'hsl(231, 15%, 18%)',
        height: "100vh",
        }

      const inputContainer={
        fontWeight: 'bold',
        fontSize: '1.25em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
      }

      const titleStyle={
        color: '#f1fa89',
        background: '#44475a',
        fontWeight: 'bold',
        fontSize: '1.25em',
        height: "1.5em",
        width: "50vw",
        margin: "15vh auto 2.5vh 20vh",
        fontFamily: "Cabin",
      }

      const textAreaStyle={
        color: '#bf95f9',
        background: '#44475a',
        width: "70vw",
        margin: "0 auto 2.5vh auto",
        fontSize: '1.25em',
        minHeight: "40vh",
      }

      const imgInputStyle={
        margin: "2.5vh auto 2.5vh 20vh",
        color: "#52fa7c",
        width: "50vw",
      }

      const imagePreview={
        width: "40vw",
        height: "40 vw",
      }

      const buttonStyle={
        margin: "auto",
        color: '#ff7ac6',
        background: '#44475a',
      }

    return (
      <div style={formContainer}>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

        <div style={inputContainer}>
        <input onChange={this.handleTitle} type="text" placeholder="Title" style={titleStyle}/>

        <textArea onChange={this.handleBody} style={textAreaStyle} > </textArea>

        <input onChange={this.handleImage} type="file" style={imgInputStyle}/>

        <img src={this.state.preview} style={imagePreview} />

        <input onTouchTap={this.storeArticle} type="submit" style={buttonStyle}/>
        </div>
      </div>
    );
  }
}
