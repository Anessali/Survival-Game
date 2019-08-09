

// Attempts to add an item to player inventory. It won't let the player take more than they can carry. 
window.GetItem = function(player, item, qty) {
    var availableSpace = player.maxInventorySize - player.inventorySize;
    var inventoryIndex;
    var inInventory = false;

    //Tests to see if item already exists in inventory
    for(var i = 0; i < player.inventory.length; i++){
        if(item.name == player.inventory[i].name){
            console.log("Initial pass: Item exists.");
            inventoryIndex = i;
            inInventory = true;
        }
    }
    //loop adds as much of item as will fit
    for(var i = 0; i < qty; i++){
        if(availableSpace >= 0 && (availableSpace - item.size >= 0)){
            availableSpace -= item.size;
            player.inventorySize += item.size;
            if(inInventory){
                console.log("Adding to qty of existing item.");
                player.inventory[inventoryIndex].qty += 1;
            } else {
                console.log("Adding new item.");
                player.inventory.push(item);
                inInventory = true;
                inventoryIndex = player.inventory.length - 1;
            }
        } else {
            Dialog.setup('Alert');
            Dialog.wiki(`Inventory full. Extra items have dropped.`);
            Dialog.open();
        }
    }
    item.qty = 1;
    State.variables.player = player;
}

//Deletes an item from the inventory
window.DropItem = function(inventory, index){
    inventory[index].qty -= 1;
    console.log(`New quantity:${inventory[index].qty}`);
    if(inventory[index].qty <= 0){
        inventory.splice(index, 1);
    }
    return inventory;
}

//Used to show an item's description when examined.
window.ShowDescription = function(inventory, index){
    Dialog.setup('Item Description');
    Dialog.wiki(`"${inventory[index].description}"\n\nDamage: ${inventory[index].damage}\nSize: ${inventory[index].size}`);
    Dialog.open();
}

/* OOP programming:
    Encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/