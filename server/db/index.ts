import * as mongoose from 'mongoose';
import * as uuid from 'node-uuid';
import * as models from '../../models';
const db = 'mongodb://localhost/redux';
var connect = ()=> {
    let options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect(db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

export interface IUserModel extends models.User.Interface, mongoose.Document {}
var userSchema = new mongoose.Schema(models.User.Schema);
export const User = mongoose.model<IUserModel>("User", userSchema);

export interface IShopModel extends models.Shop.Interface, mongoose.Document {}
var ShopSchema = new mongoose.Schema(models.Shop.Schema);
export const Shop = mongoose.model<IShopModel>("Shop", ShopSchema);

