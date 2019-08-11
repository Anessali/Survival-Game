/* This is where static items are generated
    Item types:
        weapon
        armor
        food
        drink
        crafting
        misc
*/

function Weapons(){
    State.variables.items.noweapon = {
        name: "None",
        description: "I don't know what you're looking for. There's nothing here.",
        damage: 0,
        size: 0
    },
    State.variables.items.sword001 = {
        name: "Old Sword",
        description: `This was probably a deadly weapon once, but its blade is now dull and covered in rust. The finish has worn off its case and its wood has cracked, but it holds for now. You can just make out the engraving of an eye hidden beneath the rust.`,
        placement : "weapon",
        eat : function(actor){
            actor.eatText = "Deciding the rusted metal looks tasty, you bring the sword up to your mouth. You bite down, trying to chew through the rust the way you would a delectable sandwich. It doesn't work. Actually, you manage to cut your tongue and are left groaning in self-pity as you question your life decisions.";
            actor.hp -= 2;
            return actor;
        },
        damage: 4,
        size: 3,
        qty : 1,
        attack : function() {
            return "You swing the sword";
        }
    }
}

function Armor() {
    State.variables.items.noarmor = {
        name: "None",
        description: "I don't know what you're looking for. There's nothing here.",
        defense: 0,
        warmth: 0,
        size: 0
    },
    State.variables.items.cottonShirt01 = {
        name: "Cotton Shirt",
        description: "A simple cotton shirt.",
        placement: "chest",
        eat : function(actor){
            actor.eatText = "";
            return actor;
        },
        defense: 0,
        warmth: 1,
        size: 2
    },
    State.variables.items.clothPants01 = {
        name: "Cloth Pants",
        description: "A pair of cloth pants.",
        placement: "legs",
        eat : function(actor){
            actor.eatText = "";
            return actor;
        },
        defense: 0,
        warmth: 1,
        size: 2
    },
    State.variables.items.leatherBoots01 = {
        name: "Worn Leather Boots",
        description: "A pair of worn leather boots.",
        placement: "feet",
        eat : function(actor, item, isEquipped){
            actor.eatText = "Lifting a boot up to your mouth, you sink your teeth into the rough leather. It's tough and chewy, but you tear your way through the leather and... oh. You actually ate them.";
            actor.hunger -= 60;
            DropItem(actor, item, isEquipped);
            return actor;
        },
        defense: 0,
        warmth: 1,
        size: 3
    }    
}

function Food() {
    State.variables.items.mushroom01 = {
        name: "Mushroom",
        description: "Maybe it's safe to eat?",
        eat : function(actor, item, isEquipped){
            actor.eatText = "You plop the mushroom into your mouth, savoring the taste.";
            actor.hunger -= 20;
            DropItem(actor, item, isEquipped);
            return actor;
        },
        placement : "weapon",
        damage: -2,
        warmth: 0,
        size: 0
    }
}

function Misc() {

}

function Crafting(){
    State.variables.items.rock = {
        name : "Rock",
        description: "It's a rock. Perfect for throwing.",
        placement : "weapon",
        eat : function(actor){
            actor.eatText = "Taking the rock in your hand, you attempt to take a bite. Your teeth hit the rock, hard, and you yelp out in pain. Did you just chip a tooth?";
            actor.hp -= 1;
            return actor;
        },
        damage: 1,
        size: 1,
        qty : 1
    },
    State.variables.items.branch = {
        name : "Branch",
        description: "It's a tree branch.",
        placement : "weapon",
        eat : function(actor){
            actor.eatText = "You pick up the branch, wrapping your mouth around the tough wood. It's oddly... soothing... to chew on this branch.";
            return actor;
        },
        damage: 1,
        size: 1,
        qty : 1
    }
}

//This file is mostly used to add items to the game world.
window.AddStaticItems = function(){
    Weapons();
    Armor();
    Crafting();
    Food();
    Misc();
}