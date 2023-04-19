import { useState } from "react";

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    /* 
        Hooks de React que mantienen el estado de la app. De esta manera puedo almacenar información.
        Ejemplo:
              currentState - setState                       inicialState
        const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
    */
    const [categories, setCategories] = useState(['One Punch']); // Se agrega un estado inicial, en este caso, un array de string.

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return

        setCategories( (cat) => {        
            return [newCategory, ...cat];
        });
    };

    return (
        <>  
            <h1>GifExpertApp</h1>

            {/* Emito un evento desde el componente hijo como el eventEmitter en Angular para cambiar el estado de las categories */}
            <AddCategory onNewCategory={ (event) => onAddCategory(event) }/>

            {
                categories.map((category) => (
                    <GifGrid key={ category } category={ category }/>
                ))
            }

        </>
    );

}

/*
    - Todos los elementos iterados deben tener clave/valor. Deben tener su identificador único que no puede ser el index.

    categories.map((category) => (
        <GifGrid key={ category } category={ category }/>
    ))

    - En recomendable que la key sea igual que se value. En el caso de que haya uno repetido, saltará error en consola.
*/