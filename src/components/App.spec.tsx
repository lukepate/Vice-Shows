import React from 'react';
import "@testing-library/jest-dom";
import { render, waitFor } from '@testing-library/react';
import App from './App';
import Dashboard from './Dashboard';
import { showsData } from '../mockdata';
import nock from 'nock';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import fetch from 'node-fetch';
import useFetch from "react-fetch-hook";
import "whatwg-fetch";


test('shows render', async () => {
    const history = createMemoryHistory()

    nock(`https://vice-json.herokuapp.com`)
      .get('/shows', 200)
      .reply(200, {
        data: showsData
      })
    const app = render(<App />);

    await waitFor(() => expect(app).toBeTruthy());
});

