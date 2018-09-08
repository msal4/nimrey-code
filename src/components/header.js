import g, { Data } from 'glamorous'
import Link from 'gatsby-link';
import { rhythm } from '../utils/typography';
import { css } from 'glamor';

const linkStyle = css({ float: 'right', marginLeft: ".5rem", color: '#a29bfe', textDecoration: 'none', });

const Header = ({ data }) => (
  <span>
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    {/* <Link className={linkStyle} to={`/contact/`}>
      Contact
    </Link> */}
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
  </span>
);

export default Header;
