export interface GeoObject {
  id: number;
  coords: {
    latitude: number;
    longitude: number;
  };
  description: string;
  name: string;
  address: string;
  visited: boolean;
  _id: string;
}
