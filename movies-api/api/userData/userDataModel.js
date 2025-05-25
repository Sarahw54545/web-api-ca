import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userDataModelSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
    favorites: { type: [String], default: [] },
    watchlist: { type: [String], default: [] }
});

export default mongoose.model('UserData', userDataModelSchema);