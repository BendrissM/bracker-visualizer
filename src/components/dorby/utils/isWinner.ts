export const isWinner = (place: string, big?: boolean) => {
  if (big) {
    return ["1", "2", "3"].includes(place);
  }
  return ["1", "2"].includes(place);
};
