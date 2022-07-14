import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  // No se deben poner hooks dentro de condicionales

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) =>{

    if( categories.includes( newCategory )) return;

    setCategories([newCategory,...categories])
    // setCategories( cat => [...cat, 'Valorant'] )
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // cuando la funcion lleva "on" significa que va emitir un valor osea un evento, ejemplo "onChange"
        onNewCategory={ onAddCategory }
      />

        {/* no se debe usar el "index" que nos proporciona la funcion map */}
        {
          categories.map(category =>(
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
    </>
  )
}
