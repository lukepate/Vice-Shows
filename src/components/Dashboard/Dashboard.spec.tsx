import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../types/showData';

test('The Dashboard renders', async () => {
    const history = createMemoryHistory()
   render(
        <Router history={history}>
            <Dashboard currentShows={showsData} />
        </Router>
    );
    screen.getByTestId('dashboard');
});