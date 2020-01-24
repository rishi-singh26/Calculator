var data;
var res;
var history = [];

function input(inputData) {
  if (data == undefined) {
    data = inputData;
  } else {
    data = data + inputData;
  }
  document.getElementById("screen").textContent = data;
}

function del() {
  data = "";
  document.getElementById("screen").textContent = "";
}

function result() {
  // if (history.length == 0) {
  //   history = [data];
  // } else {
  //   history.push("data");
  // }
  res = eval(data);
  //   console.log(res);
  data = res;
  document.getElementById("screen").textContent = res;
  // console.log(history);
}

function backSpace() {
  //   console.log(data, "data before poping");
  var sData = data.toString();
  var dataArray = sData.split("");
  //   console.log(dataArray, "data array");
  dataArray.pop();
  data = dataArray.join("");
  //   console.log(data, "data after popping");
  document.getElementById("screen").textContent = data;
}

var keyCodes = [];
keyCodes[49] = "1";
keyCodes[50] = "2";
keyCodes[51] = "3";
keyCodes[52] = "4";
keyCodes[53] = "5";
keyCodes[54] = "6";
keyCodes[55] = "7";
keyCodes[56] = "8";
keyCodes[57] = "9";
keyCodes[48] = "0";
keyCodes[83] = "-";
keyCodes[65] = "+";
keyCodes[68] = "/";
keyCodes[77] = "*";
keyCodes[190] = ".";
keyCodes[79] = "(";
keyCodes[67] = ")";

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    result();
  } else if (event.keyCode == 8) {
    backSpace();
  } else if (event.keyCode == 27) {
    del();
  } else {
    if (keyCodes[event.keyCode] == undefined) {
      return;
    } else input(keyCodes[event.keyCode]);
  }
});

$(function() {
  // jQuery goes here...
  // Uncomment this line to fade out the red box on page load
  // fading
  $(".shortcuts").fadeTo(2000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").fadeTo(2000, 0.8);
});
