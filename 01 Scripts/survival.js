//Updates survival stats - hunger, thirst, and fatigue
window.updateSurvivalStats = function(hours, player, sleeping){
    player.needs.hunger += hours * 5;
    player.needs.thirst += hours * 10;
    player.needs.fatigue += hours * 5;
    if (sleeping){
        player.needs.fatigue -= hours * 5;
    }
    if (player.needs.hunger >= 100){
        player.needs.hunger = 0;
        player.needs.malnourishment += 1;
    }
    if(player.needs.thirst >= 100){
        player.needs.thirst = 0;
        player.needs.dehydration += 1;
    }
    if(player.needs.fatigue >= 100){
        player.needs.fatigue = 0;
        player.needs.sleepDebt += 1;
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

/** Function that runs whenever an actor eats an item.
 * amt - the amount that hunger is affected.
 * exp - The amount of botany experience gained from eating this item.
 */
window.eatItem = function(actor, amt, item, exp){
    actor.needs.hunger += amt;
    if(actor.needs.hunger < 0){
        actor.needs.hunger = 0;
    }
    addExp(actor.skills.botany, exp);   //Skills.js
    DropItem(actor, item);              //Items.js
    return actor;
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
    var rolledNumber = 0, numberToBeat = 0, num = 0, difference = 0;
    var inArray = false;
    var index = 0;
    location.forageArray = [];

    if(type == "food"){
        location.forageArray = getArray(location.area.food);
    } else if(type == "water") {
        
    } else if(type == "items") {
        location.forageArray = getArray(location.area.items);
    }
    return location.forageArray;

    function getArray(itemArray){
        // console.log(itemArray);
        for(var i = 0; i < itemArray.length; i++){
            //for loop variables
            var item = clone(itemArray[i]);
            //Numbers are randomly generated. rolledNumber needs to be higher than numberToBeat to find an item
            rolledNumber = Math.floor(Math.random() * 90) + 1;
            numberToBeat = Math.floor(Math.random() * 100) + 1;
            //Foraging level makes items less rare. 1% rarity items become 10% at level 10
            num = itemArray[i].rarity * foraging.level;
            num *= rolledNumber ;
            difference = num - numberToBeat;
            console.log(`Item: ${item.name}, ${item.qty}`);
            console.log(`Difference: ${difference}`);
            while(num > numberToBeat){
                num -= 100;
                //Tests to see if item already exists in array
                for(var x = 0; x < location.forageArray.length; x++){
                    // console.log(`inArray value: ${inArray}`);
                    if(location.forageArray[x].id == item.id){
                        index = x;
                        inArray = true;
                    } 
                }
                if(inArray) {
                    location.forageArray[index].qty += 1;
                } else {
                    console.log(`Pass ${index}`);
                    location.forageArray.push(item);
                    inArray = true;
                    index = location.forageArray.length - 1;
                }
            }
        }
        return location.forageArray;
    }
}

window.wounds = function(actor){

}