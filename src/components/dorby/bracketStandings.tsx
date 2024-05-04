import { type Match as MatchType } from '@/types';
import React, { type HTMLAttributes, type FC } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { getCountryCode } from './utils/getCountryCodes';
import { mapPlacementText } from './utils/mapPlacementText';

const getBackgroundColor = (place: string) => {
  if (place === '1') return 'bg-[#ffdc73]';
  if (place === '2') return 'bg-[#D9D9D9]';
  if (place === '3') return 'bg-[#dd7e6b]';
  return '';
};

const getFrontColor = (place: string): HTMLAttributes<HTMLDivElement>['className'] => {
  if (place === '1') return 'text-yellow-700';
  if (place === '2') return 'text-[#4f4f4f]';
  if (place === '3') return 'text-[#573012]';
  return '';
};

const BracketStandings: FC<{ match?: MatchType }> = ({ match }) => {
  if (!match) return null;
  return (
    <div className="h-[36rem] w-[40rem] rounded-2xl border-[0.5rem] border-[#e5afa1] bg-white bg-opacity-75 py-6">
      <div className="flex w-full">
        <div className="w-full flex flex-col gap-2">
          {match.players.map((player, idx) => (
            <div
              key={idx}
              className={`flex justify-between ${getBackgroundColor(player.place)} px-7 py-2`}
            >
              <span
                className={`text-4xl font-semibold ${getFrontColor(player.place)}`}
              >
                {getCountryCode(player.name) ? (
                  <ReactCountryFlag
                    countryCode={getCountryCode(player.name)}
                    svg
                    style={{
                      width: '1.5em',
                      height: '1em',
                      marginRight: '0.5em',
                      borderRadius: '0.25em',
                    }}
                  />
                ) : null}
                {player.name || '-'}
              </span>
              <span
                className={`min-w-12 text-center text-4xl font-semibold ${getFrontColor(player.place)}`}
              >
                {player.place ? mapPlacementText(player.place) : 'TBD'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BracketStandings;
