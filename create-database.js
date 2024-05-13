const sequelize = require("./connection");

async function createDatabase() {
    const [data, metadata] = await sequelize.query('CREATE DATABASE "students-db" OWNER admin123;');
    console.log(data)
}

createDatabase()