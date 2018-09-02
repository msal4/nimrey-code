import React from "react";
import g from 'glamorous';

import { TinyLetter } from 'react-tinyletter';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div css={styles.articleStyle}>
      <img src={post.frontmatter.cover_image} />
      <div style={styles.contentStyle}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <TinyLetter list="nimreycode">
          <g.H3 color='#6c5ce7'>Subscribe to my newsletter!</g.H3>
          <input css={styles.emailFieldStyle} type='email' placeholder='Enter your email address' />
          <input css={styles.subscribeButtonStyle} type='submit' value='subscribe' />
        </TinyLetter>
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image
      }
    }
  }
`;

const styles = {
  articleStyle: {
    boxShadow: '0px 0px 2px #BBB',
    // color: '#FFF',
    // background: '#2e333b'
  },
  contentStyle: {
    padding: '.5rem 2rem .5rem 2rem',
  },
  emailFieldStyle: {
    border: 'none',
    backgroundImage: 'none',
    backgroundColor: '#dfe6e9',
    WebKitBoxShadow: 'none',
    MozBoxShadow: 'none',
    boxShadow: '1px 1px 3px #BBB',
    padding: '5px',
    marginRight: '5px',
    color: '#2d3436'
  },
  subscribeButtonStyle: {
    border: 'none',
    backgroundImage: 'none',
    backgroundColor: '#a29bfe',
    WebKitBoxShadow: 'none',
    MozBoxShadow: 'none',
    boxShadow: '1px 1px 3px #BBB',
    padding: '5px',
    color: '#FFF',
    cursor: 'pointer'
  },
};