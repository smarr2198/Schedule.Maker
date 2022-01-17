// global variables
let hourNine = 9;
let hourTen = 10;
let hourEleven = 11;
let hourTwelve = 12;
let hourOne = 13;
let hourTwo = 14;
let hourThree = 15;
let hourFour = 16;
let hourFive = 17;
let elementNine = document.getElementById("ppf9");
let elementTen = document.getElementById("ppf10");
let elementEleven = document.getElementById("ppf11");
let elementTwelve = document.getElementById("ppf12");
let elementOne = document.getElementById("ppf1");
let elementTwo = document.getElementById("ppf2");
let elementThree = document.getElementById("ppf3");
let elementFour = document.getElementById("ppf4");
let elementFive = document.getElementById("ppf5");

// let today = moment();
// $("#time").text(today.format("MMM DD, YYYY [at] hh:mm:ss a"));
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

//functions
function pastPresentFuture() {
  let date = new Date();
  let hours = date.getHours();

  if (hourNine > hours) {
    elementNine.classList.remove("past");
    elementNine.classList.remove("present");
    elementNine.classList.add("future");
  }
  if (hourNine < hours) {
    elementNine.classList.add("past");
    elementNine.classList.remove("present");
    elementNine.classList.remove("future");
  }
  if (hourNine === hours) {
    elementNine.classList.remove("past");
    elementNine.classList.add("present");
    elementNine.classList.remove("future");
  }

  if (hourTen > hours) {
    elementTen.classList.remove("past");
    elementTen.classList.remove("present");
    elementTen.classList.add("future");
  }
  if (hourTen < hours) {
    elementTen.classList.add("past");
    elementTen.classList.remove("present");
    elementTen.classList.remove("future");
  }
  if (hourTen === hours) {
    elementTen.classList.remove("past");
    elementTen.classList.add("present");
    elementTen.classList.remove("future");
  }

  if (hourEleven > hours) {
    elementEleven.classList.remove("past");
    elementEleven.classList.remove("present");
    elementEleven.classList.add("future");
  }
  if (hourEleven < hours) {
    elementEleven.classList.add("past");
    elementEleven.classList.remove("present");
    elementEleven.classList.remove("future");
  }
  if (hourEleven === hours) {
    elementEleven.classList.remove("past");
    elementEleven.classList.add("present");
    elementEleven.classList.remove("future");
  }

  if (hourTwelve > hours) {
    elementTwelve.classList.remove("past");
    elementTwelve.classList.remove("present");
    elementTwelve.classList.add("future");
  }
  if (hourTwelve < hours) {
    elementTwelve.classList.add("past");
    elementTwelve.classList.remove("present");
    elementTwelve.classList.remove("future");
  }
  if (hourTwelve === hours) {
    elementTwelve.classList.remove("past");
    elementTwelve.classList.add("present");
    elementTwelve.classList.remove("future");
  }

  if (hourOne > hours) {
    elementOne.classList.remove("past");
    elementOne.classList.remove("present");
    elementOne.classList.add("future");
  }
  if (hourOne < hours) {
    elementOne.classList.add("past");
    elementOne.classList.remove("present");
    elementOne.classList.remove("future");
  }
  if (hourOne === hours) {
    elementOne.classList.remove("past");
    elementOne.classList.add("present");
    elementOne.classList.remove("future");
  }

  if (hourTwo > hours) {
    elementTwo.classList.remove("past");
    elementTwo.classList.remove("present");
    elementTwo.classList.add("future");
  }
  if (hourTwo < hours) {
    elementTwo.classList.add("past");
    elementTwo.classList.remove("present");
    elementTwo.classList.remove("future");
  }
  if (hourTwo === hours) {
    elementTwo.classList.remove("past");
    elementTwo.classList.add("present");
    elementTwo.classList.remove("future");
  }

  if (hourThree > hours) {
    elementThree.classList.remove("past");
    elementThree.classList.remove("present");
    elementThree.classList.add("future");
  }
  if (hourThree < hours) {
    elementThree.classList.add("past");
    elementThree.classList.remove("present");
    elementThree.classList.remove("future");
  }
  if (hourThree === hours) {
    elementThree.classList.remove("past");
    elementThree.classList.add("present");
    elementThree.classList.remove("future");
  }

  if (hourFour > hours) {
    elementFour.classList.remove("past");
    elementFour.classList.remove("present");
    elementFour.classList.add("future");
  }
  if (hourFour < hours) {
    elementFour.classList.add("past");
    elementFour.classList.remove("present");
    elementFour.classList.remove("future");
  }
  if (hourFour === hours) {
    elementFour.classList.remove("past");
    elementFour.classList.add("present");
    elementFour.classList.remove("future");
  }

  if (hourFive > hours) {
    elementFive.classList.remove("past");
    elementFive.classList.remove("present");
    elementFive.classList.add("future");
  }
  if (hourFive < hours) {
    elementFive.classList.add("past");
    elementFive.classList.remove("present");
    elementFive.classList.remove("future");
  }
  if (hourFive === hours) {
    elementFive.classList.remove("past");
    elementFive.classList.add("present");
    elementFive.classList.remove("future");
  }
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
