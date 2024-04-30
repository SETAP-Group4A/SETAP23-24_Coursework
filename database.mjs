import sqlite3 from 'sqlite3';



module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: '../database.sqlite'
        }
    },
}



let db = new sqlite3.Database('/database.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);

    }
    console.log('Connection is a success');

});

db.serialize(() => {
    db.each(`SELECT user_id as id, name as name FROM users`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close database connection');
});