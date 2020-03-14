const mysql = require("mysql");
const Table = require('console.table');



    connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "brb1992!!",
        database: "company_db",   
    }
);

function view(category)
{
    connection.query("SELECT * FROM ??",[category], (err, results)=>
    {
        if(err) throw err;
        console.table('\n', results);
    })
}

function viewAll()
{
    connection.query("SELECT * FROM employee", (err, results)=>
    {
        if(err) throw err;
        console.table(['id', 'First name', 'Last name', 'Role id', 'managers id'], results);
        connection.query("SELECT * FROM role", (err, results)=>
        {
            if(err) throw err;
            console.table(['id','Title', 'Salary', 'Department'], results);
            connection.query("SELECT * FROM department", (err, results)=>
            {
                if(err) throw err;
                console.table(['id', 'Name'], results);                
            })
        });
    });
}

function newEmployee(firstName, lastName, roleId, managersId)
{
connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleId}, ${managersId})`,
(err)=>
    {
        if(err) throw err;
        return "Entry added"
    });
}
function newRole(title, salary, department_id)
{
connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${title}", "${salary}", ${department_id})`,
    (err)=>
    {
        if(err) throw err;
        console.log("Entry added");

    });
}
function newDepartment(name)
{
    connection.query(`INSERT INTO department (name) VALUES ("${name}")`,
    (err)=>
    {
        if(err) throw err;
        console.log("Entry added");
    });
}

function updateEmployeeRole(employe_id, employee_new_role)
{
    console.log(employe_id + employee_new_role);
    connection.query(`UPDATE employee SET role_id = ${employee_new_role} WHERE id = ${employe_id};`, (err) =>
        {
            if (err) throw err;
            view('employee');
        });
}

function endConnection()
{
    connection.end();
}




connection.connect((err)=>
{
    if (err) throw err;

    console.log(`connect to database on port: ${connection.threadId}`)
});


module.exports =
{
    View: view,
    ViewAll: viewAll,
    NewEmployee: newEmployee,
    NewRole: newRole,
    NewDepartment: newDepartment,
    EndConnection: endConnection,
    UpdateEmployeeRole: updateEmployeeRole
}