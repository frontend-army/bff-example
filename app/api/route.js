import { NextResponse } from "next/server";

function getIngredients(search) {
  return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?i=${search}`)
    .then((response) => response.json())
}

function getDrinks(search) {
  return fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
}

function mapResponse(response) {
  response = {
    ...response[0],
    ...response[1],
  }
  return {
    drinks: response.drinks.map(drink => ({name: drink.strDrink, image: drink.strDrinkThumb, id: drink.idDrink })),
    ingredients: response.ingredients.map(ingredient => ({name: ingredient.strIngredient, id: ingredient.idDrink }))
  }
}

export async function GET(request) {
  const url = new URL(request.url)
  const search = url.searchParams.get("search");
  let response = await Promise.all(
    [getIngredients(search), getDrinks(search)]
  );
  response = mapResponse(response);
  return NextResponse.json(response, { status: 200 });
}
