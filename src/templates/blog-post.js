import React from "react";
import { css } from 'glamor';
import SubscriptionBox from '../components/subsciption-box';

const articleContainerRule = css({
  backgroundColor: '#fafafb',
  boxShadow: '4px 4px rgba(0, 0, 255, .2)',
});
const articleContentRule = css({
  padding: '.5rem 2rem .5rem 2rem',
  '@media screen and (max-width: 800px)': {
    padding: '.5rem',
  },
});


export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div {...articleContainerRule}>
        <img src={post.frontmatter.cover_image} />
        <div {...articleContentRule}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <SubscriptionBox />
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
