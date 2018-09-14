import react from 'react';
import { SocialIcon } from 'react-social-icons';
import { css } from 'glamor';

const socialLinksRule = css({

});

const SocialLinks = () => (
  <span {...socialLinksRule}>
    <SocialIcon url="https://twitter.com/4msal4" />
    <SocialIcon url="https://github.com/msal4" />
    <SocialIcon url="https://medium.com/@msal" />
    <SocialIcon url="https://linkedin.com/in/4msal" />
    <SocialIcon url="https://fb.com/4msal4" />
  </span>
);

export default SocialLinks;
