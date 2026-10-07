// Adventure Red data currently covers the dex, learnsets, and acquisition
// methods. dex-core still calls these hooks for its optional trainer, item,
// and strategy tabs, so provide empty datasets and let the core hide them.
async function fetchScripts(){
    window.trainers = {}
    window.items = {}
    window.trainersTracker = []
    window.itemsTracker = []
}

async function fetchStrategiesObj(){
    window.strategies = {}
}
