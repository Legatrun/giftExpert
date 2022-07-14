import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // para asegurarnos que el input no esta vacio hacemos ete if
        if( inputValue.trim().length <= 1 ) return
        // setCategories((cat) => [inputValue,...cat])
        setInputValue('');
        onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
