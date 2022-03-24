function songs(array) {
    let num = array.shift();
    let finalType = array.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        all() {
            if (this.typeList === finalType || finalType === 'all') {
                console.log(this.name);
            }
        }
    }
    let songs = [];
    for (let element of array) {
        let token = element.split('_');
        let song = new Song(token[0], token[1], token[2]);
        songs.push(song);
    }
    for (let song of songs) {
        song.all();
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']

)