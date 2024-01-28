import type { Round } from "@/types/Round";
import type { SheetType } from "@/types/SheetType";

type BracketRound = Round<SheetType.BRACKET>;

export const handleBracketApiResponse = (
  googleSheetRows?: string[][],
): BracketRound[] => {
  const firstRound: BracketRound = {
    matchGroups: [
      {
        name: "WB ROUND 1",
        matches: [
          {
            name: "Match 1",
            players: [
              {
                name: googleSheetRows?.[1]?.[1] ?? "",
                place: googleSheetRows?.[1]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[2]?.[1] ?? "",
                place: googleSheetRows?.[2]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[3]?.[1] ?? "",
                place: googleSheetRows?.[3]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[1] ?? "",
                place: googleSheetRows?.[4]?.[2] ?? "",
              },
            ],
          },
          {
            name: "Match 2",
            players: [
              {
                name: googleSheetRows?.[7]?.[1] ?? "",
                place: googleSheetRows?.[7]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[8]?.[1] ?? "",
                place: googleSheetRows?.[8]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[9]?.[1] ?? "",
                place: googleSheetRows?.[9]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[10]?.[1] ?? "",
                place: googleSheetRows?.[10]?.[2] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const secondRound: BracketRound = {
    matchGroups: [
      {
        name: "WB FINAL",
        matches: [
          {
            name: "Match 1",
            players: [
              {
                name: googleSheetRows?.[4]?.[5] ?? "",
                place: googleSheetRows?.[4]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[5] ?? "",
                place: googleSheetRows?.[5]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[5] ?? "",
                place: googleSheetRows?.[6]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[5] ?? "",
                place: googleSheetRows?.[7]?.[6] ?? "",
              },
            ],
          },
        ],
      },
      {
        name: "LB SEMI",
        matches: [
          {
            name: "Match 2",
            players: [
              {
                name: googleSheetRows?.[14]?.[1] ?? "",
                place: googleSheetRows?.[14]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[1] ?? "",
                place: googleSheetRows?.[15]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[1] ?? "",
                place: googleSheetRows?.[16]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[1] ?? "",
                place: googleSheetRows?.[17]?.[2] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const thirdRound: BracketRound = {
    matchGroups: [
      {
        name: "LB FINAL",
        matches: [
          {
            name: "Match 1",
            players: [
              {
                name: googleSheetRows?.[14]?.[5] ?? "",
                place: googleSheetRows?.[14]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[5] ?? "",
                place: googleSheetRows?.[15]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[5] ?? "",
                place: googleSheetRows?.[16]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[5] ?? "",
                place: googleSheetRows?.[17]?.[6] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const fourthRound: BracketRound = {
    matchGroups: [
      {
        name: "GRAND FINAL",
        matches: [
          {
            name: "Match 1",
            players: [
              {
                name: googleSheetRows?.[4]?.[9] ?? "",
                place: googleSheetRows?.[4]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[9] ?? "",
                place: googleSheetRows?.[5]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[9] ?? "",
                place: googleSheetRows?.[6]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[9] ?? "",
                place: googleSheetRows?.[7]?.[10] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };

  return [firstRound, secondRound, thirdRound, fourthRound];
};
