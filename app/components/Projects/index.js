/**
*
* Projects
*
*/


import React from 'react';
import {Link} from 'react-router';
import Paper from 'material-ui/Paper';
import glamorous from 'glamorous';
import ReactTooltip from 'react-tooltip';

const StyledHeader = glamorous.h2 ({
  color: "#673AB7",
  textAlign: 'center',
})

const StyledProjectHeader = glamorous.h3 ({
  color: "#424242",
})

const StyledLink = glamorous.a ({
  color: '#0091EA',
  fontWeight: '600',
  lineHeight: '1.5em',
  ':hover' : { 
    color: "#673AB7",
  }
})

const Card = glamorous.div ({
  backgroundImage: 'url(http://i.imgur.com/jxZe93K.png)',
  backgroundPosition: 'cover',
  margin: '10vw auto',
  minHeight: '525px',
  width: '90%',
  maxWidth: '90vw',
  display: 'flex', 
  flexDirection: 'row',
  flexWrap: 'wrap', 
  justifyContent: 'space-between',
})

const colors= {
  white: "#FAFAFA",
  black: "#424242",
  lightPurple: "#D1C4E9",
  accentPurple: "#9575CD",
  deepPurple: "#673AB7",
  lightBlue: "#B3E5FC",
  brightBlue:"#00B0FF",
  lightGreen: "#C8E6C9",
  darkGreen: "#00C853",
}


class Projects extends React.PureComponent {
  render() {

    const projectBlock = {
      gridRow: '5 / 5',
      gridColumn: '1 / 4 span',
      maxWidth: '100vw',
    }

    const headerBlock ={
      margin: '0 auto',
    }

    const specialProject = {
      textAlign: 'center',
      maxWidth: '50vw',
      margin: '5% auto 0 auto',
    }


    const cardBlock ={
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      maxWidth: '95vw',
    }

      const cardText = {
        margin: '0 auto',
        width: '60%',
      }

const cardHeader ={}

    const linkBlock = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      minHeight: '150px',
    }

    const picStyle = {
      margin: 'auto',
      
    }

    const pStyle ={ 
      textAlign: 'justify', 
    }

