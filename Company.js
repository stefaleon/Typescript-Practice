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
    Company.prototype.markerContent = function () {
        return "\n    <div>\n    <h4>" + this.companyName + "</h4>\n    <h5> " + this.catchPhrase + "</h5>\n    <h5>Lat: " + this.location.lat + "</h5>\n    <h5>Lon: " + this.location.lng + "</h5>\n    </div>   \n    ";
    };
    return Company;
}());
exports.Company = Company;
