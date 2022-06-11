function areaAndVolumeCalculator(area, vol, json) {
    let result = [];
    let array = JSON.parse(json).forEach(obj => {
        let resultOfArea = area.call(obj);
        let resultOfVol = vol.call(obj);
        result.push({
            area: resultOfArea,
            volume: resultOfVol,
        })
    });
    return result;

}
areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
