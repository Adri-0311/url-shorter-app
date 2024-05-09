import { randomBytes } from 'node:crypto';

export default function generateShort() {
	const short = randomBytes(8).toString('base64url');
	console.log('Value of short generated =>> ', short);
	return short;
}
