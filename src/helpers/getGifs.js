export const getGifs = async (categoryParam) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Hy1uS0WE0cKBaT0WQQdpusOHg3DiInNn&q=${categoryParam}&limit=20`;
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });
    
    return gifs
}