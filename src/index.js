import {Requests} from "./requests";
import {UI} from "./ui";

const empRequest = new Requests("http://localhost:3000/employees");
const ui = new UI();

const form = $("#employee-form");
const nameInput = $("#name");
const departmentInput = $("#department");
const salaryInput = $("#salary");
const employeeList = $("#employees");
const updateEmployeeButton = $("#update");

let updateState = null;

eventListeners();

function eventListeners(){
    $("document").ready(()=>{
        // Gets all employees
        empRequest.get()
        .then(employees =>{
            ui.addAllEmployees(employees);
        })
        .catch(error => console.error(error));
    });
    
    form.submit((e)=>{
        // Adds new employee to ui and json
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

    employeeList.click((e)=>{
        e.preventDefault();
        // Updates or deletes the employee from ui and json
       
        if(e.target.id === "delete-employee"){
            //Delete events
            const id = e.target.parentElement.parentElement.children[3].textContent;
            
            empRequest.delete(id)
            .then(meessage =>{
                ui.deleteEmployee(e.target.parentElement.parentElement);
            })
            .catch(err => console.error(err));

        }
        else if (e.target.id === "update-employee"){
            //Update events
            ui.toggleUpdateButton(e.target.parentElement.parentElement);

            if(updateState === null){
                updateState = {
                    updateId : e.target.parentElement.parentElement.children[3].textContent,
                    updateParent : e.target.parentElement.parentElement
                }
            }
            else{
                updateState = null;
            }
        }
        
    });

    updateEmployeeButton.click(()=>{
        if(updateState){
            const data = {name:nameInput.val().trim(), department: departmentInput.val().trim(), salary: salaryInput.val().trim()};
            empRequest.put(updateState.updateId, data)
            .then(updatedEmployee =>{
                ui.updateEmployee(updatedEmployee, updateState.updateParent);
            })
            .catch(err => console.error(err));
        }
    })

}

