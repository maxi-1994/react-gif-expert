import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => { // Recibo la prop desde el padre para emitir un nuevo valor desde el hijo.

    const [inputValue, setInputValue] = useState('');

    // Seteo un nuevo valor en el input por medio del inputValue
    const onInputChange = ({ target }) => { 
        setInputValue(target.value);
    };

    // Submiteo el formulario para enviarlo al listado en el gifExpertApp (su padre)
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return // Si el valor esta vacio o tiene un solo caracter, no se podra submitear el form

        onNewCategory(inputValue.trim());

        setInputValue(''); // Limpio el input una vez submiteado el form
    };

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    );
}

/*
    -   En las versiones anterioes de React. Cuando habia dos useState en una misma función, React renderizaba dos veces para actualizar los estados
        Hoy en día, No se renderiza hasta que no termine el bloque de la función. De esta manera, solo renderizara solo una vez.
*/