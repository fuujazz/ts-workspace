var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("tax x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var Buss = /** @class */ (function () {
    function Buss() {
    }
    Buss.prototype.travelTo = function (point) {
        console.log("otob\u00FCs x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Buss;
}());
var taxi_1 = new Taxi();
taxi_1.currentLocation = { x: 1, y: 2 };
taxi_1.travelTo({ x: 1, y: 2 });
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6 });
taxi_2.currentLocation = { x: 3, y: 3 };
console.log(taxi_2);
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
