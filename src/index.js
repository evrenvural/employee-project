import {Requests} from "./requests";
import {UI} from "./ui";

const empRequest = new Requests("http://localhost:3000/employees");
const ui = new UI();

const form = $("#employee-form");
const nameInput = $("#name");
const departmentInput = $("#department");
const salaryInput = $("#salary");

eventListeners();

function eventListeners(){
    $("document").ready(()=>{
        getAllEmployees();
    });
    form.submit((e)=>{
        e.preventDefault();
        
        const empName = nameInput.val().trim();
        const empDep = departmentInput.val().trim();
        const empSalary = salaryInput.val().trim();

        if(empName === "" || empDep === "" || empSalary === ""){
            alert("Lütfen Tüm alanları doldurun");
        }
        else{
            const employee = {
                name: nameInput.val().trim(),
                department : departmentInput.val().trim(),
                salary : salaryInput.val().trim()
            };
            empRequest.post(employee)
            .then((response)=>{
                ui.addEmployee(response);
            })
            .catch(err => console.error(err));
        }
        ui.clearInputs();
    });
}

function getAllEmployees(){
    empRequest.get()
    .then(employees =>{
        ui.addAllEmployees(employees);
    })
    .catch(error => console.error(error));
}