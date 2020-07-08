import React from 'react';
import { render, waitForElement, fireEvent, screen } from '@testing-library/react';
import { server, rest } from './test/workerSetup';
import App from './App';

describe('App test', () => {
  it('renders teams elements', async () => {
    const { getByText } = render(<App />);
    const [madridElement, baskoniaElement] = await waitForElement(() => [
      getByText(/Real Madrid/i),
      getByText(/Baskonia/i),
    ])
    expect(madridElement).toBeInTheDocument();
    expect(baskoniaElement).toBeInTheDocument();
  });

  it('renders coach and players elements', async () => {
    const { getByText } = render(<App />);
    const [madridElement] = await waitForElement(() => [
      getByText(/Real Madrid/i),
    ]);
    fireEvent.click(madridElement);
    const [coachElement, playersElement] = await waitForElement(() => [
      getByText(/Pablo Laso/i),
      screen.queryAllByTestId('players')
    ]);
    expect(coachElement).toBeInTheDocument();
    expect(playersElement).toHaveLength(5);
  });

  it('renders error element', async () => {
    server.use(
      rest.get('/team/:id', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    )
    const { getByText } = render(<App />);
    const [madridElement] = await waitForElement(() => [
      getByText(/Real Madrid/i),
    ]);
    fireEvent.click(madridElement);
    const [errorElement] = await waitForElement(() => [
      getByText(/Error/i)
    ]);
    expect(errorElement).toBeInTheDocument();
  });
});
