import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFilterCategory} from "../api/api";
import Loader from "../components/Loader";
import MealList from "../components/MealList";

const Category = () => {
    const {name} = useParams() //useParams bizga url da kevotkan id ni olib berishga yordam beradi
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name]);

    return (
        <div>
            {!meals.length ? <Loader/> : <MealList meals={meals} />}
        </div>
    );
};

export default Category;