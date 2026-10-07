fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/speciesPanelUtility.js").then(response => {
    return response.text()
}).then(text => {
    // Adventure Red stores a fully formatted value such as "35% · Lv 3–5".
    // dex-core normally appends another percent sign and adds rarity coloring.
    text = text.replace(
        'const locationRarity = document.createElement("span"); locationRarity.innerText = `${locations[location][method][panelSpecies]}%`; locationRarity.style.color = `hsl(${locations[location][method][panelSpecies]*2},85%,45%)`',
        'const locationValue = locations[location][method][panelSpecies]; const locationRarity = document.createElement("span"); locationRarity.innerText = locationValue'
    )
    eval.call(window,text)
}).catch(error => {
    console.warn(error)
})
