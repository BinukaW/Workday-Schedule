var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm a"));


// Retrieve any stored data from local storage for timeslots
function preSched() {
    $("#9hour .schedule").val(localStorage.getItem("9hour"));
    $("#10hour .schedule").val(localStorage.getItem("10hour"));
    $("#11hour .schedule").val(localStorage.getItem("11hour"));
    $("#12hour .schedule").val(localStorage.getItem("12hour"));
    $("#13hour .schedule").val(localStorage.getItem("13hour"));
    $("#14hour .schedule").val(localStorage.getItem("14hour"));
    $("#15hour .schedule").val(localStorage.getItem("15hour"));
    $("#16hour .schedule").val(localStorage.getItem("16hour"));
    $("#17hour .schedule").val(localStorage.getItem("17hour"));
};

// save button function
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var time = $(this).parent().attr("id");
    var input = ($(this).parent()).children(("textarea")).val();
    localStorage.setItem(time, input);
    console.log(this);
 });

// Current time against block times and allocate appropriate colours
function timeTracker() {
    var currentHour = moment().format("HH");

    $(".time-block").each(function() {
       var blockTime = parseInt($(this).attr("id"));
       console.log(blockTime, currentHour) 

       if (blockTime < currentHour) {
        $(this).addClass("past");

       }
       else if (blockTime > currentHour) {
           $(this).addClass("future");
       }
       else {
           $(this).addClass("present");
       }

    })
}

preSched();
timeTracker();