    return (
      <div style={projectBlock}>



        <div style={headerBlock}>

          <StyledHeader> <img
                src="http://audora.me/img/emoji/laptop.png"
                height="24px"
                width="24px"
                alt="laptop emoji"
                /> My Work </StyledHeader>
          <div style={specialProject}>
            <h3>
              This Site
            </h3>
            <StyledLink href="/this-site"><img
                src="http://audora.me/img/emoji/shooting-star.png"
                height="24px"
                width="24px"
                alt="shooting star emoji"
                /> Case Study & To Do <img
                src="http://audora.me/img/emoji/shooting-star.png"
                height="24px"
                width="24px"
                alt="shooting star emoji"
                /> </StyledLink>
          </div>
        </div>


        <section style={cardBlock}>

          <Card>
            <div style={picStyle}>
              <Link href="/sumo-redo">
                <Paper zDepth={3} style={{width:'300px'}}>
                  <img
                    src="http://audora.me/img/srl-front.png"
                    
                    width='100%' 
                    alt="Sumo Robot League homepage"/>
                </Paper>
              </Link>
            </div>
                    
          <div style={cardText}> 
            
            <div style={cardHeader}>
              <StyledProjectHeader>  
                 <StyledLink href="http://sumorobotleague.com" target="_blank" >sumorobotleague.com </StyledLink>
                 Redesign 
              </StyledProjectHeader>
            </div>


            <div style={linkBlock}>
              <StyledLink href="https://github.com/audoralc/sumorobot-store-clientside">  Github &nbsp; <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40" ><g><path d="m12.853333333333333 30.479999999999997l-1.040000000000001 1.0399999999999991q-0.20800000000000018 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-9.706666666666667-9.706666666666667q-0.21066666666666456-0.21066666666666478-0.21066666666666456-0.4799999999999969t0.20799999999999996-0.4800000000000004l9.709333333333333-9.706666666666667q0.20800000000000018-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l1.040000000000001 1.0399999999999991q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004l-8.188000000000002 8.186666666666667 8.186666666666666 8.186666666666664q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004z m12.31333333333333-22.230666666666664l-7.7706666666666635 26.89733333333333q-0.08399999999999963 0.26933333333333564-0.32266666666666666 0.4053333333333313t-0.4893333333333345 0.053333333333334565l-1.293333333333333-0.35600000000000165q-0.26933333333333387-0.08400000000000318-0.4053333333333331-0.3226666666666631t-0.05333333333333279-0.5106666666666655l7.773333333333333-26.896q0.08266666666666822-0.27066666666666706 0.3200000000000003-0.4066666666666663t0.4906666666666659-0.05333333333333368l1.293333333333333 0.35599999999999987q0.2693333333333321 0.08399999999999963 0.4053333333333349 0.32266666666666666t0.053333333333334565 0.5106666666666664z m13.686666666666667 13.564l-9.706666666666667 9.706666666666667q-0.2079999999999984 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-1.0399999999999991-1.0399999999999991q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l8.189333333333337-8.186666666666667-8.186666666666667-8.186666666666666q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l1.0426666666666655-1.040000000000001q0.2079999999999984-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l9.706666666666663 9.706666666666667q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.2079999999999984 0.4800000000000004z"></path></g></svg>
              </StyledLink>

              <StyledLink href="/sumo-redo"> <img
                src="http://audora.me/img/emoji/shooting-star.png"
                height="24px"
                width="24px"
                alt="shooting star emoji"
                />Case Study </StyledLink>
            </div>

            <p> 
              Revamp of existing website with modern React front & Laravel backend. Design from scratch. Allows administrators to fully control inventory & categorize customers to better track trends relating to educators &students via CRUD-based dashboards. Multiple tasks grouped together on the same page using components within Material UI tabs.
            </p>
          </div>
          </Card>

          <Card>
            <div style={picStyle}>
               <Link href="/pyxis">
                <Paper zDepth={3} style={{width:'300px'}}>
                  <img
                    src="http://audora.me/img/pyxis-front.png"
                    width="100%"
                    alt="pyxis subscription box homepage"/>
                </Paper>
              </Link>
            </div>
                    
          <div style={cardText}>             
            <div style={cardHeader}>
              <StyledProjectHeader>  
                 pyxis
              </StyledProjectHeader>
            </div>

            <div style={linkBlock}>
              <StyledLink href="https://github.com/audoralc/pyxis">  Github &nbsp;
                <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40" ><g><path d="m12.853333333333333 30.479999999999997l-1.040000000000001 1.0399999999999991q-0.20800000000000018 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-9.706666666666667-9.706666666666667q-0.21066666666666456-0.21066666666666478-0.21066666666666456-0.4799999999999969t0.20799999999999996-0.4800000000000004l9.709333333333333-9.706666666666667q0.20800000000000018-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l1.040000000000001 1.0399999999999991q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004l-8.188000000000002 8.186666666666667 8.186666666666666 8.186666666666664q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004z m12.31333333333333-22.230666666666664l-7.7706666666666635 26.89733333333333q-0.08399999999999963 0.26933333333333564-0.32266666666666666 0.4053333333333313t-0.4893333333333345 0.053333333333334565l-1.293333333333333-0.35600000000000165q-0.26933333333333387-0.08400000000000318-0.4053333333333331-0.3226666666666631t-0.05333333333333279-0.5106666666666655l7.773333333333333-26.896q0.08266666666666822-0.27066666666666706 0.3200000000000003-0.4066666666666663t0.4906666666666659-0.05333333333333368l1.293333333333333 0.35599999999999987q0.2693333333333321 0.08399999999999963 0.4053333333333349 0.32266666666666666t0.053333333333334565 0.5106666666666664z m13.686666666666667 13.564l-9.706666666666667 9.706666666666667q-0.2079999999999984 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-1.0399999999999991-1.0399999999999991q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l8.189333333333337-8.186666666666667-8.186666666666667-8.186666666666666q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l1.0426666666666655-1.040000000000001q0.2079999999999984-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l9.706666666666663 9.706666666666667q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.2079999999999984 0.4800000000000004z"></path></g></svg> </StyledLink>

                <StyledLink
                  href="/pyxis"
                  data-tip="Desktop Only Please"> <img
                src="http://audora.me/img/emoji/eyes.png"
                height="24px"
                width="24px"
                alt="eyes emoji"
                /> &nbsp; Front Page Demo </StyledLink>

                <StyledLink href="/pyxis-study"> <img
                src="http://audora.me/img/emoji/shooting-star.png"
                height="24px"
                width="24px"
                alt="shooting star emoji"
                />Case Study </StyledLink>
            </div>
            <p>Did you know Pandora didn't actually open a box? In the original texts she opened a storage jar, but thanks to Erasmus in the 1500s it was changed to 'pyxis' the Latin word for box. In this group project, my partner and I designed subscription box service based on marketing proposal. Pyxis delivers 7 boxes a year, each one themed for a deadly sin. I designed and implemented the 
client-side using React & CSS Grid.</p>
            </div>  
          </Card>
          

          <Card>
            <div style={picStyle}>
           <Link href="/semper-study">

                <Paper zDepth={3} style={{width:'300px'}}>

                  <img
                    src="http://audora.me/img/semper-wire.png"
                    width="100%"                    
                    alt="semper disco wireframe"/>

                </Paper>

              </Link>
            </div>
                    
          <div style={cardText}> 
            
            <div style={cardHeader}>
              <StyledProjectHeader> semper-disco (<img
                src="http://audora.me/img/emoji/ruler.png"
                height="24px"
                width="24px"
                alt="ruler emoji"
                /> In Progress)</StyledProjectHeader>
            </div>


           <div style={linkBlock}>
                <StyledLink href="https://github.com/audoralc/semper-disco">  Github &nbsp;
                  <svg fill="currentColor" width="24" height="24" viewBox="0 0 40 40" ><g><path d="m12.853333333333333 30.479999999999997l-1.040000000000001 1.0399999999999991q-0.20800000000000018 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-9.706666666666667-9.706666666666667q-0.21066666666666456-0.21066666666666478-0.21066666666666456-0.4799999999999969t0.20799999999999996-0.4800000000000004l9.709333333333333-9.706666666666667q0.20800000000000018-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l1.040000000000001 1.0399999999999991q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004l-8.188000000000002 8.186666666666667 8.186666666666666 8.186666666666664q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.20800000000000018 0.4800000000000004z m12.31333333333333-22.230666666666664l-7.7706666666666635 26.89733333333333q-0.08399999999999963 0.26933333333333564-0.32266666666666666 0.4053333333333313t-0.4893333333333345 0.053333333333334565l-1.293333333333333-0.35600000000000165q-0.26933333333333387-0.08400000000000318-0.4053333333333331-0.3226666666666631t-0.05333333333333279-0.5106666666666655l7.773333333333333-26.896q0.08266666666666822-0.27066666666666706 0.3200000000000003-0.4066666666666663t0.4906666666666659-0.05333333333333368l1.293333333333333 0.35599999999999987q0.2693333333333321 0.08399999999999963 0.4053333333333349 0.32266666666666666t0.053333333333334565 0.5106666666666664z m13.686666666666667 13.564l-9.706666666666667 9.706666666666667q-0.2079999999999984 0.2079999999999984-0.4800000000000004 0.2079999999999984t-0.47733333333333405-0.2079999999999984l-1.0399999999999991-1.0399999999999991q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l8.189333333333337-8.186666666666667-8.186666666666667-8.186666666666666q-0.20933333333333337-0.20933333333333337-0.20933333333333337-0.4800000000000004t0.2079999999999984-0.4800000000000004l1.0426666666666655-1.040000000000001q0.2079999999999984-0.20800000000000018 0.4800000000000004-0.20800000000000018t0.47733333333333405 0.20800000000000018l9.706666666666663 9.706666666666667q0.20933333333333337 0.20933333333333337 0.20933333333333337 0.4800000000000004t-0.2079999999999984 0.4800000000000004z"></path></g></svg>
                </StyledLink>

                <StyledLink href="/semper-study"> <img
                src="http://audora.me/img/emoji/shooting-star.png"
                height="24px"
                width="24px"
                alt="shooting star emoji"
                />Design Plan </StyledLink>
              </div>

            <p style={pStyle}> Semper disco is Latin for "always, I learn". Going through a coding bootcamp makes you viscerally aware of the sheer amount of things you can learn (or at least be introduced to) in one day. I decided to start recording what I'd learned inside & outside of the classroom, and then, make something out of it. I've planned & am actively developing a one-page React web app that uses animation & page transitions to produce a
mind map-like visualization.
            </p>
          </div>
          </Card>

          </section>       
        </div>
      );
    }
  }

  export default Projects;
