const sequelize = require("./connection");

async function run() {
    // const [students] = await sequelize.query(`
    // SELECT * FROM students;
    // `)
    const [students] = await sequelize.query(`
    SELECT students.name AS name, 
    age, 
    students.id AS id, 
    groups.name AS "groupName" 
    FROM students JOIN groups ON students."groupId"=groups.id;
    `)
    console.log(students)
}

run();