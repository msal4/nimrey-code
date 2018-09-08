import React from "react";
import { css } from 'glamor';
import SubscriptionBox from '../components/subsciption-box';

const articleContainerRule = css({
  boxShadow: '0px 0px 2px #BBB',
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
