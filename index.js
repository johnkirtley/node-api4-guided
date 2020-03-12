require('dotenv').config(); // read from .env file located within root folder

const server = require('./api/server.js');

const port = process.env.PORT || 5005;
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
