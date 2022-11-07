import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en GifExpertApp', () => {

    test('Debe de llamar a setCategories', async() => {
        const inputValue = 'Saitama';

        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect( screen.getByText(inputValue) ).toBeTruthy

        // screen.debug()

    })

})