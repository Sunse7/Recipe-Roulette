import { createFileRoute } from '@tanstack/react-router'
import Button from '../components/Button';

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
    </>
  )
}
