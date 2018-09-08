import React from 'react'
import { css } from 'glamor';

import Header from '../components/header';
import { rhythm } from '../utils/typography';
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
  background: '#2E333B',
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '50px',
});

export default ({ children, data }) => (
  <div {...containerRule}>
    <Header data={data} />
    {children()}
    <footer {...footerRule}>

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