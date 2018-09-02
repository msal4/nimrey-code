import React from 'react';
import g from 'glamorous';
import Link from 'gatsby-link';

const Container = ({ children }) => (
  <div css={styles.containerStyle}>{children}</div>
);


const Post = ({ node }) => (
  <div css={styles.postStyle}>
    <Link css={styles.linkStyle} to={node.fields.slug}>
      <div
        css={{
          background: `url(${node.frontmatter.cover_image})`,
          ...styles.postCoverStyle,
        }}
      />
      <div css={styles.postTextContainerStyle}>
        <g.H3>{node.frontmatter.title}</g.H3>
        <g.P>{node.excerpt}<g.Span color="#BBB"> {node.timeToRead} min read</g.Span></g.P>
      </div>
    </Link>
  </div>
);

export default ({ data }) => (
  <div>
    <g.H1 display={'inline-block'}>
      Latest Articles
    </g.H1>
    <g.H4 color='#BBB'>{data.allMarkdownRemark.totalCount} Posts</g.H4>
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.id} node={node} />
      ))}
    </Container>
  </div>
)
export const query = graphql`

  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            cover_image
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

const styles = {
  containerStyle: {
    margin: '3rem auto',
    maxWidth: 700,
  },
  postStyle: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto 12px auto',
    '&:last-child': { marginBottom: 0 },
    boxShadow: '1px 1px 3px #BBB'
  },
  postCoverStyle: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '12rem',
    marginBottom: '8px',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'black',
  },
  postTextContainerStyle: {
    padding: '0 10px 0 10px'
  }
};