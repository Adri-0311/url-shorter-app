import 'dotenv/config';
import express from 'express';
import urlRoute from './url/url';
import connectToMongoDB from './utils/dbConection';

const port = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());

// Connection to MongoDB
connectToMongoDB();

app.use(urlRoute);

app.listen(port, () => {
	console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
