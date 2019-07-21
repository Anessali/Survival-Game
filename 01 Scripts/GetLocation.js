window.explore = function(biome, area, location){
    console.log(`biome: ${biome}`);
    console.log(`area: ${area}`);
    
    var num = 0;
    var passage = "";
    if(biome == "forest" && area == "outside"){
        num = Math.floor(Math.random() * location.forest.length);
        passage = location.forest[num];
        console.log(`Passage: ${location.forest[num]}`);
    }
    return passage;
}