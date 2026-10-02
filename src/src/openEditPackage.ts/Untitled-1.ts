/**
 * Add or change hotel entries here. The key is the hotel id used by your app.
 */
export const hotelPackageMapping = {
  "hotel-demo": {
    hotelName: "Demo Hotel",
    packageId: "standard-stay",
    packageName: "Standard Stay",
  },
} as const;

export type HotelId = keyof typeof hotelPackageMapping;

/**
 * Returns the package configuration for a hotel that is being edited.
 */
export function openEditPackage(hotelId: HotelId) {
  return hotelPackageMapping[hotelId];
}
