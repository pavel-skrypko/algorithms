import { describe, expect, test } from '@jest/globals';

import haversine, { ICoordinatesLatitudeLongitude } from '../haversine';

/**
 * Earth radius
 */
enum EEarthRadius {
  M = 6371000,
  KM = 6371,
  MILE = 3959,
}

/**
 * Navigation coordinates
 */
const coordinateOne: ICoordinatesLatitudeLongitude = {
  latitude: 53.944089,
  longitude: 27.610977,
};
const coordinateTwo: ICoordinatesLatitudeLongitude = {
  latitude: 53.943558,
  longitude: 27.612639,
};

describe('Havershine formula. Distance between two coordinates', () => {
  test('Should return distance using Earth radius in meters', () => {
    const expected = 123.76496751312989;
    const result = haversine(coordinateOne, coordinateTwo, EEarthRadius.M);
    expect(result).toBe(expected);
  });

  test('Should return distance using Earth radius in kilometers', () => {
    const expected = 0.12376496751312989;
    const result = haversine(coordinateOne, coordinateTwo, EEarthRadius.KM);
    expect(result).toBe(expected);
  });

  test('Should return distance using Earth radius in miles', () => {
    const expected = 0.07690872804653606;
    const result = haversine(coordinateOne, coordinateTwo, EEarthRadius.MILE);
    expect(result).toBe(expected);
  });
});
