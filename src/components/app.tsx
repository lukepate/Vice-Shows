import React from 'react';
import Dashboard from './Dashboard/Dashboard'
import useFetch from "react-fetch-hook";
import styles from './Styles/App.scss';
import { Show } from '../types/show';


function App() {
    const url = process.env.NODE_ENV === 'production' ? "https://vice-json.herokuapp.com/shows" : "http://localhost:3000/shows"

    const { isLoading, error, data } = useFetch<[Show]>(url);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error Loading Data</p>;

    return (
        <div className={styles.container}>
            {data && (
                <Dashboard currentShows={data} />
            )}
        </div>
    );
}

export default App;