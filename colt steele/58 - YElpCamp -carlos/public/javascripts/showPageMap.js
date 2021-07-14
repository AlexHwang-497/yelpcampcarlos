
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
    });




// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
//     center: campground.geometry.coordinates, // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });

// this adds a makrer to our locatin on our map
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    // this allows you to zoom in a speicifc locatino and the name of the location
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)

