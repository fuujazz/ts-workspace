class Taxi {
    constructor(_location, _color) {
        this._location = _location;
        this._color = _color;
        // color is optional now
    }
    travelTo(point) {
        console.log(`taxi x: ${this._location.x} y: ${this._location.y}'dan x: ${point.x} y: ${point.y}'a konumuna gidiyor`);
    }
    get location() {
        return this._location;
    }
    set location(value) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("Koordinat bilgileri negatif olamaz");
        }
        this._location = value;
    }
}
let taxi_1 = new Taxi({ x: 4, y: 7 }, "kırmızı");
taxi_1.travelTo({ x: 3, y: 1 });
let currentLocation = taxi_1.location;
console.log(currentLocation);
taxi_1.location = { x: 7, y: 9 };
currentLocation = taxi_1.location;
console.log(currentLocation);
