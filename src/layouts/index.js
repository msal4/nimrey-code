import React from 'react'
import { css } from 'glamor';
import Helmet from 'react-helmet';

import Header from '../components/header';
import { rhythm } from '../utils/typography';
import SocialLinks from '../components/social-links';
import './index.css';

require("prismjs/themes/prism.css");

const containerRule = css({
  margin: `0 auto`,
  maxWidth: 1000,
  padding: rhythm(2),
  paddingTop: rhythm(1.5),
  '@media screen and (max-width: 800px)': {
    padding: '10px 5px',
  },
});

const footerRule = css({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '50px',
  marginBottom: '10px',
});

const announcementRule = css({
  textAlign: 'center',
  backgroundColor: '#ecf0f1',
  // color: 'white',
  padding: '5px',
  borderRadius: '5px',
  boxShadow: '4px 4px rgba(0, 0, 255, .2)'
});
export default ({ children, data }) => (
  <div {...containerRule}>
    <Helmet
      title="NimreyCode"
      meta={[
        {
          name: "description",
          content: "A blog in which I like to post articles and tutorials about programming to help other developers"
        },
        {
          name: "keywords",
          content:
            "rust, code, programming, backend, tech, python, frontend, developer, development, article, how to, build, javascript, html, css, design, frontend programming, start programming, coding, react, react native, mobile, application, app"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:site",
          content: "@4msal4"
        },
        {
          name: "twitter:creator",
          content: "@4msal4"
        },
        {
          name: "twitter:title",
          content: "NimreyCode"
        },
        {
          name: "twitter:description",
          content: "A blog where I post tutorials about programming"
        },
      ]}
    >
      <html lang="en" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
    </Helmet>
    <p {...announcementRule}>The site is under development🛠</p>
    <Header data={data} />
    {children()}
    <footer {...footerRule}>
      <SocialLinks />
    </footer>
  </div>
);

export const query = graphql`
  query HeaderQuery {
      site {
    siteMetadata {
      title
    }
    }
  }
`;