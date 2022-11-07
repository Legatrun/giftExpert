import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Prueba de GiftItem', () => { 
    
    const title = "Saitama"
    const url = "https://api.giphy.com/v1/gifs/search?api_key=OsplqUAzsJ2Mmq8nHpZxg2YJvN8jKMnL&q=rick&limit=10"

    test('should hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={title} url={url}/> )

        expect( container ).toMatchSnapshot();
     })

     test('should de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={title} url={url}/> )
        // screen.debug()
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
      })
      
      test('El titulo debe estar en el title', () => { 
        
        render( <GifItem title={title} url={url}/> )
        expect( screen.getByText( title ) ).toBeTruthy()

       })
 })