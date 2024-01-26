const app = require('./src/app');
const { sequelize } = require('./src/db');

app.listen(3001, () => {
  sequelize.sync();
  console.log('Listening on port 3001');
});