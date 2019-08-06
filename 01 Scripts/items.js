/*
    Item types:
        weapon
        armor
        food
        drink
        crafting
        misc
*/

window.GetItem = function(inventory){
    console.log(inventory[0].name);
    var element = inventory.filter(function(element){
        return element.id > 1;
    })
    return element;
}

/*
    Important JS functions:
        find()
        filter()
*/

/* OOP programming:
    Encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/
/*
window.Item = function (config) {
	// Set up our own data properties with some defaults.
    this.id = '';
    this.name    = '';
    this.description = '';
    this.type = '';

	// Clone the given config object's own properties into our own properties.
	//
	// NOTE: We use the SugarCube built-in `clone()` function to make deep
	// copies of each of the properties' values.
	Object.keys(config).forEach(function (pn) {
		this[pn] = clone(config[pn]);
	}, this);
};

Item.prototype.clone = function () {
	// Return a new instance containing our own data.
	return new Item(this);
};

Item.prototype.toJSON = function () {
	// Return a code string that will create a new instance containing our
	// own data.
	//
	// NOTE: Supplying `this` directly as the `reviveData` parameter to the
	// `JSON.reviveWrapper()` call will trigger out of control recursion in
	// the serializer, so we must pass it a clone of our own data instead.
	var ownData = {};
	Object.keys(this).forEach(function (pn) {
		ownData[pn] = clone(this[pn]);
	}, this);
	return JSON.reviveWrapper('new Item($ReviveData$)', ownData);
};
*/