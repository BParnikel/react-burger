import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

// export const addIngredient2 = (ingredientName) => {
//     return {
//         type: ADD_INGREDIENT,
//         ingredientName
//     }
// }

export const addIngredient = (ingredientName) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName
  }
  // return (dispatch, getState) => {
  //     console.log(getState().totalPrice)
  //     setTimeout(() => {
  //         dispatch(addIngredient2(ingredientName))
  //     }, 1000)
  // }
};

export const removeIngredient = (ingredientName) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName
  }
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
};

export const initIngredients = () => {
  return dispatch => {
    axios.get('ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data))
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed())
      });
  }
};