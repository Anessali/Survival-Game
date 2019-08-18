//Determines exp gained from certain actions and whether the player levels up
window.addExp = function(skill, exp){
    var startingLevel = skill.level;
    var previousExp = skill.expToNextLevel;
    // console.log(`Exp gained: ${exp}`);
    // console.log(`Skill exp: ${skill.exp}`);
    if(skill.level >= 100){
        skill.level = 100;
    } else {
        skill.exp += exp;
        while(skill.exp >= skill.expToNextLevel){
            skill.exp -= skill.expToNextLevel;
            skill.level += 1;
            //Math formula determining exp needed to level up
            skill.expToNextLevel = Math.round(previousExp + 40 + previousExp * 0.01);
        }
        if(skill.level > startingLevel){
            Dialog.setup('Level Up');
            Dialog.wiki(`${skill.name} has increased to level ${skill.level}!`);
            Dialog.open();
        }
    }
    return skill;
}

window.ShowSkillDescription = function(skill){
    Dialog.setup('Skill Description');
    Dialog.wiki(`${skill.description}`);
    Dialog.open();
}