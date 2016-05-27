import {User,IUserModel} from '../db' ;
import * as mongoose from 'mongoose';
import * as uuid from 'node-uuid';

export module UsersController {
    export function indexAction(req, res, next) {
        User.find((err, users) =>{
            if (err)
                res.send(err);
            res.json({
                state:0,
                data:users
            });
        });
    }
    export function addAction(req, res, next) {
        var user = new User();      // create a new instance of the Bear model
        user.UUID=uuid.v4();
        user.department=req.body.department;
        user.mobile=req.body.mobile;
        user.name=req.body.name;
        // save the bear and check for errors
        user.save((err)=>{
            if (err)
                res.send(err);
            res.json({
                state:0,
                data:user
            });
        });
    }
    export function itemAction(req, res, next) {
        //User.findById(req.params.id, function(err, user) {
        //});
        User.findOne({ UUID: req.params.id }, (err, user) =>{
            if (err)
                res.send(err);
            res.json({
                state:0,
                data:user
            });
        });
    }
    export function updateAction(req, res, next) {

        User.findOne({ UUID: req.params.id }, (err, user)=>{
            if (err)
                res.send(err);

            user.department=req.body.department;
            user.mobile=req.body.mobile;
            user.name=req.body.name;

            // save the bear
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({
                    state:0,
                    data:user
                });
            });

        });
    }
    export function deleteAction(req, res, next) {

        User.findOne({ UUID: req.params.id }, (err, user)=>{
            if (err)
                res.send(err);
            user.remove((err)=>{
                if (err)
                    res.send(err);
                res.json({
                    state:0,
                    data:user
                });
            });
        });
    }
}

export default UsersController;



//function doSthWithUser(user: IUser) { }
//
//doSthWithUser(user); // works!


