import React from 'react';
import {useParams, useHistory, useLocation, useRouteMatch} from "react-router-dom";

const Movie = () => {
    const {id} = useParams() //useParams bizga url da kevotkan id ni olib berishga yordam beradi
    const {goBack} = useHistory()
    const value = useRouteMatch()
    console.log(value)
    return (
        <div>
            <h1>Movie with id {id}</h1>
            <button className="btn" onClick={goBack}>Go back</button>
        </div>
    );
};

export default Movie;