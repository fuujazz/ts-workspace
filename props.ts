interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private _location?: Point, private _color?: string) {
    // color is optional now
  }

  travelTo(point: Point): void {
    console.log(
      `taxi x: ${this._location.x} y: ${this._location.y}'dan x: ${point.x} y: ${point.y}'a konumuna gidiyor`
    );
  }

  get location(): Point {
    return this._location;
  }
  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Koordinat bilgileri negatif olamaz");
    }
    this._location = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 4, y: 7 }, "kırmızı");
taxi_1.travelTo({ x: 3, y: 1 });
let currentLocation = taxi_1.location;
console.log(currentLocation);
taxi_1.location = { x: 7, y: 9 };
currentLocation = taxi_1.location;
console.log(currentLocation);
