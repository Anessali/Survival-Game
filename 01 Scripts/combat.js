window.Monster = function(name, hp, maxHp){
    this.name = name,
    this.hp = hp,
    this.maxHp = hp
}

// Monster.prototype = { //Chapel suggested adding this
//     clone : function () {
//         return new Monster(this.name, this.HP, this.difficulty, this.text);
//     },
//     toJSON : function () {
//         return JSON.reviveWrapper('new Monster(' + JSON.stringify(this.name) + ', ' + JSON.stringify(this.HP) + ', ' JSON.stringify(this.difficulty) + ', ' + JSON.stringify(this.text) + ')');
//     }
// };


/* Further suggested:

Note that I didn't test it though, so I may have made a typo or something.
You may also need to re-add the constructor when you're messing with the prototype. That would look like this:
window.Monster = function(name, HP, difficulty, text) {
    this.name = name;
    this.HP = HP;
    this.difficulty = difficulty;
    this.text = text;
}

Monster.prototype = {
    constructor : window.Monster,
    clone : function () {
        return new Monster(this.name, this.HP, this.difficulty, this.text);
    },
    toJSON : function () {
        return JSON.reviveWrapper('new Monster(' + JSON.stringify(this.name) + ', ' + JSON.stringify(this.HP) + ', ' JSON.stringify(this.difficulty) + ', ' + JSON.stringify(this.text) + ')');
    }
};

*/
