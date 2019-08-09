/*
    Item types:
        weapon
        armor
        food
        drink
        crafting
        misc
*/

//This file is mostly used to add items to the game world.
window.AddStaticItems = function(){
    Weapons();
    CraftingItems();
}

function Weapons(){
    State.variables.items.sword001 = {
        name: "Old Sword",
        damage: 4,
        size: 3,
        description: "This was probably a deadly weapon once, but its blade is now dull and covered in rust. You can just make out the symbol of an eye engraved in the blade.",
        type : "weapon",
        canEquip: true,
        qty : 1
    }
}

function CraftingItems(){
    State.variables.items.rock = {
        name : "Rock",
        damage: 1,
        size: 1,
        description: "It's a rock. Perfect for throwing.",
        type : "crafting",
        canEquip: true,
        qty : 1
    },
    State.variables.items.branch = {
        name : "Branch",
        damage: 1,
        size: 1,
        description: "It's a tree branch.",
        type : "crafting",
        canEquip: true,
        qty : 1
    }
}