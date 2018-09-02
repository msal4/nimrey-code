import React from "react"

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      A site dedicated to helping other developers and programmers with tutorials, articles and advices.
      Created and maintained by Mohammed Salman, a Full Stack Web Developer based in Baghdad.
    </p>
  </div>
)


export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  } 
`