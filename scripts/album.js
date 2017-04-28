var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21' },
    { title: 'Magenta', duration: '2:15' }
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21' },
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15' }
  ]
};

var otherAlbum = {
  title: 'another name',
  artist: 'some they',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/09.png',
  songs: [
    { title: 'a song ?', duration: '1:01' },
    { title: 'hot in here', duration: '5:01' },
    { title: 'dancing queen', duration: '3:21' },
    { title: 'hood politics?', duration: '3:14' },
    { title: 'amal hayati', duration: '2:15' }
  ]
};

var createSongRow = function(songNumber, songName, songLength){
  var template =
      '<tr class="album-view-song-item">'
    +   '<td class="song-item-number">'+songNumber+'</td>'
    +   '<td class="song-item-title">'+songName+'</td>'
    +   '<td class="song-item-duration">'+songLength+'</td>'
  + '</tr>'
  ;

  return template;
}

var setCurrentAlbum = function(album){
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = ' ';

  for ( var i = 0; i < album.songs.length; i++ ) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }

};

window.onload = function(){
    setCurrentAlbum(albumPicasso);
};

//define event listener and specify function to return. needs to be setCurrentAlbum
//setCurrentAlbum should loop through albums based on a count. for example, set a value for each album
//if count is divisible by 2, should return same album. if divisible by 3, return next album, if neither, return other album.
// count needs to start at 1 maybe?
//define function that will be tied to event listener
var count = 1;
document.getElementsByClassName('album-cover-art')[0].addEventListener("click", function(){
       count++;
       if ( count% 3 === 0){
         setCurrentAlbum(otherAlbum);
       }
       else if( count%2 ===0){
         setCurrentAlbum(albumMarconi);
       }
       else {
         setCurrentAlbum(albumPicasso);
       }

} );
