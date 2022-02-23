describe('check unique', () => {
  it.skip('BONUS: returns false for blank titles', async () => {
    expect(await checkUnique('')).to.be.false;
    expect(await checkUnique('   ')).to.be.false;
    expect(await checkUnique(null)).to.be.false;
    expect(await checkUnique(undefined)).to.be.false;
  });

  it.skip('BONUS: returns true for unique titles', async () => {
    expect(await checkUnique('My Unique Podcast 999')).to.be.true;
  });

  it.skip('BONUS: returns false for existing titles', async () => {
    expect(await checkUnique('The Moth')).to.be.false;
  });

  it.skip('BONUS: is case insensitive', async () => {
    expect(await checkUnique('ear hustle')).to.be.false;
  });

  it.skip('BONUS: matches exactly on titles', async () => {
    // NOTE: searching our API returns a match for "Song Exploder" - but
    // "Exploder" is still a unique title!
    expect(await checkUnique('Exploder')).to.be.true;
  });
});
