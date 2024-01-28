import React, { type FC } from "react";
import type { Round } from "@/types";
import type { SheetType } from "@/types/SheetType";
import { isWinner } from "@/utils";
import { mapPlacementText } from "./utils/mapPlacementText";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "./utils/getCountryCode";

interface Props {
  round: Round<SheetType.BRACKET>;
}

const RoundComponent: FC<Props> = ({ round }) => {
  return (
    <div className="flex flex-1 flex-col gap-10">
      {round.matchGroups.map((group) => (
        <div className="flex w-full flex-col gap-3" key={group.name}>
          <h3 className="text-center text-4xl font-bold text-white">
            {group.name}
          </h3>
          <div
            style={{ background: "#e8dcb5" }}
            className="flex flex-col px-2 py-2"
          >
            <div className="border-b-8 border-black" />
            {group.matches.map((match) => {
              return (
                <>
                  <div className="mb-2 mt-2 flex flex-row justify-between">
                    <span className="text-2xl font-semibold">{match.name}</span>
                    <span className="text-2xl font-semibold">Place</span>
                  </div>
                  {match.players.map((player, idx) => {
                    return (
                      <div
                        key={idx}
                        className="mb-1 flex flex-row justify-between"
                      >
                        <span className="text-xl font-semibold">
                          {getCountryCode(player.name) ? (
                            <ReactCountryFlag
                              countryCode={getCountryCode(player.name)}
                              svg
                              style={{
                                width: "1.5em",
                                height: "1em",
                                marginRight: "0.5em",
                                borderRadius: "0.25em",
                              }}
                            />
                          ) : null}
                          {player.name || "TBD"}
                        </span>
                        <span
                          className={`min-w-10 text-center text-xl font-semibold ${player.place ? (isWinner(player.place, group.name) ? "text-green-600" : "text-red-600") : ""}`}
                        >
                          {player.place
                            ? mapPlacementText(player.place, group.name)
                            : "TBD"}
                        </span>
                      </div>
                    );
                  })}
                  <div className="mt-2 border-b-8 border-black" />
                </>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoundComponent;
