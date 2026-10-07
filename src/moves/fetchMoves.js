async function fetchMovesObj(){
    footerP("Fetching moves")
    if(!localStorage.getItem("moves")){
        const response = await fetch("data/moves.json")
        window.moves = await response.json()
        localStorage.setItem("moves", LZString.compressToUTF16(JSON.stringify(moves)))
    }
    else{
        window.moves = JSON.parse(LZString.decompressFromUTF16(localStorage.getItem("moves")))
    }
    Object.values(moves).forEach(move => {
        if(move["effect"] === "EFFECT_ATTACK_DOWN_HIT"){
            move["effect"] = "EFFECT_ATTACK_DOWN_CHANCE"
        }
    })
    window.movesTracker = Object.keys(moves).map(key => ({key, filter: []}))
}
