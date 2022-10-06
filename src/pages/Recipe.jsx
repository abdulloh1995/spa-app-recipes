import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMealById} from "../api/api";
import Loader from "../components/Loader";

const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, []);

    return (<div>
            <button className="btn" onClick={goBack}>Go Back</button>
            {!recipe.idMeal ? <Loader/> : (<div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6><b>Category:</b> {recipe.strCategory}</h6>
                    {!recipe.strArea ? null : <h6><b>Area:</b> {recipe.strArea}</h6>}
                    <p>{recipe.strInstructions}</p>
                    <table className="highlight">
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map(key => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                        })}
                        </tbody>
                    </table>
                    {!recipe.strYoutube ? null : (<div className="row">
                            <h5>Video Recipe</h5>
                            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id}/>
                        </div>)}
                </div>)}
        </div>);
};

export default Recipe;