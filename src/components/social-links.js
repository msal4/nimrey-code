import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { css } from 'glamor';

const socialLinksRule = css({
  display: 'inline-block',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  '& a': {
    marginRight: '.5rem',
    ':last-child': {
      marginRight: '0px',
    },
  },
});

const iconColor = '#a29bfe';
const iconStyle = { width: '40', height: '40' };
const SocialLinks = () => (
  <div className='social-links' {...socialLinksRule}>
    <SocialIcon color={iconColor} style={iconStyle} url="https://github.com/msal4" />
    <SocialIcon color={iconColor} style={iconStyle} url="https://twitter.com/4msal4" />
    <SocialIcon color={iconColor} style={iconStyle} url="https://medium.com/@msal" />
    <SocialIcon color={iconColor} style={iconStyle} url="https://linkedin.com/in/4msal" />
    <SocialIcon color={iconColor} style={iconStyle} url="https://facebook.com/4msal4" />
    <SocialIcon color={iconColor} style={iconStyle} url="mailto:msal4@outlook.com" />
  </div>
);

export default SocialLinks;
