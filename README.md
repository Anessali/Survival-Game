This is a project I work on for fun sometimes that will probably never be completed. In fact, I think it's safe to call this a "testing grounds" for any twine game mechanics that are more complex than what you'd see in your standard branching story. It's entirely possible I'll use some of the stuff I figure out here in something else I make, but it's also entirely possible I'll decide there's a simpler solution that does a better job at accomplishing what I'm trying to do.

### A Note on Compiling
Although it's probably self explanatory that I've been using both the PowerShell and the batch script to compile, they call upon a [third party compiler called Tweego](https://www.motoslave.net/tweego/) to work. So if you want to compile this game yourself, you'll need to download that compiler and add the directory containing its executable file to your system environment variables. You'll also need to make sure the version of SugarCube installed in that folder matches what I've got under "00 Story Variables/00 init.tw."

## Passage of Time

- [x] Time passes
- [x] Clock displays in-game time
- [x] Day and night cycles
- [x] Days of the week

## Inventory System
I feel like the inventory system is kind of the backbone. Players need to be able to pick up items and use them, whether it's to use a rock as a makeshift weapon or to eat some mushrooms they found.
- [x] Player can pick up and discard items
- [x] Player can attempt to eat any item. Not everything is edible, though.
- [x] Most items can be equipped as a weapon.

## Survival Mechanics
Players need to manage hunger, thirst, and fatigue. In addition, they need to be able to set up a place to relax, store items, and heal injuries. 
- [x] Player becomes hungry, thirsty, and fatigued over time
- [x] Player can eat, drink, and sleep to manage their needs.
- [ ] Able to die from dehydration/malnutrition.
- [ ] Forage for food/water/items
- [ ] Make camp
- [ ] Crafting

## Campsite
Need to setup the ability to create a campsite and move it.
- [ ] Able to setup camp.

## Skills & Abilities

- [x] Skills
- [ ] Abilities
- [ ] Skills
- [ ] Skills

## Combat
I haven't gotten started on combat yet, but I do consider this a must before I'm willing to start calling the game a beta release. 
- [ ] Get a basic combat system in place
- [ ] Generate creatures(wolves, bears, monsters, etc) that the player can run into
- [ ] Implement a wounds system. The player can die from a serious wound or from severe food poisoning.

## Weather, Seasons, and Hypothermia/Hyperthermia
Not sure if I'll end up making this mechanic or not, but it is on my radar. If I do, I think I want to get seasons & weather figured out first.
- [ ] Weather 
- [ ] Seasons
- [x] Items have a warmth rating
- [ ] Temperature 
- [ ] Hyothermia/Hyperthermia
