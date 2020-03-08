const mysql = require("mysql");


     connection = mysql.createConnection(
        {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "brb1992!!",
            database: "company_db",   
        }
    );

    connection.connect((err)=>
    {
        if (err) throw err;

        console.log(`connect to database on port: ${connection.threadId}`)
    });

// module.exports =
// {
//     initialize : initializeDataBase
// }