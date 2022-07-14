import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            {
                isLoading && ( <div class="lds-hourglass"></div> )
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
