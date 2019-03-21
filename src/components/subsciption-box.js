import React from 'react';
import { TinyLetter } from 'react-tinyletter';
import { css } from 'glamor';

const subBoxRule = css({
  margin: '1rem auto',
  width: '50%',
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#fafafb',
  boxShadow: '4px 4px rgba(0, 0, 255, .2)',
  '@media screen and (max-width: 800px)': {
    width: '90%',
  },
});
const subBoxItem = css({
  display: 'block',
  border: 'none',
  backgroundImage: 'none',
  margin: 'auto',
  padding: '5px',
  WebKitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  transition: 'all .3s',
});
const subBoxLabel = css({
  fontSize: '1.5rem',
  background: '#2E333B',
  color: '#e2d4fd',
  padding: '7px',
});
const subBoxEmail = css({
  backgroundColor: '#dfe4ea',
  color: '#9781c0',
  width: '100%',
  margin: '1rem 0',
  borderRadius: '10px',
  '&:focus': {
    background: 'white',
    WebKitBoxShadow: '4px 4px rgba(0, 0, 255, .2)',
    MozBoxShadow: '4px 4px rgba(0, 0, 255, .2)',
    boxShadow: '4px 4px rgba(0, 0, 255, .2)',
    borderRadius: '0',
  },
  '&::placeholder': {
    textAlign: 'center',
    color: 'gray',
  },
});
const subBoxButton = css({
  backgroundColor: '#a29bfe',
  color: '#FFF',
  width: '50%',
  cursor: 'pointer',
});

const SubscriptionBox = () => (
  <TinyLetter {...subBoxRule} list='nimreycode'>
    <p {...subBoxLabel}>Subscribe to my newsletter!</p>
    <input {...subBoxItem} {...subBoxEmail} type='email' placeholder='Your email address' />
    <input {...subBoxItem} {...subBoxButton} type='submit' value='subscribe' />
  </TinyLetter>
);

export default SubscriptionBox;
