"use strict";
exports.__esModule = true;
var faker = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker.name.firstName();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        };
    }
    User.prototype.markerContent = function () {
        return "\n    <div>\n    <h4>" + this.name + "</h4>\n    <h5>Lat: " + this.location.lat + "</h5>\n    <h5>Lon: " + this.location.lng + "</h5>\n    </div>   \n    ";
    };
    return User;
}());
exports.User = User;
