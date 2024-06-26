export const mapPlacementText = (place: string): string => {
  if (place === "1") {
    return "1st";
  }
  if (place === "2") {
    return "2nd";
  }
  if (place === "3") {
    return "3rd";
  }
  return isNaN(+place) ? place : `${place}th`;
};
