import React from "react";

export default function RecipeCard({ title, url, ingredients, instructions }) {

  // build an backend api and fetch from there
  fetch('')

  return (
    <>
      <section>
        <h4>{title}</h4>
        <img src={url} />
        <p>Ingredienser:</p>
        <p>{ingredients}</p>
        <p>Gör så här:</p>
        <p>{instructions}</p>
      </section>
    </>
  );
}
