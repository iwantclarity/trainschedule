

var trainCount = localStorage.length/4;
console.log (trainCount);
var nameTrainLocal = "";
var destinationTrainLocal = "";
var firstTrainLocal = "";
var frequencyLocal = "";
var currentTime;
var nextArrival;
var nextTime;
var nextTrain;
var frequencyDisplay;
var firstTrainDisplay;
//var fDisplay;

var nextTime = function() {

	console.log (firstTrainDisplay);

	var firstMoment = moment(firstTrainDisplay, "hh:mm");
	console.log (firstMoment);

	var currentMoment = moment();

	var totalRunTime = currentMoment.diff(firstMoment, "minutes");

	var numberOfRuns = Math.floor(totalRunTime / frequency);

	var lastRunMoment = firstMoment.add(numberOfRuns * frequency, "minutes");

	var nextRunMoment = lastRunMoment.add(frequency, "minutes");

	console.log (nextRunMoment);

	//var nextArrival = moment(currentTime).format("hh:mm");

//	var nextTime = moment(currentTime).diff( firstTimeCalc, "minutes");


}


$("#clearTable").on("click", function(){

localStorage.clear()

});

// On Click event associated with the addTodo function
$("#addTrain").on("click", function(){

	// Get the Todo "value" from the textbox


	var nameTrainLocal = $("#nameTrain").val();

	var destinationTrainLocal = $("#destinationTrain").val();

	var firstTrainLocal = $("#firstTrain").val();

	var frequencyLocal = $("#frequency").val();

	localStorage.setItem("nameTrain" + trainCount, nameTrainLocal);	
	localStorage.setItem("destinationTrain" + trainCount, destinationTrainLocal);	
	localStorage.setItem("firstTrain" + trainCount, firstTrainLocal);	
	localStorage.setItem("frequencyLocal" + trainCount, frequencyLocal);	


});


$(document).ready(function(){



	//$( "#trainSection" ).append( '<table>' );
		

	for (var i = 0; i < localStorage.length/4; i++) {
		console.log (i)

	var nameTrainDisplay = localStorage.getItem("nameTrain" + i, nameTrainLocal);	
	var destinationTrainDisplay = localStorage.getItem("destinationTrain" + i, destinationTrainLocal);	
	var firstTrainDisplay = localStorage.getItem("firstTrain" + i, firstTrainLocal);	
	var frequencyDisplay = localStorage.getItem("frequencyLocal" + i, frequency);	

	//var nextTrain = "";
	console.log (frequencyDisplay);

	nextTime(frequencyDisplay);	

	
	$( "#trainTable" ).append( "<tr> <td>" + nameTrainDisplay + "</td><td>" + destinationTrainDisplay +  "</td><td>" + frequencyDisplay  + "</td><td>" +  nextArrival +  "</td><td>" + nextTrain +  "</td></tr>" );
		
	}


	//$( "#trainSection" ).append( "</table>" );

});
