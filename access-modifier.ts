interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private location?: Point, private color?: string) {
    // color is optional now
  }

  travelTo(point: Point): void {
    console.log(
      `taxi x: ${this.location.x} y: ${this.location.y}'dan x: ${point.x} y: ${point.y}'a konumuna gidiyor`
    );
  }
}

let taxi_1: Taxi = new Taxi({ x: 4, y: 7 }, "kırmızı");
taxi_1.travelTo({ x: 3, y: 1 });
