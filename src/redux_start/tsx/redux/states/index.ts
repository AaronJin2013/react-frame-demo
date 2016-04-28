import {User} from '../../models';

interface interfaceState {
    config: any
    users?: Array<User>;
}
var users:Array<User>= [{name:'aaa',age:123}];

export const State : interfaceState = {
    config :{},
    users :users
};
