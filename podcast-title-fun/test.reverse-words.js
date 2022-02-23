describe('reverse words', () => {
  it('handles empty values', () => {
    expect(reverseWords([])).to.eql([]);
    expect(reverseWords([''])).to.eql(['']);
  });

  it('reverses single words', () => {
    expect(reverseWords(['Podcast'])).to.eql(['Podcast']);
    expect(reverseWords(['Some Fine Podcast'])).to.eql(['Podcast Fine Some']);
  });

  it('reverses multiple words', () => {
    const list = ['One two Three', 'Four FIVE', 'six SEVEN Eight Nine'];
    const reversed = ['Three two One', 'FIVE Four', 'Nine Eight SEVEN six'];
    expect(reverseWords(list)).to.eql(reversed);
  });

  it.skip('BONUS: condenses multiple spaces', () => {
    expect(reverseWords(['Some    Fine      Podcast'])).to.eql(['Podcast Fine Some']);
  });

  it.skip('BONUS: handles tabs', () => {
    expect(reverseWords(['Convert\tTabs\tHere'])).to.eql(['Here Tabs Convert']);
  });

  it.skip('BONUS: returns null for weird inputs', () => {
    const weirdStuff = [null, 987, 'An Actual String', [], new Date()];
    expect(reverseWords(weirdStuff)).to.eql([null, null, 'String Actual An', null, null]);
  });
});
