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
