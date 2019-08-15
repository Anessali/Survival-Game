/*  These functions are intended to generate HTML elements  */

(function () {

	/* Remove very narrow viewport styles. */
	$("#style-media-queries-narrow", document.head).remove();

	/* Add the link bar element. */
	$("#passages").after('<div id="linkbar"></div>');

	/* Setup a predisplay task to clear the link bar when displaying a new passage. */
	predisplay["clear-linkbar"] = function () {
		$("#linkbar").empty();
	};

}());

//Generates a Select box. Takes two arguments: class name and an array
window.HtmlSelect = function(selectClass, itemArray){
    var newSelect = `<select class="${selectClass}">`;
    for(var i = 0; i < itemArray.length; i++){
        newSelect += `<option value="${itemArray[i]}">${itemArray[i]}</option>`
    }
    newSelect += `</select>`;
    return newSelect;
}