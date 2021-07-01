import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './index';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../mockData';

test('The Main renders', async () => {
    const history = createMemoryHistory();
   render(
        <Router history={history}>
            <Main currentShows={showsData} />
        </Router>
    );
    screen.getByTestId('Main');
});

test('should render first show in list', async () => {
    const history = createMemoryHistory();
    const { debug } = render(
        <Router history={history}>
            <Main currentShows={showsData} />
        </Router>
    );

    expect(screen.getByText('Gaycation')).toBeTruthy();
});