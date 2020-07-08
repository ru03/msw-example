// /src/mocks/workerSetup.js
import { setupWorker } from 'msw';
import { handlers } from './handlers';
export const server = setupWorker(...handlers);
