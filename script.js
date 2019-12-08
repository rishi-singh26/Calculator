var data;
var res;

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
  //   var intData = parseInt(data);
  res = eval(data);
  console.log(res);
  data = res;
  document.getElementById("screen").textContent = res;
}

function backSpace() {
  console.log(data);
  var sData = data.toString();
  var dataArray = sData.split("");
  console.log(dataArray);
  dataArray.pop();
  data = dataArray.join("");
  document.getElementById("screen").textContent = data;
}
