import React from "react";
import ReactCountryFlag from "react-country-flag";

const Match = () => {
  return (
    <div className="h-[17rem] w-[20rem] rounded-2xl border-[0.5rem] border-[#e5afa1] bg-white bg-opacity-75 p-4">
      <div>
        <div className="flex flex-col gap-5">
          <div className="mb-2 flex justify-between">
            <span className="text-2xl font-bold">Match 1</span>
            <span className="text-2xl font-bold">Place</span>
          </div>
          <div className="flex justify-between">
            <span className="font-smibold text-xl">
              <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                  width: "1.5em",
                  height: "1em",
                  marginRight: "0.5em",
                  borderRadius: "0.25em",
                }}
              />
              Player 1
            </span>
            <span className="font-smibold min-w-12 text-center text-xl text-green-700">
              1st
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-smibold text-xl">
              <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                  width: "1.5em",
                  height: "1em",
                  marginRight: "0.5em",
                  borderRadius: "0.25em",
                }}
              />
              Player 1
            </span>
            <span className="font-smibold min-w-12 text-center text-xl text-green-700">
              2nd
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-smibold text-xl">
              <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                  width: "1.5em",
                  height: "1em",
                  marginRight: "0.5em",
                  borderRadius: "0.25em",
                }}
              />
              Player 1
            </span>
            <span className="font-smibold min-w-12 text-center text-xl text-red-600">
              3rd
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-smibold text-xl">
              <ReactCountryFlag
                countryCode="DE"
                svg
                style={{
                  width: "1.5em",
                  height: "1em",
                  marginRight: "0.5em",
                  borderRadius: "0.25em",
                }}
              />
              Player 1
            </span>
            <span className="font-smibold min-w-12 text-center text-xl text-red-600">
              4th
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
