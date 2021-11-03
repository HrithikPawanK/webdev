const form = document.querySelector('#searchForm');
const container = document.querySelector('div');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const search = form.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
    // we can use params to pass multiple queries
    const config = {
        params : {
            q : search
        }
    }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for(let result of shows){
        if(!result.show.image) continue;
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        container.append(img)
    }
}

