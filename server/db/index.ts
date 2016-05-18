import * as mongoose from 'mongoose';
//import * as uuid from 'node-uuid';
import * as models from '../../models';
interface IUserModel extends models.IUser, mongoose.Document { }
const db='mongodb://localhost/redux';
let connect =()=>{
    let options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(db, options);
};
connect();

var userSchema = new mongoose.Schema(models.SUser);


mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
export const User = mongoose.model<IUserModel>("User", userSchema);

//var user = new User({UUID:uuid.v4(),department: "技术部",mobile:"18964929189",name:"金鑫"});
//user.save();

//function doSthWithUser(user: IUser) { }
//
//doSthWithUser(user); // works!