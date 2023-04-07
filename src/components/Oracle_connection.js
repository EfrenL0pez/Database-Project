
const oracledb = require('oracledb');

// handle the database connection
async function run() {
    // store the connection object
    let connection;

    try {
        // Attempt to establish a connection to the db
        connection = await oracledb.getConnection({
            user: 'efren.lopez',
            password: 'your_password',
            localhost: 'connection_string', //connection string ('localhost:1521/xe')
        });

        // If the connection is successful, log a success message to the console
        console.log('Connection to the Oracle database was successful!');
    } catch (err) {
        // If an error occurs during the connection attempt, log the error to the console
        console.error('Error occurred while connecting to the Oracle database:', err);
    } finally {
        // If connection was made, try to close it
        if (connection) {
            try {
                // close the connection
                await connection.close();
            } catch (err) {
                // log the error to the console incase of error
                console.error('Error occurred while closing the Oracle database connection:', err);
            }
        }
    }
}

// Execute the 'run' function to connect to the Oracle database
run();
