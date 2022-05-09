import { Taxi } from "./Taxi";

let taxi_1: Taxi = new Taxi({ x: 4, y: 7 }, "kırmızı");
taxi_1.travelTo({ x: 3, y: 1 });
let currentLocation = taxi_1.location;
console.log(currentLocation);
taxi_1.location = { x: 7, y: 9 };
currentLocation = taxi_1.location;
console.log(currentLocation);
