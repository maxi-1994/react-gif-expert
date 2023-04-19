import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs';

// Custom Hook
export const useFetchGifs = (category) => {
    
    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category); // Espera la respuesta de la peticion HTTP en getGifs() y luego se almacena dentro de la const newImages.
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}