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
            console.log("HEEY");
        });
    }
}

// <!-- <tr>
                                            
// <td>Mustafa Murat Coşkun</td>
// <td>Bilişim</td>
// <td>4000</td>
// <td>1</td>
// <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
// <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
// </tr>
// -->