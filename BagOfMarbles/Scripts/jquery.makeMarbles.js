console.log("loaded scripts");

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

var successHandler = function (data) {
	console.log("in successHandler");
	console.log(data);
	var parent = $("#myBag");
	parent.html("");
	data.forEach(function (item) {
		var newDiv = $("<div>").addClass("marble").css("background-color", item.Color);
		parent.append(newDiv);
	});
}

var failureHander = function (data) {
	console.log('Could not add that marble');
}

var completeHandler = function (data) {
	console.log("complete");
}

var createMarble = function (newColor) {
	var dom = {
		Color: newColor
	}

	$.ajax({
		type: 'POST',
		url: 'api/Marbles',
		data: JSON.stringify(dom),
		success: successHandler,
		failure: failureHander,
		complete: completeHandler,
		contentType: "application/json",
		dataType: "json"
	});
}

$("#randBtn").on("click", function () {
	var newColor = getRandomColor(); 
	createMarble(newColor)
}); 
$("#custBtn").on("click", function () {
	var newColor = $("#customColor").val();
	createMarble(newColor)
});