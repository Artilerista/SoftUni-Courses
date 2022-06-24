function result() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = Number(hasWeight);
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbon, ribbonLength, text) {
            super(color, hasWeight, ribbon, ribbonLength)
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let classes = result();

let test = new classes.Balloon("Tumno-bqlo", 20.5);
console.log(test.hasWeight)
