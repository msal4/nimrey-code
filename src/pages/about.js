import React from "react"
import { css } from 'glamor';


const container = css({
  textAlign: 'center'
});

const msalImg = css({
  margin: '3rem auto',
  borderRadius: '50%',
  width: 'calc(20vw + 60px)',
  height: 'calc(20vw + 60px)',
  boxShadow: '16px 5px 2px 1px rgba(0, 0, 255, .2)',
  MozBoxShadow: '16px 5px 2px 1px rgba(0, 0, 255, .2)',
  WebKitBoxShadow: '16px 5px 2px 1px rgba(0, 0, 255, .2)',
  transition: 'all 1s',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 255, .2)',
    MozBoxShadow: '0px 0px 10px 5px rgba(0, 0, 255, .2)',
    WebKitBoxShadow: '0px 0px 10px 5px rgba(0, 0, 255, .2)',
  }
});

const aboutMe = css({
  padding: '.5rem',
  background: '#2E333B',
  color: 'white',
});

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <div className={container}>
      <img className={msalImg} src='https://avatars1.githubusercontent.com/u/30052233?s=460&v=4' />
      <p className={aboutMe}>
        Hey! I'm Mohammed Salman, a Full Stack Web Developer based in Baghdad
         and this is a blog where I post articles and tutorials about programming.
      </p>
    </div>
  </div>
)


export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  } 
`