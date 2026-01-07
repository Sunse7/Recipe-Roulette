import Button from "./Button";

export default function AddRecipeCard() {
  function handleClick() {
    console.log('Clicked save!');
    
  }

  return (
    <>
      <section>
        <input type='file' title='Lägg till bild' accept='image/*' />
        <img />
        <p>Lägg till ingredienser</p>
        <textarea />
        <p>Gör så här:</p>
        <textarea />
      </section>
      <Button title='Spara' onClick={handleClick()} />
    </>
  )
}
