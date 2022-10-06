import React from 'react';
import MealItem from "./MealItem";

const MealList = ({meals}) => {
    return (
        <div className="list">
            {meals.map(meal => (
                <MealItem key={meal.idmeal} {...meal} />
            ))}
        </div>
    );
};

export default MealList;