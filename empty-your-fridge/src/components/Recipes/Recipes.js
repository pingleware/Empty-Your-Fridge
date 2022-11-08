import React from "react";
import "./styles/recipeStyle.css";
import { recipeStyles as style } from "./styles/RecipesStyles";

// TODO add in a favourites button from fontawesome with the love heart

const Recipes = ({ recipesInfoArr }) => {
  const spreadRecipes = recipesInfoArr[0];
  console.log(spreadRecipes);

  // TODO add in global state for the array of food

  //TODO make the mappedrecipes appear on a useEffect when the search recipes change has happened

  // TODO need to make it so can resubmit the recipe list if they remove ingredients or add more

  const mappedRecipes = !spreadRecipes
    ? ""
    : spreadRecipes.map((recipe) => (
        <li style={style.recipe} key={recipe.label}>
          <h5 style={style.name}>{recipe.label}</h5>
          <div style={style.link}>
            <div style={style.linkStar}>
              <a href={`${recipe.url}`} target="_blank">
                Link
              </a>
              <i style={style.star} className="fa-regular fa-star star"></i>
            </div>
          </div>
          <img
            style={style.pic}
            src={`${recipe.image}`}
            alt={`${recipe.label}`}
          />
        </li>
      ));

  // TODO might have to do a map out of the actual return statement
  return (
    <div style={style.recipesContainer}>
      <h2>Recipes</h2>
      <ul style={style.recipesBox}>
        {/* NEED TO FIGURE OUT WHY MAP NOT WORKING, SOMETHING TO DO WITH UNDEFINED ON LOAD SO MAYBE CHECK OUT USEEFFET!?*/}

        {mappedRecipes}
      </ul>
    </div>
  );
};

export default Recipes;
