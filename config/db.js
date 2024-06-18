const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "u739277164_demo21",
    password: "Demo@007",
    database: " u739277164_demo21"
})

// Connecting to database
connection.connect(function (err) {
    if (err) {
        console.log("Error in the connection")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        connection.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`)
                else
                    console.log("Result: ", result)
            })
    }
});

module.exports = connection