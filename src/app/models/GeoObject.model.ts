export interface GeoObject {
  id: number;
  coords: {
    latitude: number;
    longitude: number;
  };
    name: string;
    address: string;
    visited: boolean;
}
