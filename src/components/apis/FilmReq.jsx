import { useEffect, useState } from 'react';
import axios from 'axios';
import consts from './consts.json';

function FilmReq() {
    const [data, setData] = useState({});
    const [filmTitle, setFilmTitle] = useState('');

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?${consts.omdbKey}&t=${filmTitle}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }, [filmTitle]);

    const makeRequest = () => {
        axios.get(`http://www.omdbapi.com/?${consts.omdbKey}&t=${filmTitle}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    };

    return (
        <div>
            <h2>FilmRequest.js</h2>
            <p>Enter the name of the film you are searching for here</p>
            <input type="text" onChange={(e) => setFilmTitle(e.target.value)} />
            <p>
                Do not click this button until the fields above are correctly filled
            </p>
            <button type="button" onClick={(e) => makeRequest(e)}>Click me</button>

            {
                data && (
                    <>
                        <h4>{data.Title}</h4>
                        <h4>{data.Year}</h4>
                        <h4>{data.Rated}</h4>
                        <h4>{data.Genre}</h4>
                        <h4>{data.Plot}</h4>
                        <img src={data.Poster} alt="The poster" />
                    </>
                )
            }
        </div>
    );
}

export default FilmReq;
