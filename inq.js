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
        choices: ["Add", "Update", "View"]
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
        choices: ["Employees", "Roles", "Departments", "All"]
    }).then((a)=>
    {
        return a.answer;
    }).catch((err) => 
    {
        if(err)throw err;
    })
}


module.exports =
{
    Start: doWork,
    View: View
}