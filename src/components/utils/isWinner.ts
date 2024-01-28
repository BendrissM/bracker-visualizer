export const isWinner = (place: string, roundName: string) => {
  if (roundName === "GRAND FINAL") {
    return ["1"].includes(place);
  }
  return ["1", "2"].includes(place);
};
