const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("students-db", 'postgres', '123', {
  host: 'localhost',
  dialect:  'postgres' 
});

module.exports = sequelize;

// ((async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })());