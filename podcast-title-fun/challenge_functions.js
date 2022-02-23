// Takes in an Array of podcast title strings
// Returns an Array of strings where the words are reversed
function reverseWords(podcastTitles) {
  //TODO return list where title "Some Fine Podcast" becomes "Podcast Fine Some"
  return podcastTitles.map(t => t.split(' ').reverse().join(' '));
}

// Takes in an Array of podcast title strings
// Returns an Array of strings are lowercased and duplicate characters removed.
function removeDupeChars(podcastTitles) {
  // TODO "Some Fine Podcast" becomes "some fin pdcat"
  return podcastTitles.map(t => {
    let out = '';
    for (let i = 0; i < t.length; i++) {
      let c = t.charAt(i).toLowerCase();
      if (out.indexOf(c) === -1 || c === ' ' || c === '1') {
        out += c;
      }
    }
    return out;
  });
}
