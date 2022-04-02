function destinationMapper(str) {
    let pattern = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(str);
    let points = 0;
    let destinations = [];
    while(match !== null){
        destinations.push(match[2]);
        points+= match[2].length;
        match = pattern.exec(str);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")