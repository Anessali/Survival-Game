//Determines exp gained from certain actions and whether the player levels up

window.AddExp = function(skill, exp){
    var startingLevel = skill.level;
    var previousExp = skill.expToNextLevel;
    if(skill.level >= 100){
        skill.level = 100;
    } else {
        skill.exp += exp;
        while(skill.exp >= skill.nextLeve){
            skill.level += 1;
            //Math formula determining exp needed to level up
            skill.expToNextLevel = Math.round(previousExp + 50 + previousExp * 0.01);
        }
        if(skill.level > startingLevel){
            Dialog.wiki(`${skill.name} has increased to level ${skill.level}!`);
        }
    }
    return skill;
}

window.ShowSkillDescription = function(skill){
    Dialog.setup('Skill Description');
    Dialog.wiki(`${skill.description}`);
    Dialog.open();
}