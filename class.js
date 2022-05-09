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
