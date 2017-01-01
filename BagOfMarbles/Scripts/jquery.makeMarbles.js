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
	console.log("after data");
	var parent = $("#myBag");
	parent.html("");
	data.forEach(function (item) {
		console.log(item.custColor);
		var newDiv = $("<div>").addClass("marble").css("background-color", item.Color);
		parent.append(newDiv);
		console.log("after foreach");
	});
}

var failureHander = function (data) {
	console.log('Could not add that marble');
}

var completeHandler = function (data) {
	console.log("complete");
}

var createMarble = function () {
	console.log("in createMarble");
	var dom = {
		//custColor: $("#customColor").val(),
		Color: getRandomColor()
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

$("button").on("click", createMarble);