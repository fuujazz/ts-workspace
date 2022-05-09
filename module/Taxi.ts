import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
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
