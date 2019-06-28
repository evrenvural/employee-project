import {Requests} from "./requests";
const empRequest = new Requests("http://localhost:3000/employees");

const form = $("#employee-form");
const nameInput = $("#name");
const departmentInput = $("#department");
const salaryInput = $("#salary");
const employeeList = $("#employee");
const updateEmployeeButton = $("#update");

empRequest.delete(3)
.then(emp => console.log(emp))
.catch(err => console.log(err));
