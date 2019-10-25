import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { loremIpsum } from "lorem-ipsum"

const IndexPage = ({ data }) => {
  const words = data.site.siteMetadata.words

  let count = 3;
  const [paragraphs, setParagraphs] = useState(count)
  if (!isNaN(paragraphs) && parseInt(paragraphs) > 0) {
    count = parseInt(paragraphs);
  }
  const ipsum = loremIpsum({
    units: "paragraphs",
    count,
    words,
    format: 'html'
  }).replace(/\b(\w+)(\s+\1)+\b/g, "$1"); // de-duplicate words
  
  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <div>
          <label  htmlFor="paragraphs">Paragraphs:</label>
          <input
            class="paragraphs"
            name="paragraphs"
            min="1"
            type="number"
            value={paragraphs}
            onChange={e => setParagraphs(e.target.value)}
          />
        </div>
      </form>
      <div class="ipsum" dangerouslySetInnerHTML={{__html: ipsum}} />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        words
      }
    }
  }
`
