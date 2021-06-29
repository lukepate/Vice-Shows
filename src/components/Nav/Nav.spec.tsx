import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('The Dashboard renders', async () => {
    const history = createMemoryHistory()
   render(
        <Router history={history}>
            <Nav />
        </Router>
    );
    screen.getByTestId('nav');
});