import type { Round } from "@/types/Round";

export const handleDorbySwissApiResponse = (
  googleSheetRows?: string[][],
): Round[] => {
  const firstRound: Round = {
    matchGroups: [
      {
        id: "0-0",
        matches: [
          {
            name: googleSheetRows?.[2]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[4]?.[0] ?? "",
                place: googleSheetRows?.[4]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[0] ?? "",
                place: googleSheetRows?.[5]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[0] ?? "",
                place: googleSheetRows?.[6]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[0] ?? "",
                place: googleSheetRows?.[7]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[9]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[11]?.[0] ?? "",
                place: googleSheetRows?.[11]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[12]?.[0] ?? "",
                place: googleSheetRows?.[12]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[0] ?? "",
                place: googleSheetRows?.[13]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[14]?.[0] ?? "",
                place: googleSheetRows?.[14]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[16]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[18]?.[0] ?? "",
                place: googleSheetRows?.[18]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[19]?.[0] ?? "",
                place: googleSheetRows?.[19]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[20]?.[0] ?? "",
                place: googleSheetRows?.[20]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[0] ?? "",
                place: googleSheetRows?.[21]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[23]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[25]?.[0] ?? "",
                place: googleSheetRows?.[25]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[26]?.[0] ?? "",
                place: googleSheetRows?.[26]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[27]?.[0] ?? "",
                place: googleSheetRows?.[27]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[28]?.[0] ?? "",
                place: googleSheetRows?.[28]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[30]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[32]?.[0] ?? "",
                place: googleSheetRows?.[32]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[33]?.[0] ?? "",
                place: googleSheetRows?.[33]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[34]?.[0] ?? "",
                place: googleSheetRows?.[34]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[35]?.[0] ?? "",
                place: googleSheetRows?.[35]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[37]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[39]?.[0] ?? "",
                place: googleSheetRows?.[39]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[40]?.[0] ?? "",
                place: googleSheetRows?.[40]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[41]?.[0] ?? "",
                place: googleSheetRows?.[41]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[42]?.[0] ?? "",
                place: googleSheetRows?.[42]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[44]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[46]?.[0] ?? "",
                place: googleSheetRows?.[46]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[47]?.[0] ?? "",
                place: googleSheetRows?.[47]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[48]?.[0] ?? "",
                place: googleSheetRows?.[48]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[49]?.[0] ?? "",
                place: googleSheetRows?.[49]?.[1] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[51]?.[0] ?? "",
            players: [
              {
                name: googleSheetRows?.[53]?.[0] ?? "",
                place: googleSheetRows?.[53]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[54]?.[0] ?? "",
                place: googleSheetRows?.[54]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[55]?.[0] ?? "",
                place: googleSheetRows?.[55]?.[1] ?? "",
              },
              {
                name: googleSheetRows?.[56]?.[0] ?? "",
                place: googleSheetRows?.[56]?.[1] ?? "",
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
                name: googleSheetRows?.[3]?.[4] ?? "",
                place: googleSheetRows?.[3]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[4] ?? "",
                place: googleSheetRows?.[4]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[4] ?? "",
                place: googleSheetRows?.[5]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[4] ?? "",
                place: googleSheetRows?.[6]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[8]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[10]?.[4] ?? "",
                place: googleSheetRows?.[10]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[11]?.[4] ?? "",
                place: googleSheetRows?.[11]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[12]?.[4] ?? "",
                place: googleSheetRows?.[12]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[4] ?? "",
                place: googleSheetRows?.[13]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[15]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[17]?.[4] ?? "",
                place: googleSheetRows?.[17]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[18]?.[4] ?? "",
                place: googleSheetRows?.[18]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[19]?.[4] ?? "",
                place: googleSheetRows?.[19]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[20]?.[4] ?? "",
                place: googleSheetRows?.[20]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[22]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[24]?.[4] ?? "",
                place: googleSheetRows?.[24]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[25]?.[4] ?? "",
                place: googleSheetRows?.[25]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[26]?.[4] ?? "",
                place: googleSheetRows?.[26]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[27]?.[4] ?? "",
                place: googleSheetRows?.[27]?.[5] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "0-1",
        matches: [
          {
            name: googleSheetRows?.[31]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[33]?.[4] ?? "",
                place: googleSheetRows?.[33]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[34]?.[4] ?? "",
                place: googleSheetRows?.[34]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[35]?.[4] ?? "",
                place: googleSheetRows?.[35]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[36]?.[4] ?? "",
                place: googleSheetRows?.[36]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[38]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[40]?.[4] ?? "",
                place: googleSheetRows?.[40]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[41]?.[4] ?? "",
                place: googleSheetRows?.[41]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[42]?.[4] ?? "",
                place: googleSheetRows?.[42]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[43]?.[4] ?? "",
                place: googleSheetRows?.[43]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[45]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[47]?.[4] ?? "",
                place: googleSheetRows?.[47]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[48]?.[4] ?? "",
                place: googleSheetRows?.[48]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[49]?.[4] ?? "",
                place: googleSheetRows?.[49]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[50]?.[4] ?? "",
                place: googleSheetRows?.[50]?.[5] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[52]?.[4] ?? "",
            players: [
              {
                name: googleSheetRows?.[54]?.[4] ?? "",
                place: googleSheetRows?.[54]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[55]?.[4] ?? "",
                place: googleSheetRows?.[55]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[56]?.[4] ?? "",
                place: googleSheetRows?.[56]?.[5] ?? "",
              },
              {
                name: googleSheetRows?.[57]?.[4] ?? "",
                place: googleSheetRows?.[57]?.[5] ?? "",
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
                name: googleSheetRows?.[3]?.[8] ?? "",
                place: googleSheetRows?.[3]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[8] ?? "",
                place: googleSheetRows?.[4]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[8] ?? "",
                place: googleSheetRows?.[5]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[8] ?? "",
                place: googleSheetRows?.[6]?.[9] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[8]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[10]?.[8] ?? "",
                place: googleSheetRows?.[10]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[11]?.[8] ?? "",
                place: googleSheetRows?.[11]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[12]?.[8] ?? "",
                place: googleSheetRows?.[12]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[8] ?? "",
                place: googleSheetRows?.[13]?.[9] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "1-1",
        matches: [
          {
            name: googleSheetRows?.[16]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[18]?.[8] ?? "",
                place: googleSheetRows?.[18]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[19]?.[8] ?? "",
                place: googleSheetRows?.[19]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[20]?.[8] ?? "",
                place: googleSheetRows?.[20]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[8] ?? "",
                place: googleSheetRows?.[21]?.[9] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[23]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[25]?.[8] ?? "",
                place: googleSheetRows?.[25]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[26]?.[8] ?? "",
                place: googleSheetRows?.[26]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[27]?.[8] ?? "",
                place: googleSheetRows?.[27]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[28]?.[8] ?? "",
                place: googleSheetRows?.[28]?.[9] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[30]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[32]?.[8] ?? "",
                place: googleSheetRows?.[32]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[33]?.[8] ?? "",
                place: googleSheetRows?.[33]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[34]?.[8] ?? "",
                place: googleSheetRows?.[34]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[35]?.[8] ?? "",
                place: googleSheetRows?.[35]?.[9] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[37]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[39]?.[8] ?? "",
                place: googleSheetRows?.[39]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[40]?.[8] ?? "",
                place: googleSheetRows?.[40]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[41]?.[8] ?? "",
                place: googleSheetRows?.[41]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[42]?.[8] ?? "",
                place: googleSheetRows?.[42]?.[9] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "0-2",
        matches: [
          {
            name: googleSheetRows?.[45]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[47]?.[8] ?? "",
                place: googleSheetRows?.[47]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[48]?.[8] ?? "",
                place: googleSheetRows?.[48]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[49]?.[8] ?? "",
                place: googleSheetRows?.[49]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[50]?.[8] ?? "",
                place: googleSheetRows?.[50]?.[9] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[52]?.[8] ?? "",
            players: [
              {
                name: googleSheetRows?.[54]?.[8] ?? "",
                place: googleSheetRows?.[54]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[55]?.[8] ?? "",
                place: googleSheetRows?.[55]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[56]?.[8] ?? "",
                place: googleSheetRows?.[56]?.[9] ?? "",
              },
              {
                name: googleSheetRows?.[57]?.[8] ?? "",
                place: googleSheetRows?.[57]?.[9] ?? "",
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
            name: googleSheetRows?.[1]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[3]?.[12] ?? "",
                place: googleSheetRows?.[3]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[12] ?? "",
                place: googleSheetRows?.[4]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[12] ?? "",
                place: googleSheetRows?.[5]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[12] ?? "",
                place: googleSheetRows?.[6]?.[13] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        matches: [
          {
            name: googleSheetRows?.[9]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[11]?.[12] ?? "",
                place: googleSheetRows?.[11]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[12]?.[12] ?? "",
                place: googleSheetRows?.[12]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[12] ?? "",
                place: googleSheetRows?.[13]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[14]?.[12] ?? "",
                place: googleSheetRows?.[14]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[12] ?? "",
                place: googleSheetRows?.[15]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[12] ?? "",
                place: googleSheetRows?.[16]?.[13] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[18]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[20]?.[12] ?? "",
                place: googleSheetRows?.[20]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[12] ?? "",
                place: googleSheetRows?.[21]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[22]?.[12] ?? "",
                place: googleSheetRows?.[22]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[12] ?? "",
                place: googleSheetRows?.[23]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[24]?.[12] ?? "",
                place: googleSheetRows?.[24]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[25]?.[12] ?? "",
                place: googleSheetRows?.[25]?.[13] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "1-2",
        matches: [
          {
            name: googleSheetRows?.[28]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[30]?.[12] ?? "",
                place: googleSheetRows?.[30]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[31]?.[12] ?? "",
                place: googleSheetRows?.[31]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[32]?.[12] ?? "",
                place: googleSheetRows?.[32]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[33]?.[12] ?? "",
                place: googleSheetRows?.[33]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[34]?.[12] ?? "",
                place: googleSheetRows?.[34]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[35]?.[12] ?? "",
                place: googleSheetRows?.[35]?.[13] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[37]?.[12] ?? "",
            players: [
              {
                name: googleSheetRows?.[39]?.[12] ?? "",
                place: googleSheetRows?.[39]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[40]?.[12] ?? "",
                place: googleSheetRows?.[40]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[41]?.[12] ?? "",
                place: googleSheetRows?.[41]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[42]?.[12] ?? "",
                place: googleSheetRows?.[42]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[43]?.[12] ?? "",
                place: googleSheetRows?.[43]?.[13] ?? "",
              },
              {
                name: googleSheetRows?.[44]?.[12] ?? "",
                place: googleSheetRows?.[44]?.[13] ?? "",
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
            name: googleSheetRows?.[1]?.[16] ?? "",
            players: [
              {
                name: googleSheetRows?.[3]?.[16] ?? "",
                place: googleSheetRows?.[3]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[16] ?? "",
                place: googleSheetRows?.[4]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[16] ?? "",
                place: googleSheetRows?.[5]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[16] ?? "",
                place: googleSheetRows?.[6]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[16] ?? "",
                place: googleSheetRows?.[7]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[8]?.[16] ?? "",
                place: googleSheetRows?.[8]?.[17] ?? "",
              },
            ],
          },
        ],
      },
      {
        id: "2-2",
        matches: [
          {
            name: googleSheetRows?.[11]?.[16] ?? "",
            players: [
              {
                name: googleSheetRows?.[13]?.[16] ?? "",
                place: googleSheetRows?.[13]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[14]?.[16] ?? "",
                place: googleSheetRows?.[14]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[16] ?? "",
                place: googleSheetRows?.[15]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[16] ?? "",
                place: googleSheetRows?.[16]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[16] ?? "",
                place: googleSheetRows?.[17]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[18]?.[16] ?? "",
                place: googleSheetRows?.[18]?.[17] ?? "",
              },
            ],
          },
          {
            name: googleSheetRows?.[20]?.[16] ?? "",
            players: [
              {
                name: googleSheetRows?.[22]?.[16] ?? "",
                place: googleSheetRows?.[22]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[16] ?? "",
                place: googleSheetRows?.[23]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[24]?.[16] ?? "",
                place: googleSheetRows?.[24]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[25]?.[16] ?? "",
                place: googleSheetRows?.[25]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[26]?.[16] ?? "",
                place: googleSheetRows?.[26]?.[17] ?? "",
              },
              {
                name: googleSheetRows?.[27]?.[16] ?? "",
                place: googleSheetRows?.[27]?.[17] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const sixthRound: Round = {
    matchGroups: [
      {
        id: "2-2",
        matches: [
          {
            name: googleSheetRows?.[1]?.[20] ?? "",
            players: [
              {
                name: googleSheetRows?.[3]?.[20] ?? "",
                place: googleSheetRows?.[3]?.[21] ?? "",
              },
              {
                name: googleSheetRows?.[4]?.[20] ?? "",
                place: googleSheetRows?.[4]?.[21] ?? "",
              },
              {
                name: googleSheetRows?.[5]?.[20] ?? "",
                place: googleSheetRows?.[5]?.[21] ?? "",
              },
              {
                name: googleSheetRows?.[6]?.[20] ?? "",
                place: googleSheetRows?.[6]?.[21] ?? "",
              },
              {
                name: googleSheetRows?.[7]?.[20] ?? "",
                place: googleSheetRows?.[7]?.[21] ?? "",
              },
              {
                name: googleSheetRows?.[8]?.[20] ?? "",
                place: googleSheetRows?.[8]?.[21] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };
  const standings: Round = {
    matchGroups: [
      {
        id: "2-2",
        matches: [
          {
            name: googleSheetRows?.[10]?.[24] ?? "",
            players: [
              {
                name: googleSheetRows?.[12]?.[24] ?? "",
                place: googleSheetRows?.[12]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[13]?.[24] ?? "",
                place: googleSheetRows?.[13]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[14]?.[24] ?? "",
                place: googleSheetRows?.[14]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[15]?.[24] ?? "",
                place: googleSheetRows?.[15]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[16]?.[24] ?? "",
                place: googleSheetRows?.[16]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[17]?.[24] ?? "",
                place: googleSheetRows?.[17]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[18]?.[24] ?? "",
                place: googleSheetRows?.[18]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[19]?.[24] ?? "",
                place: googleSheetRows?.[19]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[20]?.[24] ?? "",
                place: googleSheetRows?.[20]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[21]?.[24] ?? "",
                place: googleSheetRows?.[21]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[22]?.[24] ?? "",
                place: googleSheetRows?.[22]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[23]?.[24] ?? "",
                place: googleSheetRows?.[23]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[24]?.[24] ?? "",
                place: googleSheetRows?.[24]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[25]?.[24] ?? "",
                place: googleSheetRows?.[25]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[26]?.[24] ?? "",
                place: googleSheetRows?.[26]?.[25] ?? "",
              },
              {
                name: googleSheetRows?.[27]?.[24] ?? "",
                place: googleSheetRows?.[27]?.[25] ?? "",
              },
            ],
          },
        ],
      },
    ],
  };

  // return [firstRound, secondRound, thirdRound, fourthRound, fifthRound];
  return [
    firstRound,
    secondRound,
    thirdRound,
    fourthRound,
    fifthRound,
    sixthRound,
    standings,
  ];
};
