import { type Match as MatchType } from "@/types";
import React, { type FC } from "react";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "./utils/getCountryCodes";
import { isWinner } from "./utils/isWinner";
import { mapPlacementText } from "./utils/mapPlacementText";

const Match: FC<{ match?: MatchType; big?: boolean }> = ({ match, big }) => {
  if (!match) return null;
  const height = big ? "h-[23rem]" : "h-[17rem]";
  return (
    <div
      className={`${height} w-[20rem] rounded-2xl border-[0.5rem] border-[#e5afa1] bg-white bg-opacity-75 p-4`}
    >
      <div>
        <div className="flex flex-col gap-5">
          <div className="mb-2 flex justify-between">
            <span className="text-2xl font-bold">{match.name}</span>
            <span className="text-2xl font-bold">Place</span>
          </div>
          {match.players.map((player, idx) => (
            <div key={idx} className="flex justify-between">
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
                {player.name || "-"}
              </span>
              <span
                className={`min-w-12 text-center text-xl font-semibold ${player.place ? (isWinner(player.place, big) ? "text-green-700" : "text-red-600") : ""}`}
              >
                {player.place ? mapPlacementText(player.place) : "TBD"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
