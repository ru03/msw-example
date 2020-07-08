// /src/mocks/teams.js
import { rest } from 'msw';

export const teamHandlers = [
  rest.get('/teams', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        teams: [
          {
            id: 1,
            name: 'Real Madrid',
            arena: 'Palacio de los deportes'
          },
          {
            id: 2,
            name: 'Baskonia',
            arena: 'Buesa Arena'
          }
        ],
        pagination: {
          totalElements: 2,
          size: 10,
          page: 1
        }
      })
    );
  }),
  rest.get('/team/:id', (req, res, ctx) => {
    const { id } = req.params;
    let team;
    switch (parseInt(id)) {
      case 1:
        team = {
          coach: 'Pablo Laso',
          players: [
            { id: 1, name: 'Campazzo', position: 'G', number: 7 },
            { id: 2, name: 'Llull', position: 'G', number: 23 },
            { id: 3, name: 'Rudy', position: 'F', number: 5 },
            { id: 4, name: 'Randolph', position: 'PF', number: 3 },
            { id: 5, name: 'Tavares', position: 'C', number: 22 }
          ]
        }
        break;
      default:
        team = {
          coach: 'Dusko Ivanovic',
          players: [
            { id: 6, name: 'Vildoza', position: 'G', number: 3 },
            { id: 7, name: 'Janning', position: 'G', number: 11 },
            { id: 8, name: 'Shields', position: 'F', number: 31 },
            { id: 9, name: 'Polonara', position: 'PF', number: 33 },
            { id: 10, name: 'Eric', position: 'C', number: 50 }
          ]
        }
        break;
    }
    return res(
      ctx.status(200),
      ctx.json(team)
    );
  })
];
