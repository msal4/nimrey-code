import React from "react";
import g from 'glamorous';
import { TinyLetter } from 'react-tinyletter';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div className='article' css={styles.articleStyle}>
        <img src={post.frontmatter.cover_image} />
        <div className='article-content'>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <TinyLetter className="newsletter-subscription-box" list="nimreycode">
        <g.H3 className="label">Subscribe to my newsletter!</g.H3>
        <input className="email-field newsletter-subscription-box-item" type='email' placeholder='Your email address' />
        <input className="subscribe-button newsletter-subscription-box-item" type='submit' value='subscribe' />
      </TinyLetter>
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
  },

};