var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
        // color is optional now
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taxi x: ".concat(this.location.x, " y: ").concat(this.location.y, "'dan x: ").concat(point.x, " y: ").concat(point.y, "'a konumuna gidiyor"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 4, y: 7 }, "kırmızı");
taxi_1.travelTo({ x: 3, y: 1 });
