import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
        verbose: true
    });
    return db;
}

const dbOn = init();

export async function listUsers() {
    const db = await dbOn;
    return db.all('SELECT * FROM users ORDER BY name');
}

export async function addUser(user) {
    if (user.trim() = '') return listUsers();
    const db = await dbOn;
    const id = uuid();
    await db.run('INSERT INTO USERS VALUES (?, ?, ?)', [id, msg, time]);

    return listUsers();
}

