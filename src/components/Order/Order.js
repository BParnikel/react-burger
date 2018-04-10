import React from 'react';

import classes from './Order.css'

const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientsString = ingredients.map(ig => {
        return <span key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-blob',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
            }}>{ig.name}: {ig.amount}</span>
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsString}</p>
            <p>Total price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;