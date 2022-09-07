var hostingPlans = {
  plan1: {
    names: "basic",
    price: 120,
    time: "2 years",
    space: "100Gb",
    pages: "upto 10 pages",
    discountMonths: [6, 7, 9],
    storageServers: {
      google: "10Gb",
      amazon: "15Gb",
      azure: "25Gb",
    },
  },

  plan2: {
    names: "standard",
    price: 170,
    time: "2 years",
    space: "150Gb",
    pages: "upto 20 pages",
    discountMonths: [6, 7, 8],
    storageServers: {
      google: "10Gb",
      amazon: "15Gb",
      azure: "25Gb",
    },
  },

  plan3: {
    names: "advance",
    price: 210,
    time: "2 years",
    space: "unlimited",
    pages: "upto 100 pages",
    discountMonths: [6, 7, 8, 9],
    storageServers: {
      google: "15Gb",
      amazon: "25Gb",
      azure: "40Gb",
    },
  },
};




//setting container div style to flex
var cont=document.getElementById("container");
cont.style.display="flex";
document.getElementById("container").style.flexWrap = "wrap";
cont.style.width="100vw";

//setting container div style to flex

//Basic
let count = 0;

var div = document.getElementById("body1");
for (var key in hostingPlans.plan1) {
  if (count == 0) {
    var ol = document.createElement("ol");
  }
  if (count < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan1[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (count == 6) {
    for (var keys in hostingPlans.plan1.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan1.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  count++;
}

//Standard

let cnt = 0;

var div = document.getElementById("body2");
for (var key in hostingPlans.plan2) {
  if (cnt == 0) {
    var ol = document.createElement("ol");
  }
  if (cnt < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan2[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (cnt == 6) {
    for (var keys in hostingPlans.plan2.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan2.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  cnt++;
}

//Advanced
let contt = 0;

var div = document.getElementById("body3");
for (var key in hostingPlans.plan3) {
  if (contt == 0) {
    var ol = document.createElement("ol");
  }
  if (contt < 6) {
    var li = document.createElement("li");
    var t = document.createTextNode(key);
    var span = document.createElement("span");
    var sText = document.createTextNode(": " + hostingPlans.plan3[key]);
    // var objConcat=(t+":"+sText);
    span.appendChild(sText);
  }
  if (contt == 6) {
    for (var keys in hostingPlans.plan3.storageServers) {
      var li = document.createElement("li");
      var t = document.createTextNode(keys);
      var span = document.createElement("span");

      var sText = document.createTextNode(
        ": " + hostingPlans.plan3.storageServers[keys]
      );
      span.appendChild(sText);
      li.appendChild(t);
      li.appendChild(sText);
      ol.appendChild(li);

      div.appendChild(ol);
    }
    break;
  }

  li.appendChild(t);
  li.appendChild(sText);
  ol.appendChild(li);
  div.appendChild(ol);
  contt++;
}


// Assignment 2
// Create Shapes Using Constructor and display them on browser

// Creating Constructor For Shapes
function Shapes(width, height, color, border, borderRadius , transform) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.border = border;
  this.borderRadius = borderRadius;
  this.transform = transform
}
// Constructor Ended

// Declaring Variables for Shapes
let rectangle = new Shapes("250px", "150px", "green", "2px solid black");
let circle = new Shapes("150px", "150px", "white", "1px solid black", "60%");
let square = new Shapes("150px", "150px", "blue" , "1px solid black");
// Declaration Ended

// Targeting Element
let box = document.getElementById("box");
// Targeting En/ded

// Creating Shapes (Rectangle)
let rectangleBox = document.createElement("div");
rectangleBox.style.width = rectangle.width;
rectangleBox.style.height = rectangle.height;
rectangleBox.style.backgroundColor = rectangle.color;
rectangleBox.style.border = rectangle.border;
box.appendChild(rectangleBox);

// Creating Shapes (Circle)
let circleBox = document.createElement("div");
circleBox.style.width = circle.width;
circleBox.style.height = circle.height;
circleBox.style.backgroundColor = circle.color;
circleBox.style.border = circle.border;
circleBox.style.borderRadius = circle.borderRadius;
box.appendChild(circleBox);

// Creating Shapes (Square)
let squareBox = document.createElement("div");
squareBox.style.width = square.width;
squareBox.style.height = square.height;
squareBox.style.backgroundColor = square.color;
squareBox.style.border = square.border;
box.appendChild(squareBox);

//Employee Data
// Creating a Constructor
function Data(
  id,
  name,
  fatherName,
  email,
  address,
  designation,
  experience,
  salary
) {
  this.id = id;
  this.name = name;
  this.fatherName = fatherName;
  this.email = email;
  this.address = address;
  this.designation = designation;
  this.experience = experience;
  this.salary = salary;
}
// Constructor Ended

// Declaring Variables & passing Arguments
let data1 = new Data(
  "4001",
  "George",
  "Cello",
  "george123@gmail.com",
  "xyz street USA",
  "CEO",
  "10 years",
  "2000$"
);
let data2 = new Data(
  "4002",
  "Tom",
  "Broad",
  "tom123@gmail.com",
  "xyz street USA",
  "Senior Developer",
  "8 years",
  "1000$"
);
let data3 = new Data(
  "4003",
  "Thea",
  "Armor",
  "thea123@gmail.com",
  "xyz street USA",
  "Designer",
  "5 years",
  "500$"
);
let data4 = new Data(
  "4004",
  "Joe",
  "Tenno",
  "joe123@gmail.com",
  "xyz street USA",
  "Supervisor",
  "3 years",
  "300$"
);
let data5 = new Data(
  "4005",
  "Denny",
  "Root",
  "root123@gmail.com",
  "xyz street USA",
  "Manager",
  "4 years",
  "500$"
);
let allData = [data1, data2, data3, data4 , data5] ;
// Declaration & Arguments Ended

// Targeting Element From Html
let table = document.getElementById("table");
let tr = document.createElement("tr");
// Targeting Ended

// Printing Table Header
for (let key in data1) {
  let td = document.createElement("td");
  let text = document.createTextNode(key);
  td.appendChild(text);
  tr.appendChild(td)
  table.appendChild(tr)
}
// Table Header Ended

// Printing Table Using For In & FOR LOOP
for (let i = 0; i < allData.length; i++) {
  let trow = document.createElement("tr");
  for (let key in allData[i]) {
    let tdata = document.createElement("td");
    let text2 = document.createTextNode(allData[i][key]);
    tdata.appendChild(text2);
    trow.appendChild(tdata);
    table.appendChild(trow);
  }
  }
// Printing Ended