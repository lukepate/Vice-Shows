import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from './Slider';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../types/showData';

test('The Slider renders', async () => {
    const history = createMemoryHistory()
   render(
        <Router history={history}>
            <Slider currentShows={showsData} updateActiveShow={jest.fn()} />
        </Router>
    );
    screen.getByTestId('slider');
});