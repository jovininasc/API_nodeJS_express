const app = require('./app');
const dotenv = require('dotenv').config();

const PORT = process.env.dotenv || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

