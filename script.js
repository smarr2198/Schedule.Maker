// function to recieve current time and have it display on page
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
  document.getElementById("time").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();

//function to color code the rows to show if they are in past present or future
function pastPresentFuture() {
  const now = moment().hours();
  $(".js-row").each(function () {
    const row = $(this);
    const rowHour = row.data("hour");
    console.log(rowHour);
    if (rowHour < now) {
      $(this).addClass("past");
    } else if (rowHour === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
pastPresentFuture();

// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}
//event listeners
//show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

//grab tasks from local storage
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour1 .js-task").val(localStorage.getItem("hour1"));
$("#hour2 .js-task").val(localStorage.getItem("hour2"));
$("#hour3 .js-task").val(localStorage.getItem("hour3"));
$("#hour4 .js-task").val(localStorage.getItem("hour4"));
$("#hour5 .js-task").val(localStorage.getItem("hour5"));
//user clicks save button
$(".js-saveBtn").on("click", saveTask);
