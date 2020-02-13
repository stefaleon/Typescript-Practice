"use strict";
exports.__esModule = true;
var faker = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker.name.firstName();
        // this.name = "maimous";
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
            // lat: 4.5678,
            // lng: 2.3456
        };
    }
    return User;
}());
exports.User = User;
