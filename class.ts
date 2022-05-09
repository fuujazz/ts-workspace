interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`tax x: ${point.x} y: ${point.y} konumuna gidiyor`);
  }
}

class Buss implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`otobüs x: ${point.x} y: ${point.y} konumuna gidiyor`);
  }
}
