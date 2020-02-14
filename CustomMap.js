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
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: item.location,
            label: label
        });
        marker.addListener("click", function () {
            var infoWindow = new google.maps.InfoWindow({
                content: item.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
