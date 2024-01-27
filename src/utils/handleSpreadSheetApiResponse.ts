import type { Round } from "@/types/Round";

export const handleSpreadSheetApiResponse = (
  googleSheetRows?: string[][],
): Round[] => {
  const firstRound: Round = {
    matchGroups: [
      {
        id: "0-0",
        matches: [
          {
            name: googleSheetRows?.[1]?.[0] ?? "",
            players: [
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
              {
                name: googleSheetRows?.[5]?.[1] ?? "",
                place: googleSheetRows?.[5]?.[2] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[7]?.[0] ?? "",
            players: [
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
              {
                name: googleSheetRows?.[11]?.[1] ?? "",
                place: googleSheetRows?.[11]?.[2] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[13]?.[0] ?? "",
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
          {
            name: googleSheetRows?.[19]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[20]?.[1] ?? "",
                place: googleSheetRows?.[20]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[1] ?? "",
                place: googleSheetRows?.[21]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[22]?.[1] ?? "",
                place: googleSheetRows?.[22]?.[2] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[1] ?? "",
                place: googleSheetRows?.[23]?.[2] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const secondRound: Round = {
    matchGroups: [
      {
        id: "1-0",
        matches: [
          {
            name: googleSheetRows?.[1]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[2]?.[5] ?? "",
                place: googleSheetRows?.[2]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[3]?.[5] ?? "",
                place: googleSheetRows?.[3]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[5] ?? "",
                place: googleSheetRows?.[4]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[5] ?? "",
                place: googleSheetRows?.[5]?.[6] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[7]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[8]?.[5] ?? "",
                place: googleSheetRows?.[8]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[9]?.[5] ?? "",
                place: googleSheetRows?.[9]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[10]?.[5] ?? "",
                place: googleSheetRows?.[10]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[11]?.[5] ?? "",
                place: googleSheetRows?.[11]?.[6] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "0-1",
        matches: [
          {
            name: googleSheetRows?.[13]?.[4] ?? "",
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
          {
            name: googleSheetRows?.[19]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[20]?.[5] ?? "",
                place: googleSheetRows?.[20]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[5] ?? "",
                place: googleSheetRows?.[21]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[22]?.[5] ?? "",
                place: googleSheetRows?.[22]?.[6] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[5] ?? "",
                place: googleSheetRows?.[23]?.[6] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const thirdRound: Round = {
    matchGroups: [
      {
        id: "2-0",
        matches: [
          {
            name: googleSheetRows?.[1]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[2]?.[9] ?? "",
                place: googleSheetRows?.[2]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[3]?.[9] ?? "",
                place: googleSheetRows?.[3]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[9] ?? "",
                place: googleSheetRows?.[4]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[9] ?? "",
                place: googleSheetRows?.[5]?.[10] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "1-1",
        matches: [
          {
            name: googleSheetRows?.[7]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[8]?.[9] ?? "",
                place: googleSheetRows?.[8]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[9]?.[9] ?? "",
                place: googleSheetRows?.[9]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[10]?.[9] ?? "",
                place: googleSheetRows?.[10]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[11]?.[9] ?? "",
                place: googleSheetRows?.[11]?.[10] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[13]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[14]?.[9] ?? "",
                place: googleSheetRows?.[14]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[9] ?? "",
                place: googleSheetRows?.[15]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[9] ?? "",
                place: googleSheetRows?.[16]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[9] ?? "",
                place: googleSheetRows?.[17]?.[10] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "0-2",
        matches: [
          {
            name: googleSheetRows?.[19]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[20]?.[9] ?? "",
                place: googleSheetRows?.[20]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[9] ?? "",
                place: googleSheetRows?.[21]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[22]?.[9] ?? "",
                place: googleSheetRows?.[22]?.[10] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[9] ?? "",
                place: googleSheetRows?.[23]?.[10] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const fourthRound: Round = {
    matchGroups: [
      {
        id: "2-1",
        matches: [
          {
            name: googleSheetRows?.[3]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[4]?.[13] ?? "",
                place: googleSheetRows?.[4]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[13] ?? "",
                place: googleSheetRows?.[5]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[13] ?? "",
                place: googleSheetRows?.[6]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[13] ?? "",
                place: googleSheetRows?.[7]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[8]?.[13] ?? "",
                place: googleSheetRows?.[8]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[9]?.[13] ?? "",
                place: googleSheetRows?.[9]?.[14] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        matches: [
          {
            name: googleSheetRows?.[13]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[14]?.[13] ?? "",
                place: googleSheetRows?.[14]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[13] ?? "",
                place: googleSheetRows?.[15]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[13] ?? "",
                place: googleSheetRows?.[16]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[13] ?? "",
                place: googleSheetRows?.[17]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[18]?.[13] ?? "",
                place: googleSheetRows?.[18]?.[14] ?? "",
              },
              {
                name: googleSheetRows?.[19]?.[13] ?? "",
                place: googleSheetRows?.[19]?.[14] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const fifthRound: Round = {
    matchGroups: [
      {
        id: "2-2",
        matches: [
          {
            name: googleSheetRows?.[8]?.[17] ?? "",
            players: [
              {
                name: googleSheetRows?.[9]?.[18] ?? "",
                place: googleSheetRows?.[9]?.[19] ?? "",
              },
              {
                name: googleSheetRows?.[10]?.[18] ?? "",
                place: googleSheetRows?.[10]?.[19] ?? "",
              },
              {
                name: googleSheetRows?.[11]?.[18] ?? "",
                place: googleSheetRows?.[11]?.[19] ?? "",
              },
              {
                name: googleSheetRows?.[12]?.[18] ?? "",
                place: googleSheetRows?.[12]?.[19] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[18] ?? "",
                place: googleSheetRows?.[13]?.[19] ?? "",
              },
              {
                name: googleSheetRows?.[14]?.[18] ?? "",
                place: googleSheetRows?.[14]?.[19] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };

  return [firstRound, secondRound, thirdRound, fourthRound, fifthRound];
};
