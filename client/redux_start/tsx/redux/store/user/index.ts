import { fetch } from 'domain-task/fetch';
import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from '../';
import {User as UserModel}   from '../../../models'


export interface UsersState {
    isLoading:boolean;
    users: User[];

}

export interface User extends UserModel.Interface{
};


@typeName("USER_LOAD")
class UserLoad extends Action {
    constructor() {
        super();
    }
}
@typeName("USER_LIST")
class UserList extends Action {
    constructor(public users: User[]) {
        super();
    }
}
@typeName("USER_ITEM")
class UserItem extends Action {
    constructor(public UUID: string) {
        super();
    }
}
@typeName("USER_ADD")
class UserAdd extends Action {
    constructor(public user: User) {
        super();
    }
}
@typeName("USER_UPDATE")
class UserUpdate extends Action {
    constructor(public UUID: string,public user: User) {
        super();
    }
}
@typeName("USER_DELETE")
class UserDelete extends Action {
    constructor(public UUID: string) {
        super();
    }
}

export const actionCreators = {
    userList: (): ActionCreator => (dispatch, getState) => {
            fetch(`/users`,{ method: 'GET'})
                .then(response => response.json())
                .then((data: User[]) => {
                    dispatch(new UserList(data));
                });

            dispatch(new UserLoad());
    }
};

const unloadedState: UsersState = { users: [], isLoading: false };
export const reducer: Reducer<UsersState> = (state, action) => {
    if (isActionType(action, UserLoad)) {
        return { isLoading: true, users: state.users };
    } else if (isActionType(action, UserList)) {
            return {users: action.users, isLoading: false };
    }
    return state || unloadedState;
};
