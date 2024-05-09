import { Schema, model } from 'mongoose';
import { IUrl } from './url.interface';

const UrlSchema = new Schema<IUrl>({
	url: { type: String, require: true },
	short: {
		type: String,
		require: true,
		unique: true,
	},
});

export default model<IUrl>('Url', UrlSchema);
