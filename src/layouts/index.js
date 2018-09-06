import React from 'react'
import { css } from 'glamor';
import g, { Data } from 'glamorous'
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';
import './index.css';

require("prismjs/themes/prism.css");

const linkStyle = css({ float: 'right', marginLeft: ".5rem", color: '#a29bfe', textDecoration: 'none', });
const containerStyle = css({
  margin: `0 auto`,
  maxWidth: 1000,
  padding: rhythm(2),
  paddingTop: rhythm(1.5),
});

export default ({ children, data }) => (
  <div className={containerStyle + ' container'}>
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <Link className={linkStyle} to={`/contact/`}>
      Contact
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    {children()}
    <footer id='footer'>

    </footer>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;