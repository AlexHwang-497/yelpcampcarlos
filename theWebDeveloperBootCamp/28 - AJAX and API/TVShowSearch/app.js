const form = document.querySelector('#searchForm')
form.addEventListener('submit',  async function (e) {
    e.preventDefault();
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value
    const config = {params:{q:searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config)
    console.log(res.data[0].show.image.medium)
    // const img = document.createElement('IMG')
    makeImages(res.data)
    // img.src=res.data[0].show.image.medium
    // document.body.append(img)
    form.element.query.value = ''
})

const makeImages = (shows)=> {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG')
            img.src=result.show.image.medium
            document.body.append(img)
        }
    }
}