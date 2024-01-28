export const mapPlacementText = (place: string, roundName: string): string => {
    if (roundName === "GRAND FINAL") {
        if (place === "1") {
            return "1st";
        }
        if (place === "2") {
            return "2nd";
        }
        if (place === "3") {
            return "3rd";
        }
        return `${place}th`;
    }
    if (roundName === "LB SEMI") {
        if (["1", "2"].includes(place)) {
          return "WINNER";
        }
        if (place === "3") {
            return "7th";
        }
        return "8th";
    }
    if (roundName === "LB FINAL") {
        if (["1", "2"].includes(place)) {
          return "WINNER";
        }
        if (place === "3") {
            return "5th";
        }
        return "6th";
    }
    if (place === "1") {
        return "WINNER";
    }
    if (place === "2") {
        return "WINNER";
    }
    return "LOSER";
}