const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// Helper functions
const formatPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  return `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`;
};

const printPlaylists = function() {
  const result = [];
  // Assign the "library" object "playlist" key to a variable.
  const printPlaylist = library.playlists;
  // Obtain the values by using the Object.values method.
  const playlistValues = Object.values(printPlaylist);
       
  // Iterate the playlistValues elements using for...of method
  // Use the formatPlaylist() helper function to return the result (list)
  for (let element of playlistValues) {
    result.push(formatPlaylist(element.id));
  }

  return result.join('\n');
};

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// Helper Functions
const formatTrack = function(trackId) {
  const track = library.tracks[trackId];
  return `${track.id}: ${track.name} by ${track.artist} (${track.album})`;
};

const printTracks = function() {
  const result = [];
  // Assign the "library" object "tracks" key to a variable.
  const printTracks = library.tracks;
  // Obtain the values by using the Object.values method.
  const tracksValues = Object.values(printTracks);
  //console.log("Line 84: ", tracksValues)

  // Iterate the tracksKeys elements using for...of method
  // Use the formatTrack() helper function to return the result (list)
  for (const element of tracksValues) {
    result.push(formatTrack(element.id));
  }

  return result.join('\n');
};

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const formattedTrack = [];
  // Variable playlist server as a Value storage of a "library" key as per given playlistId
  const playlist = library.playlists[playlistId];
  // To obtain the array value of tracks.
  const tracks = playlist.tracks;

  // Iterate the tracks elements using for...of method
  for (let element of tracks) {
    // Use the formatTrack() helper function to return the formattedTrack (list)
    formattedTrack.push(formatTrack(element));
  }

  return `${formatPlaylist(playlistId)}\n${formattedTrack.join('\n')}`;
};

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  // Adding the track to the existing playlist using push method.
  playlist.tracks.push(trackId);
  // Show the updated playlist.
  return `${printPlaylist(playlistId)}`;
};

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  // Assigning the random id generated from generateUid() to variable is.
  let id = generateUid();
  const track = library.tracks;
  // Adding the new track to the library.
  track[id] = { //track[id], using [] as we are referring to the content of variable id.
    id: id,
    name: name,
    artist: artist,
    album: album
  };
  // Print the tracks list in the library.
  return `${printTracks()}`;
};

// adds a playlist to the library
const addPlaylist = function(name) {
  // Assigning the random id generated from generateUid() to variable is.
  let id = generateUid();

  const playlist = library.playlists;
  // Adding the new playlist to the library.
  playlist[id] = {
    id: id,
    name: name,
    tracks: [],
  };
  // Print the playlists list in the library.
  return `${printPlaylists()}`;
};

formatPlaylist('p02');
console.log(printPlaylists());
console.log("====================");

formatTrack("t03");
console.log(printTracks());
console.log("====================");

console.log(printPlaylist('p02'));
console.log("====================");

console.log(addTrackToPlaylist("t01", "p02"));
console.log("====================");

console.log(addTrack("The Piano", "Gabby Kaye", "The Piano and Me"));
console.log("====================");

console.log(addPlaylist("Relaxing Piano"));
console.log("====================");


/*
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
       const track = library.tracks;
       const values = Object.values(track);
       //console.log("LINE 188 = ", values);
       for (let element of values) {
              //console.log("ELEMENT = ", element);
              const x = element.artist.search(query);
              if (element.artist.search(query)) {
                     console.log("LINE 192: ", track[element.id]);
              }
       }
       //console.log("SEARCH = ",track.search(query));

}
console.log(printSearchResults("tri"))
*/