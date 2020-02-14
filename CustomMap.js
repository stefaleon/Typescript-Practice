"use strict";
exports.__esModule = true;
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: { lat: 0, lng: 0 }
        });
    }
    CustomMap.prototype.addMarker = function (item, label) {
        new google.maps.Marker({
            map: this.googleMap,
            position: item.location,
            label: label
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
