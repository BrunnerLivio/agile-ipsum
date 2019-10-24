import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { loremIpsum } from "lorem-ipsum"

const IndexPage = ({ data }) => {
  const words = data.site.siteMetadata.words

  const [paragraphs, setParagraphs] = useState(1)
  let count = 1;
  if (parseInt(paragraphs) !== NaN && parseInt(paragraphs) > 0) {
    count = parseInt(paragraphs);
  }
  const ipsum = loremIpsum({
    units: "paragraphs",
    count,
    words,
    format: 'html'
  })
  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <div>
          <label  htmlFor="paragraphs">Paragraphs:</label>
          <input
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
