
/** Notes
 * 'Actor' refers to a character object. This mostly means the player, but can also include NPC's. I'm coding this in such a way that any character in the game can make use of these functions.
 * 'Item' means the item object being passed.
 * bodyPart refers to the part of the body where the item would be equipped.
-------------------------------------------------------------------------------------*/

// Attempts to add an item to player inventory. It won't let the player take more than they can carry. 


/**Reworking**
 * item renamed to bodyPart
 * Need to refactor code to search out items using bodyPart, instead of passing the exact item
 */
window.GetItem = function(actor, bodyPart, qty) {
    var availableSpace = actor.maxInventorySize - actor.inventorySize;
    var inventoryIndex;
    var inInventory = false;

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
            Dialog.wiki(`Inventory full. Extra items have dropped.`);
            Dialog.open();
        }
    }
    item.qty = 1;
    return actor;
}

//Deletes an item from the inventory
window.DropItem = function(inventory, index){
    inventory[index].qty -= 1;
    if(inventory[index].qty <= 0){
        inventory.splice(index, 1);
    }
    return inventory;
}

//Equips an item. Uses placement to link up with bodyPart.
window.EquipItem = function(actor, item, bodyPart){
    if(bodyPart == "weapon"){
        console.log("EquipItem bodyPart is 'weapon'");
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

//Generates a table of an actor's worn outfit *~* WIP *~*
window.GetOutfit = function(actor){
    var table = ``;
    var items = Object.values(actor.outfit);
    table +=   `<table class="container">
                <tr>
                    <th colspan="5">Armor</th>
                </tr>
                <tr>
                    <th>Body Part</th>
                    <th>Name</th>
                    <th>Warmth Rating</th>
                    <th colspan="2">Actions</th>
                </tr>`;
    console.log(items.length);
    table += `</table>`;
    return table;
}
/* OOP programming:
    Encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/