import { fetch } from 'domain-task/fetch';
import { typeName, isActionType, Action, Reducer } from 'redux-typed';
import { ActionCreator } from '../';
import {User as UserModel}   from '../../../models'


export interface UsersState {
    isLoading:boolean;
    users: UserModel.Interface[];
    user: UserModel.Interface;

}



@typeName("USER_LOAD")
class UserLoad extends Action {
    constructor() {
        super();
    }
}
@typeName("USER_LIST")
class UserList extends Action {
    constructor(public users: UserModel.Interface[]) {
        super();
    }
}
@typeName("USER_ITEM")
class UserItem extends Action {
    constructor(public user: UserModel.Interface) {
        super();
    }
}

export const actionCreators = {
    userList: (): ActionCreator => (dispatch, getState) => {
            fetch(`/users`,{ method: 'GET'})
                .then(response => response.json())
                .then((data: any) => {
                    dispatch(new UserList(data.data));
                });

            dispatch(new UserLoad());
    },
    userItem: (UUID,callback): ActionCreator => (dispatch, getState) => {

        dispatch(new UserItem(UserModel.Model));
        fetch(`/users/`+UUID,{ method: 'GET'})
            .then(response => response.json())
            .then((data: any) => {
                dispatch(new UserItem(data.data));
                callback();
            });

        dispatch(new UserLoad());
    },
    userAdd: (user,callback): ActionCreator => (dispatch, getState) => {

        fetch(`/users/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)})

            .then(response => response.json())
            .then((data: any) => {
                dispatch(new UserItem(data.data));
                callback();
            });

        dispatch(new UserLoad());
    },
    userEdit: (UUID,user,callback): ActionCreator => (dispatch, getState) => {

        fetch(`/users/`+UUID,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)})

            .then(response => response.json())
            .then((data: any) => {
                dispatch(new UserItem(data.data));
                callback();
            });

        dispatch(new UserLoad());
    },
    userDelete: (UUID,callback): ActionCreator => (dispatch, getState) => {

        fetch(`/users/`+UUID,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }})

            .then(response => response.json())
            .then((data: any) => {
                dispatch(new UserItem(data.data));
                callback();
            });

        dispatch(new UserLoad());
    }
};

const unloadedState: UsersState = { users: [], user:UserModel.Model, isLoading: false };
export const reducer: Reducer<UsersState> = (state, action) => {
    if (isActionType(action, UserLoad)) {
        return { isLoading: true, users: state.users, user:state.user };
    } else if (isActionType(action, UserList)) {
            return {users: action.users, user:state.user, isLoading: false };
    }else if (isActionType(action, UserItem)) {
        return {users: state.users, user: action.user, isLoading: false };
    }
    return state || unloadedState;
};
