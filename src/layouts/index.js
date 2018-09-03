import React from 'react'
import { css } from 'glamor';
import g, { Data } from 'glamorous'
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';


require("./prism-ghcolors.css");

const linkStyle = css({ float: 'right', marginLeft: ".5rem" });


export default ({ children, data }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={1000}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
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
    <span className="social-links">
      <a className={linkStyle} href="https://twitter.com/4msal4" aria-label="Twitter" target='_blank'><svg class="sc-bdVaJa fUuvxv" fill="#a29bfe" width="22px" height="22px" viewBox="0 0 1024 1024" rotate="0" data-reactid="15"><path d="M984 219c-34.8 15.4-72 25.8-111.2 30.6 40-24 70.8-62 85.2-107.2-37.4 22.2-78.8 38.4-123 47-35.4-37.8-85.8-61.4-141.4-61.4-107 0-193.6 86.8-193.6 193.8 0 15.2 1.6 30 5 44.2-161-8-303.8-85.2-399.2-202.6-16.6 28.6-26.2 62-26.2 97.4 0 67.2 34.4 126.6 86.4 161.4-32-0.8-62-9.6-88-24.2 0 0.8 0 1.6 0 2.4 0 94 66.8 172.2 155.4 190-16.2 4.4-33.4 6.8-51 6.8-12.4 0-24.6-1.2-36.4-3.6 24.6 77 96.2 133 181 134.6-66.2 52-149.8 83-240.6 83-15.6 0-31-1-46.2-2.8 85.4 55.6 187.2 87.6 296.4 87.6 356.6 0 551.4-295.4 551.4-551.6 0-8.4-0.2-16.8-0.6-25 37.8-27.4 70.6-61.4 96.6-100.4z"></path></svg></a>
      <a className={linkStyle} href="https://www.github.com/msal4" aria-label="GitHub" target='_blank'><svg class="sc-bdVaJa fUuvxv" fill="#a29bfe" width="22px" height="22px" viewBox="0 0 1024 1024" rotate="0" data-reactid="21"><path d="M512 64c-247.4 0-448 205.8-448 459.4 0 203 128.4 375 306.4 435.8 2.8 0.6 5.2 0.8 7.6 0.8 16.6 0 23-12.2 23-22.8 0-11-0.4-39.8-0.6-78.2-16.8 3.8-31.8 5.4-45.2 5.4-86.2 0-105.8-67-105.8-67-20.4-53-49.8-67.2-49.8-67.2-39-27.4-0.2-28.2 2.8-28.2 0.2 0 0.2 0 0.2 0 45 4 68.6 47.6 68.6 47.6 22.4 39.2 52.4 50.2 79.2 50.2 21 0 40-6.8 51.2-12 4-29.6 15.6-49.8 28.4-61.4-99.4-11.6-204-51-204-227 0-50.2 17.4-91.2 46-123.2-4.6-11.6-20-58.4 4.4-121.6 0 0 3.2-1 10-1 16.2 0 52.8 6.2 113.2 48.2 35.8-10.2 74-15.2 112.2-15.4 38 0.2 76.4 5.2 112.2 15.4 60.4-42 97-48.2 113.2-48.2 6.8 0 10 1 10 1 24.4 63.2 9 110 4.4 121.6 28.6 32.2 46 73.2 46 123.2 0 176.4-104.8 215.2-204.6 226.6 16 14.2 30.4 42.2 30.4 85 0 61.4-0.6 111-0.6 126 0 10.8 6.2 23 22.8 23 2.4 0 5.2-0.2 8-0.8 178.2-60.8 306.4-233 306.4-435.8 0-253.6-200.6-459.4-448-459.4z" ></path></svg></a>
    </span>
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