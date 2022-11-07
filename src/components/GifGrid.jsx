import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            {
                isLoading && ( <div className="lds-hourglass"></div> )
            }
            <h3>{category}</h3>


            <div className="card-grid" >
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // se usa spreed operator para exparcir las props de "image"
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired,
}