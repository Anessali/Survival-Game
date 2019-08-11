
/** Notes
 * 'Actor' refers to a character object. This mostly means the player, but can also include NPC's. I'm coding this in such a way that any character in the game can make use of these functions.
 * 'Item' means the item object being passed.
*/

// Attempts to add an item to actor inventory.
window.GetItem = function(actor, item, qty) {
    var availableSpace = actor.maxInventorySize - actor.inventorySize;
    var inventoryIndex;
    var inInventory = false;
    item.qty = 1;
    
    //None is a placeholder item referring to parts of the body with nothing on it. Should not appear in inventory.
    if(item.name == "None"){
        //Purposely empty if
    } else {
        //Tests to see if item already exists in inventory
        for(var i = 0; i < actor.inventory.length; i++){
            if(item.name == actor.inventory[i].name){
                inventoryIndex = i;
                inInventory = true;
            }
        }
        //loop adds as much of item as will fit
        for(var i = 0; i < qty; i++){
            if(availableSpace >= 0 && (availableSpace - item.size >= 0)){
                availableSpace -= item.size;
                actor.inventorySize += item.size;
                if(inInventory){
                    actor.inventory[inventoryIndex].qty += 1;
                } else {
                    actor.inventory.push(item);
                    inInventory = true;
                    inventoryIndex = actor.inventory.length - 1;
                }
            } else {
                Dialog.setup('Alert');
                Dialog.wiki(`Inventory full. Extra items have been dropped.`);
                Dialog.open();
            }
        }
    }
    return actor;
}

//Deletes an item from the inventory. isEquipped is a boolean referring to whether an item is equipped or in inventory.
window.DropItem = function(actor, item, isEquipped){
    if(isEquipped){
        if(item.name == "None"){
            //Purposely blank if - nothing should happen
        } else if(item.placement == "weapon") {
            actor.weapon = State.variables.items.noweapon;
        } else {
            actor.outfit[item.placement] = State.variables.items.noarmor;
        }
    } else {
        for(var i = 0; i < actor.inventory.length; i++){
            if(actor.inventory[i].name == item.name){
                actor.inventory[i].qty -= 1;
                if(actor.inventory[i].qty <= 0){
                    actor.inventory.splice(i, 1);
                }
            }
        }
    }
    return actor;
}

//Equips an item. Uses placement to link up with bodyPart.
window.EquipItem = function(actor, item, bodyPart){
    if(bodyPart == "weapon"){
        actor.weapon = item;
    } else {
        actor.outfit[bodyPart] = item;
    }
    return actor;
}

//Used to show an item's description when examined.
window.ShowDescription = function(item){
    Dialog.setup('Item Description');
    if(item.damage != null){
        Dialog.wiki(`"${item.description}"\n\nDamage: ${item.damage}\nSize: ${item.size}`);
    } else if(item.damage == null && item.warmth != null) {
        Dialog.wiki(`"${item.description}"\n\nWarmth: ${item.warmth}\nSize: ${item.size}`);
    } else {
        Dialog.wiki(`"${item.description}"\n\nSize: ${item.size}`);
    }
    
    Dialog.open();
}

//Actor attempts to eat the item. Not everything is edible.
window.EatItem = function(actor, item, isEquipped){
    
}

//Used to set an armor piece to "None", the placeholder meaning no item equipped
window.SetNoArmor = function(actor, item){
    var items = Object.values(actor.outfit);
    var placement = item.placement;
    for(var i = 0; i < items.length; i++){
        if(items[i].name == item.name){
            actor.outfit[placement] = State.variables.items.noarmor;
        }
    }
    return actor;
}