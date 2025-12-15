import { createFileRoute } from "@tanstack/react-router";
import AddRecipeCard from "../components/AddRecipeCard";

export const Route = createFileRoute('/addRecipe')({
    component: AddRecipe,
});

function AddRecipe() {
    return (
        <>
            <h3>Add New Recipe</h3>
            <AddRecipeCard />
        </>
    )
}