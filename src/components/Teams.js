import React from 'react';

export const Teams = ({ onClickTeam, teams }) => {
  return (
    <div className="teams">
      {
        teams.length > 0 && teams.map(team => (
          <div
            key={team.id}
            className="team"
            onClick={() => onClickTeam && onClickTeam(team.id)}
          >
            <h3>{team.name}</h3>
            <h6>Arena: {team.arena}</h6>
          </div>
        ))
      }
    </div>
  );
}