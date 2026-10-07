async function fetchAbilitiesObj(){
    footerP("Fetching abilities")
    if(!localStorage.getItem("abilities")){
        const response = await fetch("data/abilities.json")
        window.abilities = await response.json()
        localStorage.setItem("abilities", LZString.compressToUTF16(JSON.stringify(abilities)))
    }
    else{
        window.abilities = JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("abilities")))
    }
    window.abilitiesTracker = Object.keys(abilities).map(key => ({key, filter: []}))
}
