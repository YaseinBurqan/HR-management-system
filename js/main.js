"use strict";

let employeeArray = [];
let submit = document.querySelector("#btn");
let main = document.querySelector(".employeeList");

function Employee(Id, name, department, level, image, salary) {
  this.employeeId = Id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = image;
  this.employeeSalary = salary;
  employeeArray.push(this);
}

Employee.prototype.salary = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
  } else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000) + 1000);
  } else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500) + 500);
  }
};

new Employee(1000, "Ghazi Samer", "Administration", "Senior", "../assets/1000.jpg");
new Employee(1001, "Lana Ali", "Finance", "Senior", "../assets/1001 .jpg");
new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "../assets/1002.jpg");
new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "../assets/1003.jpg");
new Employee(1004, "Omar Zaid", "Development", "Senior", "../assets/1004.jpg");
new Employee(1005, "Rana Saleh", "Development", "Junior", "../assets/1005.jpg");
new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "../assets/1006.jpg");

Employee.prototype.render = function () {
  console.log(this.employeeName);
  document.write(`<h3>Name :${this.employeeName}, ID : ${this.d}<h3/>` < br > `Department : ${this.employeeDepartment}, Level : ${this.employeeLevel}`);
};

if (localStorage.getItem("data") == null) {
  localStorage.setItem("data", JSON.stringify(employeeArray));
}

const setLocalStorage = (ele) => {
  let setter = JSON.parse(localStorage.getItem("data"));
  setter.push(ele);
  localStorage.setItem("data", JSON.stringify(setter));
};

const idGenerate = (employee) => {
  let idArray = employee.map((ele) => ele.employeeId);
  do {
    for (let i = 0; i < idArray.length; i++) {
      if (idArray[i] < 1000) {
        employee[i].employeeId = 1000 + i;
      }
    }
  } while (idArray == [...new Set(idArray)]);
};

Employee.prototype.render = function () {
  let div = document.createElement("div");
  let childDiv = document.createElement("div");
  let employeeImage = document.createElement("img");
  let employeeId = document.createElement("h4");
  let employeeName = document.createElement("h4");
  let employeeDepartment = document.createElement("h3");
  let employeeLevel = document.createElement("h3");
  let employeeSalary = document.createElement("h2");

  employeeImage.setAttribute("src", this.employeeImage);
  employeeName.textContent = `Employee: ${this.employeeName}`;
  employeeId.textContent = `ID: ${this.employeeId}`;
  employeeDepartment.textContent = `Department: ${this.employeeDepartment}`;
  employeeLevel.textContent = `Level: ${this.employeeLevel}`;
  employeeSalary.textContent = `Salary: ${this.employeeSalary}`;

  childDiv.appendChild(employeeId);
  childDiv.appendChild(employeeName);
  childDiv.appendChild(employeeLevel);
  childDiv.appendChild(employeeDepartment);
  childDiv.appendChild(employeeSalary);

  div.appendChild(employeeImage);
  div.appendChild(childDiv);
  div.classList.add("employeeList");
  return div;
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let employeeName = event.target.form[0].value;
  let employeeDepartment = event.target.form[1].value;
  let employeeLevel = event.target.form[2].value;
  let employeeImage = event.target.form[3].value;
  let newEmployee = new Employee(0, employeeName, employeeDepartment, employeeLevel, employeeImage);
  employeeArray.push(newEmployee);
  idGenerate(employeeArray);
  setLocalStorage(newEmployee);
  main.appendChild(newEmployee.render());
});