import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './index';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { showsData } from '../../mockdata';

test('The Dashboard renders', async () => {
    const history = createMemoryHistory()
   render(
        <Router history={history}>
            <Dashboard currentShows={showsData} />
        </Router>
    );
    screen.getByTestId('dashboard');
});



// test('The Dashboard renders', async () => {
//     const history = createMemoryHistory()
//     const { getByAltText } = render(
//         <Router history={history}>
//             <Dashboard currentShows={showsData} />
//         </Router>
//     );
//     const dashboard = screen.getByTestId('dashboard');
//     // __reactEventHandlers$jlojnpv5hw
//     console.log(dashboard);
// });