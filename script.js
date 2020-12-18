// Display the date the top of the calendar

var todayDate = $("#currentDay");
todayDate.text(moment().formant("dddd,MMMM,Do YYYY"));
// Need time blocks for each time
var time = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var row = $("<div>");
row.addClass("hour col-1");
row.append(hour);

var textArea = $("<textarea>");
textArea.addClass("past description col-10");
row.append(textArea);

var button = $("<button>");
button.addClass("saveBtn col-1");
row.append(button);

$(".container").append(row);

var buttonStorage = document.getElementsByClass("button").value;
    localStorage.setItem("button", buttonStorage)


localStorage.setItem("button", JSON.stringify(button));
