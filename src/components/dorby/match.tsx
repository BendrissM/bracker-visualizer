import { type Match as MatchType } from '@/types';
import React, { useMemo, type FC } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { getCountryCode } from './utils/getCountryCodes';
import { isWinner } from './utils/isWinner';
import { mapPlacementText } from './utils/mapPlacementText';
import clsx from 'clsx';
import FlipMove from 'react-flip-move';
import { v4 as uuidv4 } from 'uuid';

const Match: FC<{
  match?: MatchType;
  big?: boolean;
  small?: boolean;
  group: string;
}> = ({ match, big, small, group }) => {
  const height = useMemo(() => {
    if (big) return 'h-[23rem]';
    if (small) return 'h-[13.5rem]';
    return 'h-[17rem]';
  }, [big, small]);

  const sortedPlayers = useMemo(() => {
    return match
      ? [...match.players]
          .map((player) => {
            const newPlayer = !player.name
              ? { ...player, id: uuidv4() }
              : { ...player };
            if (newPlayer.place !== '') return { ...newPlayer };

            return { ...newPlayer, place: 'TBD' };
          })
          .sort((a, b) => {
            if (isNaN(+a.place) && isNaN(+b.place)) return 0;
            if (isNaN(+a.place)) return 1;
            if (isNaN(+b.place)) return -1;
            return +a.place - +b.place;
          })
      : [];
  }, [match]);

  if (!match) return null;

  const containerClass = clsx('flex flex-col', {
    'gap-2': small,
    'gap-5': !small,
  });

  return (
    <div
      className={`${height} w-[20rem] rounded-2xl border-[0.5rem] border-[#e5afa1] bg-white bg-opacity-75 p-4`}
    >
      <div>
        <div className={containerClass}>
          <div className="mb-2 flex justify-between">
            <span className="text-2xl font-bold">{match.name}</span>
            <span className="text-2xl font-bold">Place</span>
          </div>
          <FlipMove className="flex flex-col gap-4">
            {sortedPlayers.map((player) => (
              <div
                key={`${player.name || player.id}-${group}`}
                className="flex justify-between"
              >
                <span className="text-xl font-semibold">
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
                  {player.name || ''}
                </span>
                <span
                  className={`min-w-12 text-center text-xl font-semibold ${player.place !== 'TBD' ? (isWinner(player.place, big) ? 'text-green-700' : 'text-red-600') : ''}`}
                >
                  {mapPlacementText(player.place)}
                </span>
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
    </div>
  );
};

export default Match;
