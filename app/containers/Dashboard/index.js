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
    blurb: "", 
    slug: "", 
    date: "", 
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

handleBlurb = (event) => { 
  this.setState({ 
    blurb: event.target.value
  })
}

handleSlug = (event) => { 
  this.setState({ 
    slug: event.target.value
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
  var data = new FormData();
  data.append("title", this.state.title);
  data.append("body", this.state.body);
  data.append("blurb", this.state.blurb);
  data.append("slug", this.state.slug);
  data.append("date", this.state.date);
  data.append("image", this.state.image);
  data.append("preview", this.state.image);
/*another JS func used to send & recieve, will put API point -an URL- in quotes  ex= fetch("http://audora.me:8000/API/storeArticle")*/
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
     console.log(json.success);
   }
   else if (json.error) {
     console.log(json.error);
   }
 })
}

  render() {
      const formContainer ={
        height: "100vh",
        background: "rgba(19,85,197,.5)",
        }

      const inputContainer={
        fontWeight: 'bold',
        fontSize: '1.25em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
      }

      const titleStyle={
        background: "#FAFAFA",
        fontWeight: 'bold',
        fontSize: '1.25em',
        height: "1.5em",
        width: "50vw",
        margin: "15vh auto 2.5vh 20vh",
        fontFamily: "Cabin",
      }

      const textAreaStyle={
        background: "#FAFAFA",
        width: "70vw",
        margin: "0 auto 2.5vh auto",
        fontSize: '1.25em',
        minHeight: "20vh",
      }

      const imgInputStyle={
        margin: "2.5vh auto 2.5vh 20vh",
        width: "50vw",
      }

      const imagePreview={
        marginLeft:"20vh",
        width: "20vw",
        height: "20%",
      }

      const buttonStyle={
        margin: "auto",
        background: "#FAFAFA",
      }

    return (
      <div style={formContainer}>

        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

        <div style={inputContainer}>
        <input onChange={this.handleTitle} type="text" style={titleStyle}/>

        <textArea onChange={this.handleBody} style={textAreaStyle} > </textArea>

        <input onChange={this.handleBlurb} type="text" />

        <input onChange={this.handleSlug} type="text" />

        <input onChange={this.handleImage} type="file" style={imgInputStyle}/>

        <img src={this.state.preview} style={imagePreview} />

        <input onTouchTap={this.storeArticle} type="submit" style={buttonStyle}/>
        </div>
      </div>
    );
  }
}
