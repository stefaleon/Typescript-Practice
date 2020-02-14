export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(item: Locationable, label: string): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: item.location,
      label
    });
  }
}

interface Locationable {
  location: {
    lat: number;
    lng: number;
  };
}
