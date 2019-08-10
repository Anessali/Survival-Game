/*  These functions are intended to generate HTML elements  */


//Generates a Select box. Takes two arguments: class name and an array
window.HtmlSelect = function(selectClass, itemArray){
    var newSelect = `<select class="${selectClass}">`;
    for(var i = 0; i < itemArray.length; i++){
        newSelect += `<option value="${itemArray[i]}">${itemArray[i]}</option>`
    }
    newSelect += `</select>`;
    return newSelect;
}