import React, { type FC } from "react";
import type { Round } from "@/types";

interface Props {
  round: Round;
}

const RoundComponent: FC<Props> = ({ round }) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      {round.matchGroups.map((group) => (
        <div className="flex w-full flex-col" key={group.id}>
          <h3 className="text-center text-4xl font-bold text-white">
            {group.id}
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
                    <span className="font-semibold">{match.name}</span>
                    <span className="font-semibold">Place</span>
                  </div>
                  {match.players.map((player, idx) => {
                    return (
                      <div key={idx} className="flex flex-row justify-between">
                        <span className="font-semibold">
                          {player.name || "TBD"}
                        </span>
                        <span className="font-semibold text-center min-w-10">
                          {player.place || "TBD"}
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
