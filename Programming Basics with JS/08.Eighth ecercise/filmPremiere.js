function filmPremiere(input) {
    let photosDurutation = Number(input[0]);
    let scenes = Number(input[1]);
    let timeForOneScene = Number(input[2]);
    let placeTime = photosDurutation * 0.15;
    let timeForScenes = scenes * timeForOneScene;
    let totaltime = placeTime + timeForScenes;
    let diff = Math.abs(totaltime - photosDurutation);

    if (totaltime > photosDurutation) {
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);

    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    }
}
filmPremiere(['120',
    '10',
    '11'])