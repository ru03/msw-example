// /src/mocks/handler.js
import { playerHandlers } from './players';
import { teamHandlers } from './teams';

export const handlers = [...teamHandlers, ...playerHandlers];