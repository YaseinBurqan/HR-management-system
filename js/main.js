"use strict";

let employeeArray = [];

function Employees(Id, name, department, level, image, salary) {
  this.employeeID = Id;
  this.employeeName = name;
  this.employeeDepartment = department;
  this.employeeLevel = level;
  this.employeeImage = image;
  this.employeeSalary = salary;
  employeeArray.push(this);
}
