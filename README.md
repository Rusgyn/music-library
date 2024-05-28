# README

### Summary

The program will consist of:

- An object, the library, that will store all the information about tracks and playlists
- A collection of functions that will perform certain operations on the library.
  - printPlaylists
  - printTracks
  - printPlaylist
  - addTrackToPlaylist
  - addTrack
  - addPlaylist
  - printSearchResults (stretch)

- Refactor the music library code so that the functions that operate on the library object are properties of the library object (instead of being independent functions). In other words, turn them into methods on the library object.
  - Instead of referring to library inside of your methods, you should refer to this instead, ie. this.tracks
  - Outside of the library object, functions will need to be invoked as follows: library.printTracks()
