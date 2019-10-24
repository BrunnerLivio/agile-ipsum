const { readFileSync } = require("fs")
const { join } = require("path")

const wordsContent = readFileSync(join(__dirname, "../words.txt"), "utf8")

const words = wordsContent
  // Split new line
  .split("\n")
  // Filter out all empty words
  .filter(word => !!word)
  // Trim empty spaces
  .map(word => word.trim())

module.exports = words;