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

let taxi_1: Taxi = new Taxi();
taxi_1.currentLocation = { x: 1, y: 2 };
taxi_1.travelTo({ x: 1, y: 2 });

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 3, y: 3 };

console.log(taxi_2);

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
