// current date displayed at top
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));


// assign styles to event blocks based on if each is in the past/present/future:

// change current time to a number and save into variable 'currentTime'
const currentTime = parseInt(moment().format("HH00"), 10);

// for loop that adds classes to planner based on current time and time on schedule
for (var i = 0; i < $(".hour").length; i++) {
    var currentDiv = $($(".hour")[i]).next();
    var dataTime = parseInt($($(".hour")[i]).data().time, 10);
    if (dataTime < currentTime) {
        currentDiv.addClass("past");
    } else if (dataTime > currentTime) {
        currentDiv.addClass("future");
    } else {
        currentDiv.addClass("present");
    }
}


// when document loads/refreshes, grab each event from local storage and place in corresponding time block
$(document).ready(render());


// when save button is clicked, store the event info to local storage
$(".saveBtn").on("click", function () {
    const userEvent = $(this).prev().val();
    const btn = $(this).val()
    localStorage.setItem(btn, userEvent);
    render();
})


// grab each event from local storage and place in corresponding time block
function render() {
    for (let i = 0; i < 9; i++) {
        const oneEvent = localStorage.getItem(i);
        $("#" + i).text(oneEvent);
    }
}