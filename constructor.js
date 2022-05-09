var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        // color is optional now
        this.currentLocation = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("tax x: ".concat(point.x, " y: ").concat(point.y, " konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 4, y: 7 }, "kırmızı");
console.log(taxi_1.currentLocation);
console.log(taxi_1.color);
var taxi_3 = new Taxi({ x: 3, y: 2 });
console.log(taxi_3.currentLocation);
