var myDay = [{
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: ""
},
{
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: ""
},
{
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: ""
},
{
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: ""
},
{
    id: "4",
    hour: "01",
    time: "13",
    meridiem: "pm",
    reminder: ""
},
{
    id: "5",
    hour: "02",
    time: "14",
    meridiem: "pm",
    reminder: ""
},
{
    id: "6",
    hour: "03",
    time: "15",
    meridiem: "pm",
    reminder: ""
},
{
    id: "7",
    hour: "04",
    time: "16",
    meridiem: "pm",
    reminder: ""
},
{
    id: "8",
    hour: "05",
    time: "17",
    meridiem: "pm",
    reminder: ""
}]

// the header date
function getHeaderDate() {
    setInterval(function () {
        var currentHeaderDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(currentHeaderDate);
    }, 1000)

}
getHeaderDate()

function creatTask() {
    console.log(moment().format("HH"));
    var currentTime = Number(moment().format("HH"));
    $("#task").empty();
    var div = $("<div>")

    for (var i = 0; i < myDay.length; i++) {
        var divBlock;
        console.log(currentTime, Number(myDay[i].time));
        if(currentTime == Number(myDay[i].time)){
            divBlock = $("<div>").attr({
                class: "row present"
            })
        }
        if(currentTime > Number(myDay[i].time)){
            console.log("here")
            divBlock = $("<div>").attr({
                class: "row past"
            })
        }
        if(currentTime < Number(myDay[i].time)){
            divBlock = $("<div>").attr({
                class: "row future"
            })
        }
         
        var divTask = $("<textarea>").attr({
            type: "text",
            id: myDay[i].id,
            name: myDay[i].time,
            class: "inputs"
        }).val(myDay[i].reminder);
        var btn = $("<button>").attr({
            id: myDay[i].time,
            class: "saveBtn"
        }).text("save")
        var divTime = $("<span>").text(myDay[i].hour + " " + myDay[i].meridiem).attr({
            class: "Hours"
        });
        divBlock.append(divTime, divTask, btn);
        div.append(divBlock)
    }
    $("#task").append(div);
}
// creatTask();
function savetask(event) {
    
    var selectedid = event.target.id;
    for (var i = 0; i < myDay.length; i++) {
        if (selectedid == myDay[i].time) {
            var newvalue = $("#" + myDay[i].id).val();
            console.log(newvalue);
            myDay[i].reminder = newvalue;
        }
    }
    console.log(myDay);
    var localStorageData = JSON.stringify(myDay)
    localStorage.setItem("taskList", localStorageData);
}

function getTask() {
    var localStorageData = localStorage.getItem("taskList");
    if (localStorageData) {
        myDay = JSON.parse(localStorageData);
        
    }
    creatTask();
}
getTask();



$("#09").on("click", savetask);
$("#10").on("click", savetask);
$("#11").on("click", savetask);
$("#12").on("click", savetask);
$("#13").on("click", savetask);
$("#14").on("click", savetask);
$("#15").on("click", savetask);
$("#16").on("click", savetask);
$("#17").on("click", savetask);