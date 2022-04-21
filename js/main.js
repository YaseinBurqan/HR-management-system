"use strict";

let employeeArray = [];

function Employees(Id, name, department, level, image, salary) {
  this.employeeID = Id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = `../assets/${Id}.jpg`;
  this.employeeSalary = salary;
  employeeArray.push(this);
}

Employees.prototype.salary = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
  } else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000) + 1000);
  } else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500) + 500);
  }
};

employeeArray = [new Employees(1000, "Ghazi Samer", "Administration", "Senior", "../assets/1000.jpg"), new Employees(1001, "Lana Ali", "Finance", "Senior", "../assets/1001 .jpg"), new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "../assets/1002.jpg"), new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "../assets/1003.jpg"), new Employees(1004, "Omar Zaid", "Development", "Senior", "../assets/1004.jpg"), new Employees(1005, "Rana Saleh", "Development", "Junior", "../assets/1005.jpg"), new Employees(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "../assets/1006.jpg")];

const idGenerate = (employee) => {
  let idArray = employee.map((ele) => ele.employeeId);
  do {
    for (let i = 0; i < idArray.length; i++) {
      if (idArray[i] < 1000 || idArray[i] > 9999) {
        employee[i].employeeId = Math.floor(Math.random() * (9999 - 1000) + 1000);
      }
    }
  } while (idArray == [...new Set(idArray)]);
};
("use strict");

let employeeArray = [];

function Employee(Id, name, department, level, image, salary) {
  this.employeeId = Id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = `../assets/${Id}.jpg`;
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
  document.write(`<h1>The Id ${this.d} and the name is ${this.employeeName}<h/>`);
};

const idGenerate = (employee) => {
  let idArray = employee.map((ele) => ele.d);
  do {
    for (let i = 0; i < idArray.length; i++) {
      if (idArray[i] < 1000 || idArray[i] > 9999) {
        employee[i].d = Math.floor(Math.random() * (9999 - 1000) + 1000);
      }
    }
  } while (idArray == [...new Set(idArray)]);
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let employeeName = event.target.form[0].value;
  let employeeDepartment = event.target.form[1].value;
  let employeeLevel = event.target.form[2].value;
  let employeeImage = event.target.form[3].value;
  let newEmployee = new Employee(0, name, department, level, image);
  Employee.push(newEmployee);
  idGenerate(Employee);
  setLocalStorage(newEmployee);
  main.appendChild(newEmployee.render());
});

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
  employeeSalary.textContent = `Net Salary: ${this.employeeSalary}`;
  childDiv.appendChild(employeeId);
  childDiv.appendChild(employeeName);
  childDiv.appendChild(employeeLevel);
  childDiv.appendChild(employeeDepartment);
  childDiv.appendChild(employeeSalary);
  div.appendChild(employeeImage);
  div.appendChild(childDiv);
  div.classList.add("employee-card");
  return div;
};
