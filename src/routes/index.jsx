import { createFileRoute } from '@tanstack/react-router'
import Button from '../components/Button';
import RecipeCard from '../components/RecipeCard';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  function handleClick() {
    console.log('Clicked!');
    
  }
  
  return (
    <>
      <Button title={'Roulette!'} onClick={handleClick} />
      <RecipeCard />
    </>
  )
}
