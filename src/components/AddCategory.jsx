
// imports
import { useState } from 'react';


// AddCategory
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChanged = ({ target }) => setInputValue( target.value );

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length < 1 ) return;
        onNewCategory( inputValue.trim() );
        setInputValue( '' );
    };

    return (

        <form onSubmit={ onSubmit } >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChanged }
            />
        </form>

    );

};
