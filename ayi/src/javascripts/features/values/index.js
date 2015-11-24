
var values={
    RESOURCE_ACTIONS: {
        all: {method: 'GET'},
        get: {method: 'GET'},
        add: {method: 'POST'},
        //post: {method: 'POST',headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}},
        //need server support
        post: {method: 'POST',headers:{'Content-Type':'application/json; charset=UTF-8'}},
        update: {method: 'PUT',headers:{'Content-Type':'application/json; charset=UTF-8'}},
        remove: {method: "DELETE",isArray: false,headers:{'Content-Type':'application/json; charset=UTF-8'}},
        release: {method: 'PUT'},
        complete: {method: 'PUT'},
        cancel_complete: {method: 'PUT'},
        jsonp: {method: 'JSONP'}
        //jsonp: {method: 'GET'}
    },
    CONFIG:{
        PAGE:'0',
        PAGESIZE:'95535',
        MAX:'95535',
        BASEURL: '',
        Stores:[],
        StoresByDate:[null,[],[],[]],
        CurrentStore:{},
        CurrentReport:{},
        CurrentDate:null,
        CurrentMode:''
    }

};

export default angular.module('values',[])
    .value(values)
    .name;