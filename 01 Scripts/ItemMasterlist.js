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
    State.variables.items.weapons.noweapon = {
        name: "None",
        description: "I don't know what you're looking for. There's nothing here.",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`I don't know what you're looking for. There's nothing here.\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        damage: 0,
        size: 0
    },
    State.variables.items.weapons.sword001 = {
        id: "sword001",
        name: "Old Sword",
        placement : "weapon",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`This was probably a deadly weapon once, but its blade is now dull and covered in rust. The finish has worn off its case and its wood has cracked, but it holds for now. You can just make out the engraving of an eye hidden beneath the rust.\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            Dialog.open();
        }, 
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
    State.variables.items.armor.noarmor = {
        name: "None",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`I don't know what you're looking for. There's nothing here.\n\nWarmth: ${item.warmth}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        defense: 0,
        warmth: 0,
        size: 0
    },
    State.variables.items.armor.cottonShirt01 = {
        id: "cottonShirt01",
        name: "Cotton Shirt",
        placement: "chest",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`A simple cotton shirt.\n\nWarmth: ${item.warmth}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        eat : function(actor){
            actor.eatText = "";
            return actor;
        },
        defense: 0,
        warmth: 1,
        size: 2
    },
    State.variables.items.armor.clothPants01 = {
        id: "clothPants01",
        name: "Cloth Pants",
        placement: "legs",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`A pair of cloth pants.\n\nWarmth: ${item.warmth}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        eat : function(actor){
            actor.eatText = "";
            return actor;
        },
        defense: 0,
        warmth: 1,
        size: 2
    },
    State.variables.items.armor.leatherBoots01 = {
        id: "leatherBoots01",
        name: "Worn Leather Boots",
        placement: "feet",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`A pair of worn leather boots.\n\nWarmth: ${item.warmth}\nSize: ${item.size}`);
            Dialog.open();
        }, 
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
    State.variables.items.food.mushroom01 = {
        id: "mushroom01",
        name: "Mushroom",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`Maybe it's safe to eat?\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        eat : function(actor, item, isEquipped){
            actor.eatText = "You plop the mushroom into your mouth, savoring the taste.";
            actor.hunger -= 20;
            addExp($player.skills.botany, 25);
            DropItem(actor, item, isEquipped);

            return actor;
        },
        placement : "weapon",
        damage: -2,
        warmth: 0,
        size: 0.5,
        rarity: 0.01
    },
    State.variables.items.food.mushroom02 = {
        id: "mushroom02",
        name: "Mushroom",
        description: function(actor, item){
            Dialog.setup('Item Description');
            if(actor.skills.botany.level >= 10){
                Dialog.wiki(`Thanks to your plant knowledge, you can tell this mushroom is poisonous. You should probably get rid of it.\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            } else {
                Dialog.wiki(`Maybe it's safe to eat?\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            }
            Dialog.open();
        }, 
        eat : function(actor, item, isEquipped){
            actor.eatText = "You plop the mushroom into your mouth, savoring the taste. It's barely 10 minutes later that you start vomiting. That mushroom was poisonous!";
            actor.hunger += 50;
            addExp($player.skills.botany, 100);
            DropItem(actor, item, isEquipped);
            return actor;
        },
        placement : "weapon",
        damage: -2,
        warmth: 0,
        size: 0.5,
        rarity: 0.01
    }
}

function Misc() {

}

function Crafting(){
    State.variables.items.items.rock = {
        id: "rock",
        name : "Rock",
        placement : "weapon",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`It's a rock. Perfect for throwing.\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        eat : function(actor){
            actor.eatText = "Taking the rock in your hand, you attempt to take a bite. Your teeth hit the rock, hard, and you yelp out in pain. Did you just chip a tooth?";
            actor.hp -= 1;
            return actor;
        },
        damage: 1,
        size: 1,
        qty : 1,
        rarity: 0.4
    },
    State.variables.items.items.branch = {
        id: "branch",
        name : "Branch",
        placement : "weapon",
        description: function(actor, item){
            Dialog.setup('Item Description');
            Dialog.wiki(`It's a tree branch.\n\nDamage: ${item.damage}\nSize: ${item.size}`);
            Dialog.open();
        }, 
        eat : function(actor){
            actor.eatText = "You pick up the branch, wrapping your mouth around the tough wood. It's oddly... soothing... to chew on this branch.";
            return actor;
        },
        damage: 1,
        size: 1,
        qty : 1,
        rarity: 0.5
    }
}

//This file is mostly used to add items to the game world.
window.AddStaticItems = function(){
    Weapons();
    Armor();
    Crafting();
    Food();
    Misc();
    // console.log(State.variables.items); //If uncommented, prints all game items in the console
}