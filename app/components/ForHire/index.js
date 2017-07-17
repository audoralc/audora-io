/**
*
* ForHire
*
*/

import React from "react";
import { Link } from "react-router";
import Paper from "material-ui/Paper";
import glamorous from "glamorous";


const StyledLink = glamorous.a ({ 
  fontSize: "1.25em",
  color: "#673AB7",
  marginLeft: ".75em", 
  ':hover' : { 
    color: '#FAFAFA',
  }, 
})


class ForHire extends React.PureComponent {
  render() {
    const forHire = {
      gridRow: "3 / 3",
      gridColumn: "1 / 4 span",
      maxWidth: '800px',
      width: '100vw',
    };

    const hireContent = {
      background: "#B3E5FC",
      textAlign: "center",
      color: "0",
      padding: "1em",
    };

    const headerStyle = {
      color: "#673AB7"
    };

    const textStyle = {
      fontSize: "1.25em",
      
    };

    const linkBlock ={ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      justifyContent: 'center',
    }

    return (
      <div style={forHire}>

        <Paper zDepth={2}>

          <div style={hireContent}>

            <p>

              <img
                src="http://audora.me/img/emoji/siren.png"
                height="24px"
                width="24px"
                alt="siren emoji"
                />


              <img
                src="http://audora.me/img/emoji/glow-star.png"
                height="24px"
                width="24px"
                alt="glow star emoji"
                />


              <img
                src="http://audora.me/img/emoji/siren.png"
                height="24px"
                width="24px"
                alt="siren emoji"
                />

            </p>

            <h2 style={headerStyle}> For Hire</h2>

              <p style={textStyle}>
              I'm currently looking for a team that needs an entry-level
              front-end or fullstack developer. I'm open to remote & non-remote opportunities; with the later I prefer the Southern US, but for the right fit I'm open to any adventure. 
              </p>
              <p style={textStyle}>
               I'd like to bring the writing experience, soft skills & ethusiasm for creative work from my previous work experience to your team. 
              </p>
              <p style={textStyle}>
              Ideally I would do a lot of
              Javascript work & y'all have a UI developer I could glean some
              design knowledge from.  &nbsp; 
              <img
                src="http://audora.me/img/emoji/wink.png"
                height="24px"
                width="24px"
                alt="winking face emoji"
                />
              </p> 

            
                
              

           

        <div style={linkBlock}> 
            <StyledLink
              href="http://audora.me/storage/chalker-resume.pdf"
              >
              <img
                src="http://audora.me/img/emoji/fire.png"
                height="24px"
                width="24px"
                alt="fire emoji"
                />
              <p>Resume</p>
            </StyledLink>


            <StyledLink
              href="mailto:audoralc@gmail.com">

              <img
                src="http://audora.me/img/emoji/email.png"
                height="24px"
                width="24px"
                alt="email emoji"
                />

             <p> audoralc@gmail.com </p>
            </StyledLink>


            <StyledLink
              href="https://github.com/audoralc">

              <img
                src="http://audora.me/img/emoji/file-box.png"
                height="24px"
                width="24px"
                alt="file box emoji"
                />
              <p>Github</p>
            </StyledLink>

            </div>
          </div>

        </Paper>       

      </div>
    );
  }
}

export default ForHire;
