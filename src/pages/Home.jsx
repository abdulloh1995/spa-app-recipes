import React, {useEffect, useState} from 'react';
import {getAllCategories} from "../api/api";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";

const Home = () => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, []);
    return (
        <div>
            {!catalog.length ? (<Loader/>) : (<CategoryList catalog={catalog}/>)}
        </div>
    );
};

export default Home;