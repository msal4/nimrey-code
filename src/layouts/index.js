import React from 'react'
import g, { Data } from 'glamorous'
import { rhythm } from '../utils/typography';
import Header from '../components/Header';

require("./prism-ghcolors.css");

export default ({ children, data }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={1000}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Header title={data.site.siteMetadata.title} />
    {children()}
  </g.Div>
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