export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(item: Locationable, label: string): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: item.location,
      label
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

export interface Locationable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
