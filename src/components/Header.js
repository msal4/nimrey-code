import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';
import { css } from 'glamor';
import { rhythm } from '../utils/typography';
import SocialLinks from './SocialLinks';

const linkStyle = css({ float: 'right', marginLeft: ".5rem" });

const Header = ({ title }) => (
  <div>
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {title}
      </g.H3>
    </Link>

    <Link className={linkStyle} to={`/contact/`}>
      Contact
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    <SocialLinks />
  </div>
);

export default Header;

