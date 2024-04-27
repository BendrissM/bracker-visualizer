import { type Match as MatchType } from "@/types";
import React, { type FC } from "react";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "./utils/getCountryCodes";

const Standings: FC<{ match?: MatchType }> = ({ match }) => {
    if (!match) return null;
    const firstEight = match.players.slice(0, 8);
    const lastEight = match.players.slice(8);
  return (
    <div className="h-[35rem] w-[55rem] rounded-2xl border-[0.5rem] border-[#e5afa1] bg-white bg-opacity-75 p-7">
      <div className="flex w-full">
        <div className="flex-1">
          {firstEight.map((player, idx) => (
            <div key={idx} className="flex">
              <span className="mb-[1.4rem] text-4xl font-semibold">
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
            </div>
          ))}
        </div>
        <div className="flex-1">
          {lastEight.map((player, idx) => (
            <div key={idx} className="flex">
              <span className="mb-[1.4rem] text-4xl font-semibold">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Standings;
