
/** Notes
 * 'Actor' refers to a character object. This mostly means the player, but can also include NPC's. I'm coding this in such a way that any character in the game can make use of these functions.
 * 'Item' means the item object being passed.
*/

/* Attempts to add an item to actor inventory. */
window.GetItem = function (actor, item) {
    var availableSpace = actor.maxInventorySize - actor.inventorySize;
    var index = -1;        /* Assume the item isn't in actor's inventory. */

    /* None is a placeholder item referring to parts of the body with nothing on it. Should not appear in inventory. */
    if (item.name == "None") {
        /* Purposely empty if */
    } else {
        /* Tests to see if item already exists in inventory */
        for (var i = 0; i < actor.inventory.length; i++) {
            if (item.id == actor.inventory[i].id) {
                index = i;
                break;
            }
        }
        
        if ((availableSpace - item.size) >= 0) {
            availableSpace -= item.size;
            actor.inventorySize += item.size;

            if (index !== -1) {
                actor.inventory[index].qty += 1;
            } else {
                /* Add a copy of the item to the actor's inventory. */
                index = actor.inventory.push(clone(item)) - 1;
                /* reset the quantiyy on actor's copy. */
                actor.inventory[index].qty = 1;
            }
            /* Reduce the quantity of the item. */
            item.qty = Math.max(item.qty - 1, 0);
            
        } else {
            Dialog.setup('Alert');
            Dialog.wiki(`Inventory full. Extra items have been dropped.`);
            Dialog.open();
        }
    }
    return actor;
}

// Attempts to add an item to actor inventory.
// window.GetItem = function(actor, item) {
//     var availableSpace = actor.maxInventorySize - actor.inventorySize;
//     var index;
//     var inInventory = false;


//     //None is a placeholder item referring to parts of the body with nothing on it. Should not appear in inventory.
//     if(item.name == "None"){
//         //Purposely empty if
//     } else {
//         //Tests to see if item already exists in inventory
//         for(var i = 0; i < actor.inventory.length; i++){
//             if(item.id == actor.inventory[i].id){
//                 index = i;
//                 inInventory = true;
//                 break;
//             }
//         }
        
//         if((availableSpace - item.size) >= 0){
//             availableSpace -= item.size;
//             actor.inventorySize += item.size;
//             if(inInventory){
//                 actor.inventory[index].qty += 1;
//             } else {
//                 actor.inventory.push(item);
//                 inInventory = true;
//                 index = actor.inventory.length - 1;
//                 console.log(`Inventory quantity: ${actor.inventory[index].qty}`);
//                 // console.log(`Quantity: ${actor.inventory[index].qty}`);
//             }
            
//         } else {
//             Dialog.setup('Alert');
//             Dialog.wiki(`Inventory full. Extra items have been dropped.`);
//             Dialog.open();
//         }
//     }
//     console.log(`Inventory quantity: ${actor.inventory[index].qty}`);
//     return actor;
// }

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
            if(actor.inventory[i].id == item.id){
                actor.inventory[i].qty -= 1;
                if(actor.inventory[i].qty <= 0){
                    actor.inventory.splice(i, 1);
                }
            }
        }
    }
    return actor;
}

//Removes item from a container, such as a chest or the foraging array. Container refers to an array.
window.RemoveFromContainer = function(container, item){
    // console.log(`Start item qty: ${container[0].qty}`);
    for(var i = 0; i < container.length; i++){
        if(container[i].id == item.id){
            // console.log(`Item qty: ${container[i].qty}`);
            container[i].qty -= 1;
            if(container[i].qty <= 0){
                container.splice(i, 1);
            }
        }
    }
    return container;
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

//Used to set an armor piece to "None", the placeholder meaning no item equipped
window.SetNoArmor = function(actor, item){
    var items = Object.values(actor.outfit);
    var placement = item.placement;
    for(var i = 0; i < items.length; i++){
        if(items[i].name == item.name){
            actor.outfit[placement] = State.variables.items.armor.noarmor;
        }
    }
    return actor;
}