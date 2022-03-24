function gramophone(band,album,song){
let musicTime = (band.length * album.length) * song.length / 2;
let rotateTime = musicTime / 2.5 ;
console.log(`The plate was rotated ${Math.ceil(rotateTime)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')