const inq = require("./inq");
const dataBase = require("./dataBase");

function log()
{
    console.log("test");
}

async function start()
{
    const res = await inq.Start();
    console.log(res);
    switch (res) {
        case "Add":
            console.log("user wants to add");
            add();
            break;
        case "View":
            console.log("user wants to view");
            view();
            break;
        case "Update":
            console.log("user wants to update");
            update();
            break;
            default:
            dataBase.EndConnection();  
            break;
    }
}


async function view()
{
    const res = await inq.View();
    if(res === "employee" || res === "role" || res === "department")
    {
        dataBase.View(res);
    }else if(res === "all")
    {
        dataBase.ViewAll();
    }
    else
    {
        console.log("Error, Make sure possible answers match.");
    }
    start();
}

async function add()
{
    const res = await inq.Add();
    let info = '';
    switch (res) {
        case "employee":
            info = await inq.AddEmployee()
            dataBase.NewEmployee(info.first_name, info.last_name, info.role_id, info.manager_id);
            start();
            break;
        case "role":
            info = await inq.AddRole()
            dataBase.NewRole(info.title, info.salary, info.department_id);
            start();
            break;
        case "department":
            info = await inq.AddDepartment()
            dataBase.NewDepartment(info.last_name);
            start();
            break;
        default:
            break;
    }
}

async function update()
{
   const res = await inq.UpdateEmployeeRole();
   dataBase.UpdateEmployeeRole(res.employee_id, res.role_update);
   start();
}



start();

module.exports = function()
{
    start();
}