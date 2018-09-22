import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { css } from 'glamor';

const socialLinksRule = css({
  display: 'inline-block',
  '& a': {
    marginRight: '.5rem',
    ':last-child': {
      marginRight: '0px',
    },
  },
});

const urls: string[] = [
  'https://github.com/msal4',
  'https://twitter.com/4msal4',
  'https://medium.com/@msal',
  'https://linkedin.com/in/4msal',
  'https://facebook.com/4msal4',
  'mailto:msal4@outlook.com',
];
const iconColor = '#a29bfe';
const iconStyle = { width: '40', height: '40' };

const createIcons = (props, urls) => {
  let items = [];
  for (let i = 0; i < urls.length; i++)
    items.push(<SocialIcon key={i} color={props.color} style={props.style} url={urls[i]} />);
  return items;
};

const SocialLinks = () => (
  <div style={{ textAlign: 'center' }}>
    <div className='social-links' {...socialLinksRule}>
      {/* <SocialIcon color={iconColor} style={iconStyle} url= />
      <SocialIcon color={iconColor} style={iconStyle} url="" />
      <SocialIcon color={iconColor} style={iconStyle} url="" />
      <SocialIcon color={iconColor} style={iconStyle} url="" />
      <SocialIcon color={iconColor} style={iconStyle} url="" />
      <SocialIcon color={iconColor} style={iconStyle} url="" /> */}
      {createIcons({ color: iconColor, style: iconStyle, }, urls)}
    </div>
  </div>
);

export default SocialLinks;
