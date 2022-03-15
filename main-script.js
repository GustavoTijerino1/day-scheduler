
// save data
// able to refresh


var scheduledEvent = getLocal();
var today = moment();
$('#current').text(today.format("MMM Do, YYYY"));

$('.container').on('click', '.saveBttn', function () {
    getLocal();
    buttonIndex = $(this).index('.saveBttn')

    var textContent = $(this).siblings('.text').val();
    scheduledEvent[buttonIndex].value = textContent;

    addToLocal()
})

function addToLocal() {
    textString = JSON.stringify(scheduledEvent);
    localStorage.setItem("appointment", textString);
}


function getLocal() {
    var pullLocal = localStorage.getItem("appointment");
    if (pullLocal === null) {
        pullLocal = Array(9).fill();
    } else {
        pullLocal = JSON.parse(pullLocal)
    }
    return pullLocal
}


function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
}
$('.container').children().find('#textarea').each((i, e) => $(e).val(scheduledEvent[i].value))

$('.container').children().each((i, e) => {
    var liveTime = moment().format('H');
    if ((i + 9) < liveTime) {
        $(e).css("background-color", "red")
    } else if ((i + 9) > liveTime) {
        $(e).css("background-color", "green")
    } else {
        ((i + 9) == liveTime)
        $(e).css("background-color", "yellow")
    }
})

