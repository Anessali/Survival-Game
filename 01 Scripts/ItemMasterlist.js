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
        damage: 4,
        size: 3,
        qty : 1
    }
}

function Armor() {
    State.variables.items.noarmor = {
        name: "None",
        description: "I don't know what you're looking for. There's nothing here.",
        defense: 0,
        warmth: 0,
        size: 0
    }
}

function Food() {

}

function Misc() {

}

function Crafting(){
    State.variables.items.rock = {
        name : "Rock",
        description: "It's a rock. Perfect for throwing.",
        placement : "weapon",
        damage: 1,
        size: 1,
        qty : 1
    },
    State.variables.items.branch = {
        name : "Branch",
        description: "It's a tree branch.",
        placement : "weapon",
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