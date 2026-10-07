fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/locations/displayLocations.js").then(response => {
    return response.text()
}).then(text => {
    // Adventure Red values already include both percentage and level text.
    // Keep dex-core's numeric behavior for compatibility, but do not append a
    // second percent sign to our formatted strings.
    text = text.replace(
        'if(Number.isInteger(parseInt(locations[location][method][speciesKey]))){',
        'if(typeof locations[location][method][speciesKey] === "number"){' 
    )
    text = text.replace(
        'else if(method.match(/surfing/i)){',
        'else if(method.match(/static encounter/i)){ return "Scripted Battle" } else if(method.match(/roaming encounter/i)){ return "Land" } else if(method.match(/gift egg/i)){ return "Egg" } else if(method.match(/surfing|^surf$/i)){' 
    )
    eval.call(window,text)
}).catch(error => {
    console.warn(error)
})
