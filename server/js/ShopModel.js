

var mongoose=require('./DbConfig').mongoose;

var ShopSchema = mongoose.Schema({
    title: String,
    content:String
});

var ShopModel=mongoose.model('Shop',ShopSchema);

module.exports=ShopModel;
