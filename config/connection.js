//mysql npm
var mysql = require('mysql');

// Database connection
var connection;

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'da_burgers_db'
	});

// MySql connection & error if not connected
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

// Export to ORM
module.exports = connection;
