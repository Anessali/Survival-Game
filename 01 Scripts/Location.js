window.explore = function(location){    
    var num = 0;
    var passage = "";
    if(location.outside == true){
        num = Math.floor(Math.random() * location.area.links.length);
        passage = location.area.links[num];
    }
    return passage;
}

//Determines sleep text. Camps are tied to a specific passage in each area. You may only have one camp.
window.sleep = function(location, passage){
    var text = "Finding a suitable place on the ground, you lie down and fall asleep.";
    if(location.area.camp == passage){
        text = "Crawling into your tent, you settle down for the night.";
    } else if(location.area.name == "The Lost Forest") {
        text = "Building a makeshift bed out of leaves, you settle down for the night.";
    }
    return text;
}