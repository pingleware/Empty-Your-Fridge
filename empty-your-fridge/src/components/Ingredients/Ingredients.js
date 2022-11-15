import React, { useState } from "react";
import { useIngredientContext } from "../../utils/IngredientsContext";
import { useRecipeContext } from "../../utils/RecipesContext";
import { cuisines, meals, health } from "../../utils/types";
import apiQuery from "../../utils/API";

const Ingredients = () => {
  const [newIngredientInput, setNewIngredientInput] = useState("");
  const [cuisineSelection, setCuisineSelection] = useState("");
  const [mealSelection, setMealSelection] = useState("");
  const [healthSelection, setHealthSelection] = useState("");

  const { ingredients, addIngredient } = useIngredientContext();
  const { recipes, setRecipes } = useRecipeContext();
  // console.log(ingredients);
  console.log(recipes);

  const createApiCall = async (e) => {
    e.preventDefault();
    let getRecipes = await apiQuery(
      ingredients,
      healthSelection,
      cuisineSelection,
      mealSelection
    );
    setRecipes(getRecipes);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    addIngredient(newIngredientInput.toLowerCase());
    setNewIngredientInput("");
  };

  //! NEED TO MAKE SURE THAT USERS CANT INPUT EMPTY ""
  const handleIngredientInput = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setNewIngredientInput(inputValue);
  };

  const changeCuisine = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setCuisineSelection(selectValue);
  };

  const changeMeal = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setMealSelection(selectValue);
  };

  const changeHealth = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setHealthSelection(selectValue);
  };

  return (
    <div>
      <h3>
        Type in the ingredient and click "Add" to enter your ingredient to the
        list. When ready, click on "Search Recipes" to view all the yummy
        recipes that match your criteria!
      </h3>
      <form>
        <input
          type="text"
          placeholder="Ingredients"
          onChange={handleIngredientInput}
          value={newIngredientInput}
        />
        <button
          onClick={handleInputChange}
          type="submit"
          className="ingredient-btn"
        >
          <strong>Add</strong>
        </button>

        <select onChange={changeCuisine}>
          <option
            value="Cuisine type"
            defaultValue="Cuisine type"
            disabled
            hidden
          >
            Cuisine type
          </option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
              {cuisine}
            </option>
          ))}
        </select>

        <select onChange={changeMeal}>
          <option value="Meal type" defaultValue="Meal type" disabled hidden>
            Meal type
          </option>
          {meals.map((meal) => (
            <option key={meal} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </select>

        <select onChange={changeHealth}>
          <option
            value="Health type"
            defaultValue="Health type"
            disabled
            hidden
          >
            Health type
          </option>
          {health.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>

        <button type="submit" className="submit-input" onClick={createApiCall}>
          Search recipes
        </button>
      </form>
    </div>
  );
};

export default Ingredients;
