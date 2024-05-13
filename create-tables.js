const sequelize = require("./connection");

async function createTables() {
    const [data, meta] = await sequelize.query(`
    DROP TABLE IF EXISTS students, groups;

    CREATE TABLE groups (
        id serial PRIMARY KEY,
        name varchar(20) NOT NULL
    );

    CREATE TABLE students (
        id serial PRIMARY KEY,
        name varchar(20) NOT NULL,
        age integer DEFAULT 18,
        "groupId" integer REFERENCES groups(id) ON DELETE CASCADE
    );
    `)
    console.log(data)
}

createTables()