const inq = require("./inq");
const dataBase = require("./dataBase");


async function start()
{
    const res = await inq.Start();
    console.log(res);
    switch (res) {
        case "Add":
            console.log("user wants to add");
            break;
        case "View":
            console.log("user wants to view");
            view();
            break;
        case "Update":
            console.log("user wants to update");
            break;
            default:
                console.log("Falue");    
            break;
    }
}


async function view()
{
    const res = await inq.View();
    switch (res) {
        case "Employees":
            console.log("user wants to view employees");
            break;
        case "Roles":
            console.log("user wants to view roles");
            break;
        case "Departments":
            console.log("user wants to view departments");
            break;
        case "All":
            console.log("User Wants to view all entries");
            break;
            default:
                console.log("Falue");    
            break;
    }
}

start();
