//Updates survival stats - hunger, thirst, and fatigue
window.updateSurvivalStats = function(hours, player, sleeping){
    player.hunger += hours * 5;
    player.thirst += hours * 10;
    player.fatigue += hours * 5;
    if (sleeping){
        player.fatigue -= hours * 5;
    }
    if (player.hunger > 200){
        player.hunger = 200;
    }
    if(player.thirst > 200){
        player.thirst = 200;
    }
    if(player.fatigue > 200){
        player.fatigue = 200;
    }
    return player;
}

window.displayStatus = function(player){
    var phrase = "";
    if (player.hunger >= 50 && player.hunger < 100){
        phrase += "You're starting to feel hungry\n";
    } else if(player.hunger >= 100 && player.hunger < 150) {
        phrase += "You're weak from hunger\n";
    } else if(player.hunger >= 150) {
        phrase += "You're dying of malnutrition\n";
    }
    if (player.thirst >= 50 && player.thirst < 100){
        phrase += "You're starting to feel thirsty\n";
    } else if(player.thirst >= 100 && player.thirst < 150) {
        phrase += "You're mildly dehydrated\n";
    } else if(player.thirst >= 150){
        phrase += "You're dying of dehydration\n";
    }
    if (player.fatigue >= 50 && player.fatigue < 100){
        phrase += "You're feeling tired\n";
    } else if(player.fatigue >= 100 && player.fatigue < 150) {
        phrase += "You're is starting to feel thirsty\n";
    } else if(player.fatigue >= 150){
        phrase += "You're sleep deprived and can barely function \n";
    }
    return phrase;
}

//Moves the player to a random location. Is based on the area they are currently in.
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

//Determines items found while foraging. 1 == 100%
window.forage = function(location, type, foraging){
    /**
     * At level 100 foraging, a character should have a 90% chance of finding food with a rarity of 1%
     * 0.01 * 10 == 0.1, or 10% chance
     */
    var maxPercentageChance = 0; 
    var numberToBeat = 0; 
    var num = 0;
    var itemArray = [];
    var inInventory = false;
    if(type == "food"){
        for(var i = 0; i < location.area.food; i++){
            //Numbers are randomly generated. maxPercentageChance needs to be higher than numberToBeat to find item
            maxPercentageChance = Math.floor(Math.random() * 90) + 1;
            numberToBeat = Math.floor(Math.random() * 100) + 1;
            //Foraging level makes items less rare. 1% rarity items become 10% at level 10
            num = location.area.food[i].rarity * foraging.level;
            num *= maxPercentageChance ;
            console.log(`maxPercentageChance: ${maxPercentageChance}`);
            console.log(`numberToBeat: ${numberToBeat}`);
            console.log(`num: ${num}`);
            if(num > numberToBeat){
                //Tests to see if item already exists in inventory
                if(itemArray.includes(location.area.food[i].id)){
                    console.log("includes() success");
                    inventoryIndex = i;
                    inInventory = true;
                }
                //add item to array
                itemArray.push();
            }
        }
    } else if("water") {
        
    } else if("items") {
        for(var i = 0; i < location.area.food; i++){
        
        }
    }
    return itemArray;
}