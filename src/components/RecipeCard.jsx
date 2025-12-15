import React from "react";

export default function RecipeCard({ ingredients, instructions }) {
  return (
    <>
      <section>
        <img />
        <p>Ingredienser</p>
        <p>{ingredients}</p>
        <p>Gör så här</p>
        <p>{instructions}</p>
      </section>
    </>
  );
}
