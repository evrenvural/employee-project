import {Requests} from "./requests";
import {UI} from "./ui";

const empRequest = new Requests("http://localhost:3000/employees");
const ui = new UI();

const form = $("#employee-form");
const nameInput = $("#name");
const departmentInput = $("#department");
const salaryInput = $("#salary");
const employeeList = $("#employee");
const updateEmployeeButton = $("#update");

eventListeners();

function eventListeners(){
    $("document").ready(()=>{
        getAllEmployees();
    });
}

function getAllEmployees(){
    empRequest.get()
    .then(employees =>{
        ui.addAllEmployees(employees);
    })
    .catch(error => console.error(error));
}