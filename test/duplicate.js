const words = require('../content/word-parser');
describe('Duplicates', () => {
  it('should not have any duplicated words', () => {
    const wordsLowercase = words.map(word => word.toLowerCase());
    const uniqueWords = [...new Set(wordsLowercase)]; 
    expect(wordsLowercase).toEqual(uniqueWords)
  });
});