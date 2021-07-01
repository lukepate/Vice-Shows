import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './index';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../mockdata';

test('The Dashboard renders', async () => {
    const history = createMemoryHistory();
   render(
        <Router history={history}>
            <Dashboard currentShows={showsData} />
        </Router>
    );
    screen.getByTestId('dashboard');
});

test('should render first show in list', async () => {
    const history = createMemoryHistory();
    const { debug } = render(
        <Router history={history}>
            <Dashboard currentShows={showsData} />
        </Router>
    );

    expect(screen.getByText('Gaycation')).toBeTruthy();
});