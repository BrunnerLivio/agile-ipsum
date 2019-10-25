import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { loremIpsum } from "lorem-ipsum"

const IndexPage = ({ data }) => {
  const words = data.site.siteMetadata.words

  let error = ''
  let count = 3
  const maxParagraphs = 50
  const minParagraphs = 1

  const [paragraphs, setParagraphs] = useState(count)

  if (!isNaN(paragraphs) && parseInt(paragraphs) > 0) {
    count = parseInt(paragraphs)
  }

  if(paragraphs > maxParagraphs) {
    error = <div class="error">Sorry, {maxParagraphs} is the maximum</div>
  }

  if(paragraphs < minParagraphs) {
    error = <div class="error">Sorry, {minParagraphs} is the minimum</div>
  }

  const ipsum = loremIpsum({
    units: "paragraphs",
    count,
    words,
    format: "html",
  })
    // de-duplicate words
    .replace(/\b(\w+)(\s+\1)+\b/gi, "$1")

  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <div>
          {error}
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            class="paragraphs"
            name="paragraphs"
            min={minParagraphs}
            max={maxParagraphs}
            type="number"
            value={paragraphs}
            onChange={e => setParagraphs(e.target.value)}
          />
        </div>
      </form>
      <div class="ipsum" dangerouslySetInnerHTML={{ __html: ipsum }} />
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
