function updateMap() {
    fetch("/data.json")
        .then(r => r.json())
        .then(res => {
            console.log(res.data)
            res.data.forEach(e => {
                latitude = e.latitude;
                longitude = e.longitude;

                cases = e.population;
                if (cases < 1000000) {
                    color = "rgb(0, 128, 0)";
                // } else if (1000000 < cases < 10000000) {
                //     color = "rgb(247, 255, 18)";
                } else if (cases < 50000000) {
                    color = "rgb(136, 3, 3)";
                } else {
                    color = "rgb(255, 0,0)";
                }

                //mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })
}

updateMap();



// pk.eyJ1IjoibmlraGlsMTVyIiwiYSI6ImNsd2V4bnczZDF0MmMyamxkNWxldGM4bWwifQ.ojlvzjzLXG9B3j2h_VVCRQ