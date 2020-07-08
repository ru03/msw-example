// /src/mocks/players.js
import { rest } from 'msw';

export const playerHandlers = [
  rest.post('/player', (req, res, ctx) => {
    const { name, number, position } = JSON.parse(req.body);

    return res(
      ctx.status(200),
      ctx.json({ id: 11, name, number, position })
    );
  }),
  rest.get('/player/:id', (req, res, ctx) => {
    const { id } = req.params;
    let player;
    switch (parseInt(id)) {
      case 1:
        player = { name: 'Campazzo', position: 'G', number: 7 }
        break;
      default:
        player = { name: 'Vildoza', position: 'G', number: 3 }
        break;
    }
    return res(
      ctx.status(200),
      ctx.json(player)
    );
  })
];
