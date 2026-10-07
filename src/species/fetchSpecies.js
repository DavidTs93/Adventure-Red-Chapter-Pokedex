async function fetchSpeciesObj(){
    footerP("Fetching species")
    if(!localStorage.getItem("species")){
        const response = await fetch("data/species.json")
        window.species = await response.json()
        localStorage.setItem("species", LZString.compressToUTF16(JSON.stringify(species)))
    }
    else{
        window.species = JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("species")))
    }

    window.sprites = {}
    window.speciesTracker = Object.keys(species)
        .sort((a, b) => species[a]["ID"] - species[b]["ID"])
        .map(key => ({key, filter: species[key]["unused"] ? ["unused"] : []}))
    tracker = speciesTracker

    const speciesFilter = document.getElementById("speciesFilter")
    if(speciesFilter && !document.getElementById("showUnusedPokemon")){
        const toggle = document.createElement("button")
        toggle.id = "showUnusedPokemon"
        toggle.type = "button"
        toggle.className = "setting"
        toggle.innerText = "Show Unused"
        toggle.title = "Show reserved and unused internal species slots"
        toggle.addEventListener("click", () => {
            const showUnused = !toggle.classList.contains("activeSetting")
            toggle.classList.toggle("activeSetting", showUnused)
            toggle.innerText = showUnused ? "Hide Unused" : "Show Unused"
            speciesTracker.forEach(entry => {
                if(!species[entry.key]["unused"]){
                    return
                }
                entry.filter = entry.filter.filter(value => value !== "unused")
                if(!showUnused){
                    entry.filter.push("unused")
                }
            })
            lazyLoading(true)
        })
        speciesFilter.insertBefore(toggle, speciesFilter.firstChild)
    }
}
