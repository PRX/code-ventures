// Takes in an Array of podcast title strings
// Returns an Array of strings where the words are reversed
function reverseWords(podcastTitles) {
  //TODO return list where title "Some Fine Podcast" becomes "Podcast Fine Some"
}

// Takes in an Array of podcast title strings
// Returns an Array of strings are lowercased and duplicate characters removed.
function removeDupeChars(podcastTitles) {
  // TODO "Some Fine Podcast" becomes "some fin pdcat"
}

// Takes in a podcast title string
// Returns the number of cool-points that title has, based on how many times it
// includes the following words:
const COOL_WORDS = {
  bamboozled: 4,
  picturesque: 2,
  dastardly: 1,
  trapezoid: 1,
};
function coolPoints(title) {
  // TODO: "uncool title" returns 0, "bamboozled trapezoids" returns 5
}

// Takes in an Array of podcast title strings
// Returns an Array of those strings, sorted by their "cool" points
function sortCoolest(podcastTitles) {
  // TODO ["uncool title", "bamboozled stuff"] becomes ["bamboozled stuff", "uncool title"]
  return podcastTitles.sort((a, b) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  });
}

// Takes in a podcast title string
// Checks a PRX API to see if the a series with that title already exists
// Returns true if the title is unique, and false if it is already in use
const PRX_SEARCH = 'https://cms.prx.org/api/v1/series/search';
async function checkUnique(title) {
  // TODO query PRX_SEARCH with a query param `?q="some title"`
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}
