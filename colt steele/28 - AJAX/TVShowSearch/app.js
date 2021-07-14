const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    // this is telling us to not go to the server aka what the form usually would do
    // if you didn't have this phrase here
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    // await is 'awaiting' for the axios; we are awaiting the axios.get call to api.tvmaze.com and etc
    const res = await axios.get(`http://api.tvmaze.com/search/shows/`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    console.log(shows)
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}