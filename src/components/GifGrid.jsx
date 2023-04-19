import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from '../components/GifItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
 
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Caragando...</h2>)
            }

            <div className="card-grid">
                {/* <LoadingMessage isLoading={ isLoading }/> */}
                {
                    images.map((image) => (
                        <GifItem key={ image.id } { ...image }/>
                    ))
                }
            </div>
        </>
    )
}

/*
    -   Nunca agregar la ejecución de una función directamente dentro del funcional component. Por que una vez que el functional component
        se vuelva a renderizar, volverá a ejecutar nuevamente la función y en este caso volverá a ejecutar la petición http.

        --------------- useEffect --------------- 
    -   Para lograr que el función no se ejecute cada vez que se renderiza el componente se debe utilizar el Hook useEffect.

    -   Sirve para disparar efectos secundarios. Ejemplo, disparar un efecto cuando el componente se renderiza, cuando cambie un useState, etc...

        useEffect -> La peticioó HTTP se disparará solo cuando el componente se cargue por primera vez.
        - Como primer parametro va un callback en donde se especifica la función que quiero que se ejecute solo una vez.
        - Como segundo parametro se especifican las dependencias en un array, en el caso de que sea un array vacio, la función solo se ejecutará una única vez al crearse el componente.

        De esta manera cuando cambie el estado del componente, no se volverá a ejecutar la funcion getGifs()

        useEffect(() => {
            getImages();
        }, []);

        --------------- Clases CSS en JSX ---------------
        La palabra reserva "class" no se puede utilizar para llamar a una clase de css ya que al ser JavaScript, esta palabra hace referencia a la clase de un objeto.
        Por este motivo para llamar a una clase de css se debe utilizar "className"


        --------------- Esparcir las propiedas de un objetos ---------------
        - En vez de enviar cada propiedad al componente hijo por separado. (ejemplo: <GifItem key={ image.id } title={ image.title } url={ image.url } />).
        - Mediante el operador spread se envian todas las propiedades al comp hijo y la recibe por medio de destructuración. Esto es una buena practica en el caso de que 
          hay que enviar muchas propiedades al compoente hijo dejando el codigo más limpio y acordaro.

        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem key={ image.id } { ...image }/>
                ))
            }
        </div>


*/