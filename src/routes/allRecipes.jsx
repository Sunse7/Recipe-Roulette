import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";

export const Route = createFileRoute("/allRecipes")({
  component: AllRecipes,
});

function AllRecipes() {

  return (
    <>
      <h3>All Recipes!</h3>
    </>
  );
}
