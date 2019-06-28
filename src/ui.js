export class UI{
    constructor(){
        this.employeesList = $("#employees");
        this.updateButton = $("#update");
        this.nameInput = $("#name");
        this.departmentInput = $("#department");
        this.salaryInput = $("#salary");
    }

    addAllEmployees(employees){
        employees.forEach(employee => {
            this.employeesList.append(`
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>                
            `);
        });
    }

    addEmployee(employee){
        this.employeesList.append(`
        <tr>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>                
        `);
    }

    clearInputs(){
        this.nameInput.val("");
        this.departmentInput.val("");
        this.salaryInput.val("");
    }

    deleteEmployee(tr){
        tr.remove();
    }

    toggleUpdateButton(target){
        if(this.updateButton.css("display") === "none"){
            this.updateButton.show();
            this.addAllEmployeeInfoToInputs(target);
        }
        else{
            this.updateButton.hide();
            this.clearInputs();
        }
    }

    addAllEmployeeInfoToInputs(target){
        this.nameInput.val(target.children[0].innerText);
        this.departmentInput.val(target.children[1].innerText);
        this.salaryInput.val(target.children[2].innerText);
    }

    updateEmployee(employee, parent){
        parent.innerHTML = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>               
            </tr>       
        `;
    }
}
