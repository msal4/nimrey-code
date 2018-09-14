import g, { Data } from 'glamorous'
import Link from 'gatsby-link';
import { css } from 'glamor';

import { rhythm } from '../utils/typography';
import SocialLinks from '../components/social-links';

const linkRule = css({ float: 'right', marginLeft: ".5rem", color: '#a29bfe', textDecoration: 'none', });
const contaierRule = css({
  '& .social-links': {
    '@media screen and (max-width: 800px)': {
      display: 'none',
    },
  },
});
const Header = ({ data }) => (
  <div {...contaierRule}>
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <SocialLinks />
    <Link {...linkRule} to={`/about/`}>
      About
    </Link>
  </div>
);

export default Header;
