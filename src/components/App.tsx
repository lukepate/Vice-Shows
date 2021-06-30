import React from 'react';
import Dashboard from './Dashboard'
import useFetch from "react-fetch-hook";
import styles from './styles/App.scss';
import { Show } from '../types/show';
import Logo from './Nav/ViceLogo';
import Error from './Error';
import Loading from './Loading';

function App() {
    const url = process.env.NODE_ENV === 'production' ? "https://vice-json.herokuapp.com/shows" : "http://localhost:3000/shows"

    const { isLoading, error, data } = useFetch<[Show]>(url);

    if (isLoading) return <Loading />;
    if (error) return <Error/>;

    return (
        <div className={styles.container}>
            {data && (
                <Dashboard currentShows={data} />
            )}
        </div>
    );
}

export default App;
