const inquirer = require("inquirer");

// async function doWork()
// {
//     let promise = new Promise((res, rej)=>
//     {
//         inquirer.prompt({
//             type: "list",
//             name: "answer",
//             message: "what would you like to do?",
//             choices: ["Add", "Update", "view"]
//         }).then((a)=>
//         {
//             res(a.answer);
//         }).catch((err) => 
//         {
//             if(err)throw err;
//         })
//     });

//     let a = await promise;
//     return a;

// }


function doWork()
{
    return inquirer.prompt({
        type: "list",
        name: "answer",
        message: "what would you like to do?",
        choices: ["Add", "Update", "View", "Exit"]
    }).then((a)=>
    {
        return a.answer;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}

function View()
{
    return inquirer.prompt({
        type: "list",
        name: "answer",
        message: "what would you like to view",
        choices: ["employee", "role", "department", "all"]
    }).then((a)=>
    {
        return a.answer;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}
function Add()
{
    return inquirer.prompt({
        type: "list",
        name: "answer",
        message: "What would you like to add?",
        choices: ["employee", "role", "department"]
    }).then((a)=>
    {
        return a.answer;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}

function AddEmployee()
{
    return inquirer.prompt([{
        type: "input",
        name: "first_name",
        message: "First Name?",
    },
    {   
        type: "input",
        name: "last_name",
        message: "Last Name?",
    },
    {
        type: "number",
        name: "role_id",
        message: "Role Id?"
    },
    {
        type: "number",
        name: "manager_id",
        message: "Manager's Id?"
    }]).then((a)=>
    {
        return a;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}

function AddRole()
{
    return inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title?",
    },
    {
        type: "number",
        name: "salary",
        message: "What is the salary?",   
    },
    {
        type: "number",
        name: "department_id",
        message: "What is the department ID?",   
    }]).then((a)=>
    {
        return a;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}

function AddDepartment()
{
    return inquirer.prompt({
        type: "input",
        name: "name",
        message: "What is the department name?",
    }).then((a)=>
    {
        return a;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}

module.exports =
{
    Start: doWork,
    View: View,
    Add: Add,
    AddRole: AddRole,
    AddEmployee: AddEmployee,
    AddDepartment: AddDepartment
}