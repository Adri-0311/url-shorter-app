import { connect } from 'mongoose';

const { USER_DB, PASSWORD_DB, CLUSTER_DB, COLLECTION_NAME } = process.env;

// Connection to MongoDB
export default async function connectToMongoDB() {
	try {
		await connect(
			`mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER_DB}/${COLLECTION_NAME}?retryWrites=true&w=majority`
		);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Connect to mongo DB error: ', error);
	}
}
