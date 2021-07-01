import React from 'react';
import "@testing-library/jest-dom";
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { showsData } from '../mockdata';
import nock from 'nock';
import "whatwg-fetch";


test('shows render', async () => {
    nock(`https://vice-json.herokuapp.com`)
      .get('/shows', 200)
      .reply(200, {
        data: showsData
      })
    const app = render(<App />);
    await waitFor(() => expect(app).toBeTruthy());
});

