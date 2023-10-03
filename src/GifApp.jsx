import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
 
  const onAddCategory = ( newCategory ) => {

    if (categories.includes( newCategory )) return;
    
    //categories.push('Toto');
    console.log(newCategory);
    setCategories([newCategory,...categories]);
  }
    
  return (
    <>
        {/* Titulos */}
        <h1>Aplicación de Gif</h1>

        {/* Input */}
        <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}


        { categories.map( (category) => 
              (<GifGrid 
                  key={category} 
                  category={category}/>)
         )}


        {/* Gif Item */}

    </>
  )
}

