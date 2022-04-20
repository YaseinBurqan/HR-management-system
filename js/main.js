"use strict";

let employeeArray = [];

function Employees(Id, name, department, level, image, salary) {
  this.employeeID = Id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = `../assets/${Id}.jpg`;
  this.employeeSalary = salary;
  salary = function () {
    if (this.level == "Senior") {
      return Math.floor(Math.random() * (2000 - 1500) + 1500);
    } else if (this.level == "Mid-Senior") {
      return Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (this.level == "Junior") {
      return Math.floor(Math.random() * (1000 - 500) + 500);
    }
  };
  employeeArray.push(this);
}

employeeArray = [new Employees(1000, "Ghazi Samer", "Administration", "Senior", "../assets/1000.jpg"), new Employees(1001, "Lana Ali", "Finance", "Senior", "../assets/1001 .jpg"), new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "../assets/1002.jpg"), new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "../assets/1003.jpg"), new Employees(1004, "Omar Zaid", "Development", "Senior", "../assets/1004.jpg"), new Employees(1005, "Rana Saleh", "Development", "Junior", "../assets/1005.jpg"), new Employees(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "../assets/1006.jpg")];
