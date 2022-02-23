describe('sort coolest', () => {
  it('calculates cool points for podcast titles', () => {
    expect(coolPoints('One Fine Podcast')).to.equal(0);
    expect(coolPoints('My Picturesque Podcast')).to.equal(2);
    expect(coolPoints('This Bamboozled Trapezoid')).to.equal(5);
  });

  it('gets cooler when you reuse words', () => {
    expect(coolPoints('Dastardly dastardly DASTARDly')).to.equal(3);
  });

  it.skip('BONUS: is really cool to pluralize words', () => {
    expect(coolPoints('These Bamboozleds Trapezoids!')).to.equal(5);
  });

  it.skip('BONUS: sorts cool words before unknown words', () => {
    const list = [
      'One Fine Podcast',
      'My Picturesque Podcast',
      'These Bamboozleds Trapezoids!',
      'Another Picturesque Podcast',
    ];
    const sorted = sortCoolest(list);

    expect(sorted[0]).to.equal('These Bamboozleds Trapezoids!');
    expect(sorted[1]).to.equal('My Picturesque Podcast');
    expect(sorted[2]).to.equal('Another Picturesque Podcast');
    expect(sorted[3]).to.equal('One Fine Podcast');
  });
});
