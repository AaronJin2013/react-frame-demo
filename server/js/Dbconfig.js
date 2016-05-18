var mongoose = require('mongoose');

//global.TUNGUS_DB_OPTIONS =  { nativeObjectID: true, searchInArray: true };

mongoose.connect('mongodb://localhost/redux');

var db=mongoose.connection;
//fix tungus bug;
db.config={};
db.config.autoIndex=false;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    var Shop=require('./ShopModel');

    var shop = new Shop({
        title : 'Arvindabc',
        content : '01/01/1915456'
    });

    shop.save(function (err, data) {
        if (err){
            console.log(err);
        } else {
            console.log('Saved : ', data );
        }
    });
//
//    //通过名字查找一部电影
//    Movie.findOne({title: 'Thor'},function(err,thor){
//        if(err) return console.err(err);
//        console.dir(thor);
//    });
//
////查找所有电影
//    Movie.find(function(err,movies){
//        if(err) return console.err(err);
//        console.dir(movies);
//    });
//
////查找所有具有一个credit cookie的电影
//    Movie.find({hasCreditCookie: true}, function(err,movies){
//        if(err) return console.error(err);
//        console.dir(movies);
//    });
//
//    movieSchema.statics.findAllWithCreditCookies = function(callback){
//        return this.find({ hasCreditCookie: true}, callback);
//    };
//
////只用这个副主函数作为编译的Movie模型的一个静态函数
//
//    Movie.findAllWithCreditCookies(function(err,movies){
//        if(err) return console.error(err);
//        console.dir(movies);
//    });

//
//    MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);
//    MyModel.update({ name: 'Tobi' }, { ferret: true }, { multi: true }, function (err, raw) {
//        if (err) return handleError(err);
//        console.log('The raw response from Mongo was ', raw);
//    });
    //
    //Comment.remove({ title: 'baby born from alien father' }, function (err) {
    //
    //});
    //var query = Comment.remove({ _id: id });
    //query.exec();
    //
    //User
    //    .where('age').gte(21).lte(65)
    //    .where('name', /^b/i)
    //... etc
});

exports.mongoose=mongoose;
