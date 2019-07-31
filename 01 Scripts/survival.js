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
