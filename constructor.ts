interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;
  constructor(location: Point, color?: string) {
    // color is optional now
    this.currentLocation = location;
    this.color = color;
  }
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`tax x: ${point.x} y: ${point.y} konumuna gidiyor`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 4, y: 7 }, "kırmızı");
console.log(taxi_1.currentLocation);
console.log(taxi_1.color);

let taxi_3: Taxi = new Taxi({ x: 3, y: 2 });

console.log(taxi_3.currentLocation);
