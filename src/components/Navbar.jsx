import React from 'react';
import { Link } from '@tanstack/react-router';

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to={'/'} className="[&.active]:font-bold">Home</Link>
        <Link to={'/addRecipe'} className="[&.active]:font-bold">Add</Link>
        <Link to={'/allRecipes'} className="[&.active]:font-bold">All recipe</Link>
        <hr />
      </nav>
    </header>
  )
}
