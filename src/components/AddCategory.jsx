import { useState } from "react"
import PropTypes from 'prop-types'

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
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
} 
