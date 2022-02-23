describe('remove duplicate characters', () => {
  it('handles empty values', () => {
    expect(removeDupeChars([])).to.eql([]);
    expect(removeDupeChars(['', ''])).to.eql(['', '']);
  });

  it('lowercases strings', () => {
    expect(removeDupeChars(['STriNG1', 'striNg2'])).to.eql(['string1', 'string2']);
  });

  it('removes duplicate characters', () => {
    expect(removeDupeChars(['Some Fine Podcast'])).to.eql(['some fin pdcat']);
    expect(removeDupeChars(['A Different Just-Okay Podcast'])).to.eql(['a difernt jus-oky pc']);
  });

  it('removes duplicate characters', () => {
    expect(removeDupeChars(['Some Fine Podcast'])).to.eql(['some fin pdcat']);
  });

  it.skip('BONUS: allows duplicate numbers', () => {
    expect(removeDupeChars(['Some1 F1ne Podcas1'])).to.eql(['some1 f1n pdca1']);
  });

  it.skip('BONUS: handles nested lists', () => {
    const list1 = ['Some Fine Podcast'];
    const list2 = ['A Different Just-Okay Podcast'];
    const list3 = [[['A Very Nested Podcast']]];

    expect(removeDupeChars([list1, list2])).to.eql([
      ['some fin pdcat'],
      ['a difernt jus-oky pc'],
      [[["this one' a d pc"]]],
    ]);
  });

  it.skip('BONUS: handles plain string inputs', () => {
    expect(removeDupeChars('Some Fine Podcast')).to.eql('some fin pdcat');
    expect(removeDupeChars('A Different Just-Okay Podcast')).to.eql('a difernt jus-oky pc');
  });
});
