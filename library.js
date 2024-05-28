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
                  },
       // prints a list of all playlists, in the form:
       // p01: Coding Music - 2 tracks
       // p02: Other Playlist - 1 tracks
        // Helper functions (formatPlaylist)
       formatPlaylist: function(playlistId) {
              const playlist = this.playlists[playlistId];
              return `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`;
       },
       printPlaylists: function() {
              const result = [];
              // Assign the "library" object "playlist" key to a variable.
              const printPlaylist = this.playlists;
              // Obtain the values by using the Object.values method.
              const playlistValues = Object.values(printPlaylist);
              // Iterate the playlistValues elements using for...of method
              // Use the formatPlaylist() helper function to return the result (list)
              for (let element of playlistValues) {
              result.push(this.formatPlaylist(element.id));
              }
              return result.join('\n');
       },
       // prints a list of all tracks, using the following format:
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       // t03: Four Thirty-Three by John Cage (Woodstock 1952)
       // Helper Functions (formatTrack)
       formatTrack: function(trackId) {
              const track = this.tracks[trackId];
              return `METHOD ${track.id}: ${track.name} by ${track.artist} (${track.album})`;
       },
       printTracks: function() {
              const result = [];
              // Assign the "library" object "tracks" key to a variable.
              const printTracks = this.tracks;
              // Obtain the values by using the Object.values method.
              const tracksValues = Object.values(printTracks);
              // Iterate the tracksKeys elements using for...of method
              // Use the formatTrack() helper function to return the result (list)
              for (const element of tracksValues) {
                     result.push(this.formatTrack(element.id));
              }
              return result.join('\n');
       },

       // prints a list of tracks for a given playlist, using the following format:
       // p01: Coding Music - 2 tracks
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       printPlaylist: function(playlistId) {
              const formattedTrack = [];
              // Variable playlist server as a Value storage of a "library" key as per given playlistId
              const playlist = this.playlists[playlistId];
              // To obtain the array value of tracks.
              const tracks = playlist.tracks;
              // Iterate the tracks elements using for...of method
              for (let element of tracks) {
                     // Use the formatTrack() helper function to return the formattedTrack (list)
                     formattedTrack.push(this.formatTrack(element));
              }
              return `${this.formatPlaylist(playlistId)}\n${formattedTrack.join('\n')}`;
       },
       // adds an existing track to an existing playlist
       addTrackToPlaylist: function(trackId, playlistId) {
              const playlist = this.playlists[playlistId];
              // Adding the track to the existing playlist using push method.
              playlist.tracks.push(trackId);
              // Print the updated playlist.
              return `${this.printPlaylist(playlistId)}`;
       },
       // generates a unique id
       // (already implemented: use this for addTrack and addPlaylist)
       generateUid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       // adds a track to the library
       addTrack: function(name, artist, album) {
              // Assigning the random id generated from generateUid() to variable is.
              let id = this.generateUid();
              const track = this.tracks;
              // Adding the new track to the library.
              track[id] = { //track[id], using [] as we are referring to the content of variable id.
                     id: id,
                     name: name,
                     artist: artist,
                     album: album
              };
              // Print the tracks list in the library.
              return `${this.printTracks()}`;
       },
       // adds a playlist to the library
       addPlaylist: function(name) {
              // Assigning the random id generated from generateUid() to variable is.
              let id = this.generateUid();
              const playlist = this.playlists;
              // Adding the new playlist to the library.
              playlist[id] = {
                     id: id,
                     name: name,
                     tracks: [],
              };
              // Print the playlists list in the library.
              return `${this.printPlaylists()}`;
       },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

library.formatPlaylist('p02');
console.log(library.printPlaylists());
console.log("====================");

library.formatTrack("t03");
console.log(library.printTracks());
console.log("====================");

console.log(library.printPlaylist('p02'));
console.log("====================");

console.log(library.addTrackToPlaylist("t01", "p02"));
console.log("====================");

console.log(library.addTrack("The Piano", "Gabby Kaye", "The Piano and Me"));
console.log("====================");

console.log(library.addPlaylist("Relaxing Piano"));
console.log("====================");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
       const inspect = require('util').inspect;
       const track = library.tracks;
       const values = Object.values(track);
      
      values.map(function(track){
              if (track.id.search(query) >= 0 ) {
                     console.log(track)
              } else if(track.name.search(query) >= 0) {
                     console.log(track)
              } else if (track.artist.search(query) >= 0) {
                     console.log(track)
              } else if (track.album.search(query) >=0) {
                     console.log(track)
              }
       })
};
console.log("NOTE: This is STRETCH code.")
console.log(printSearchResults("James"));// => Will print track 't02' values
console.log(printSearchResults("Three"));// => Will print tracks 't01' and 't03' values