window.checkUpdate = "4 Adventure Red"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML




    document.title = "Adventure Red Chapter Dex"
    document.getElementById("footerName").innerText = "Pokémon Adventure Red Chapter\nPokédex"



    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        text = text.replace("Credit to ris", "Adventure Red adaptation based on Unbound-Pokedex and dex-core.\n\nCredit to ris")
        await eval.call(window,text)
    }).catch(error => {
        console.warn(error)
    })    

}).catch(error => {
	console.warn(error)
})


