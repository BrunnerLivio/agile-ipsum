const dict = require('../content/dict');
describe('Duplicates', () => {
  Object.keys(dict).forEach((key) => {
    it('should not have any duplicates in ' + key, () => {
      const wordsLowercase = dict[key].map(word => word.toLowerCase());
      const uniqueWords = [...new Set(wordsLowercase)]; 
      expect(wordsLowercase).toEqual(uniqueWords)
    });
  })
});