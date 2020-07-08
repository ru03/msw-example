import React from 'react';

export const Roster = ({ coach, players }) => {
  return (
    <div>
      <div>Coach: <span>{coach}</span></div>
      <div>
        {players.length > 0 && players.map(player => {
          return (
            <div key={player.id} data-testid="players">
              <h3>#{player.number} {player.name}</h3>
              <div>
                pos: <span>{player.position}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
