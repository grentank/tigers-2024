const sequelize = require("./connection");

async function seedTables() {
    const [data] = await sequelize.query(`
    INSERT INTO groups (name) VALUES
    ('Тигры'),
    ('Песцы'),
    ('Киты');

    INSERT INTO students (name, age, "groupId") VALUES
    ('Иван', 20, 1),
    ('Сергей', 21, 2),
    ('Алексей', 22, 1),
    ('Максим', 30, 3);
    `)
    console.log(data)
}
seedTables()