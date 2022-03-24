function city(object) {
    let props = Object.keys(object);
    for (let prop of props) {
        console.log(`${prop} -> ${object[prop]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)