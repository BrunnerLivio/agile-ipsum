import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { loremIpsum } from "lorem-ipsum"

var _ = require('lodash');


const IndexPage = ({ data }) => {

  const words = data.site.siteMetadata.dict.noun
  const dict = data.site.siteMetadata.dict


  const [phrases, setPhrases] = useState(false)

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

  let sentence_count = 6;
  const [sentences, setSentences] = useState(sentence_count)
  if (!isNaN(sentences) && parseInt(sentences) > 0) {
    sentence_count = parseInt(sentences);
  }

  let sentence = function() {
    return _.sample(dict.phrase).replace(/\{\{([a-z]+)\}\}/gi, (match, category) => _.sample(dict[category]))
  };

  let paragraph = function() {
    if (phrases) {
      return _.join(_.times(sentence_count, sentence), " ")
    } else {
      return loremIpsum({
        units: "sentences",
        count: sentence_count,
        words
      }).replace(/\b(\w+)(\s+\1)+\b/gi, "$1")
    }
  }


  return (
    <Layout>
      <SEO title="Home" />
      <form>
        <div>
          {error}
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            class="paragraphs"
            id="paragraphs"            
            min={minParagraphs}
            max={maxParagraphs}
            type="number"
            value={paragraphs}
            onChange={e => setParagraphs(e.target.value)}
          />
        </div>
        <div>
          <label  htmlFor="sentences">Sentences: </label>
          <input
            class="sentences"
            id="sentences"
            min="1"
            type="number"
            value={sentences}
            onChange={e => setSentences(e.target.value)}
          />
        </div>
        <div>
          <input
            class="phrases"
            id="phrases"
            type="checkbox"
            checked={phrases}
            onChange={e => setPhrases(!phrases)}
          /> <label  htmlFor="phrases">Agile phrases</label>
        </div> 
      </form>
      <div>
      {_.times(count,() =>
        <p>
          {paragraph()}
        </p>
      )}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        dict {phrase, role, noun, adjective, verb}
      }
    }
  }
`
