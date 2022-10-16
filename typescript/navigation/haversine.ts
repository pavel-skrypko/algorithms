/**
 * Navigation point
 */
export interface ICoordinatesLatitudeLongitude {
  latitude: number;
  longitude: number;
}

/**
 * The haversine formula determines the great-circle distance
 * between two points on a sphere given their longitudes and latitudes.
 *
 * @param coordinatesStart - first coordinate
 * @param coordinatesEnd - second coordinate
 * @param sphereRadius - sphere radius
 *
 * @see {@link https://en.wikipedia.org/wiki/Haversine_formula Wikipedia}
 *
 * @returns Distance between two coordinates
 */
const haversine = (
  coordinatesStart: ICoordinatesLatitudeLongitude,
  coordinatesEnd: ICoordinatesLatitudeLongitude,
  sphereRadius: number,
): number => {
  const radConst = Math.PI / 180;

  const coordinatesStartRad: ICoordinatesLatitudeLongitude = {
    latitude: coordinatesStart.latitude * radConst,
    longitude: coordinatesStart.longitude * radConst,
  };
  const coordinatesEndRad: ICoordinatesLatitudeLongitude = {
    latitude: coordinatesEnd.latitude * radConst,
    longitude: coordinatesEnd.longitude * radConst,
  };

  const differenceLatitude = coordinatesEndRad.latitude - coordinatesStartRad.latitude;
  const differenceLongitude = coordinatesEndRad.longitude - coordinatesStartRad.longitude;

  const a =
    Math.sin(differenceLatitude / 2) ** 2 +
    Math.cos(coordinatesStartRad.latitude) *
      Math.cos(coordinatesEndRad.latitude) *
      Math.sin(differenceLongitude / 2) ** 2;

  return 2 * sphereRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export default haversine;
