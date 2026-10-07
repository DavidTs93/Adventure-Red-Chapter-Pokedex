async function fetchLocationsObj(){
    footerP("Fetching locations")
    if(!localStorage.getItem("locations")){
        const response = await fetch("data/locations.json")
        window.locations = await response.json()
        localStorage.setItem("locations", LZString.compressToUTF16(JSON.stringify(locations)))
    }
    else{
        window.locations = JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("locations")))
    }

    window.locationsTracker = []
    Object.keys(locations).forEach(zone => {
        Object.keys(locations[zone]).forEach(method => {
            Object.keys(locations[zone][method]).forEach(speciesName => {
                locationsTracker.push({key: `${zone}\\${method}\\${speciesName}`, filter: []})
            })
        })
    })
}
