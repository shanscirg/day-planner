// current date displayed at top
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY"));




// assigning time blocks styles based on if each is in the past/present/future:
const currentTime = moment().format("HHHH");
const dataTime = $(".hour").data();
console.log(dataTime);

if (dataTime > currentTime) {
    console.log("future class");
    //$("textarea").addClass(future);
}
if (dataTime < currentTime) {
    console.log("past class");
    // $("textarea").addClass(past);
} else {
    console.log("present class");
    //$("textarea").addClass(present);
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
        console.log(oneEvent);
    }
}