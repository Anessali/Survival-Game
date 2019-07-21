//Controls passage of time
window.changeTime = function(time){
    if (time.minutes >= 60) {
      time.hours += Math.trunc(time.minutes / 60);
      time.minutes %= 60;
    }

    if (time.hours >= 24) {
        time.dayNum += Math.trunc(time.hours / 24);
        time.hours %= 24;
    }

    if (time.dayNum >= 7) {
        time.dayNum %= 7;
    }

    return time;
}
//Function is used to display time
window.clockDisplay = function(hours, minutes) {
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    return hours + ':' + minutes;
}
//sets the time of day - morning, evening, etc
window.getTimeOfDay = function(hours){
    // hours = time[0];
    var num = "Error: Invalid value";
    if(hours >= 3 && hours <= 6){
      num = 0;
    }
    else if(hours >= 6 && hours <= 9){
      num = 1;
    }
    else if(hours >= 9 && hours <= 11){
      num = 2;
    }
    else if(hours >= 11 && hours <= 13){
      num = 3;
    }
    else if(hours >= 13 && hours <= 15){
      num = 4;
    }
    else if(hours >= 15 && hours <= 18){
      num = 5;
    }
    else if(hours >= 18 && hours <= 20){
      num = 6;
    }
    else if(hours >= 20 && hours <= 23){
      num = 7;
    }
    else if(hours >= 23 || hours <= 1){
      num = 8;
    }
    else if (hours >= 1 && hours <= 3){
      num = 9;
    }
    return num;
}
