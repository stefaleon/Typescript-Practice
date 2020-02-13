"use strict";
exports.__esModule = true;
var faker = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        };
    }
    return Company;
}());
exports.Company = Company;
