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
  if (history.length == 0) {
    history = [data];
  } else {
    history.push("data");
  }
  res = eval(data);
  //   console.log(res);
  data = res;
  document.getElementById("screen").textContent = res;
  console.log(history);
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
