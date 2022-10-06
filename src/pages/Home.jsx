import React, {useEffect, useState} from 'react';
import {getAllCategories} from "../api/api";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import {useHistory, useLocation} from "react-router-dom";

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {pathname, search} = useLocation()
    const {push} = useHistory()

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search: `?s=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ?
                data.categories.filter(item =>
                item.strCategory
                    .toLowerCase()
                    .includes(search.split("=")[1].toLowerCase())) : data.categories)
        })
    }, [search]);
    return (
        <div>
            <Search cb={handleSearch} />
            {!catalog.length ? (<Loader/>) : (<CategoryList catalog={filteredCatalog}/>)}
        </div>
    );
};

export default Home;