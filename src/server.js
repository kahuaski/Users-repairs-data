require('dotenv').config();
const app = require('./app');
const { db } = require('./dataBase/configdb');

db.authenticate()
  .then(() => console.log('Database 🤓'))
  .catch((Error) => console.log(Error));

db.sync()
  .then(() => console.log('database synced 🐸'))
  .catch((Error) => console.log(Error));
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on por ${PORT}!🐵`);
});
