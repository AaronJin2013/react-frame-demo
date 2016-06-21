import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../../redux/store';
import * as UsersState from '../../redux/store/user';
import { Link } from 'react-router';
import {User as UserModel}   from '../../models';
import { push } from 'react-router-redux';

interface RouteParams {
}
class View extends React.Component<any, any> {
    state:UserModel.Interface;

    handleChange(event,obj) {
        this.state[obj]=event.target.value;
        this.setState(this.state);
    }
    constructor(props) {
        super(props);
        this.state =  UserModel.Model;

        //如果没有在onChange里使用绑定,这边是需要做一下手工绑定的
        //this.handleChange = this.handleChange.bind(this);
    }

    private componentWillMount() {

        //history.pushState(null, '/')
    }
    FormSubmit(){
        //this.props.userAdd( this.state);
        console.log(this.props.route.routerProps);
        //this.props.history.push('/user');
        //history.push('/users');
    }


    public render() {
        const user = this.state;
        return <div>
            <h1 className="b">
                User in views
            </h1>
            <ul className="list-group">
                <li className="list-group-item">
                    用户名:
                    <input type="text" value={user.name} onChange={(ev)=>this.handleChange(ev,'name')}/>
                </li>
                <li className="list-group-item">
                    部门名:
                    <input type="text" value={user.department} onChange={(ev)=>this.handleChange(ev,'department')}/>
                </li>
                <li className="list-group-item">
                    手机号:
                    <input type="text" value={user.mobile} onChange={(ev)=>this.handleChange(ev,'mobile')}/>
                </li>
                <li className="list-group-item">
                    <input type="button" value="确定" onClick={this.FormSubmit.bind(this)}/>
                </li>

            </ul>
        </div>;
    }

}

const provider = provide(
    (state:ApplicationState) => {
        return state.users;
    }, // Select which part of global state maps to this component
    UsersState.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type UserProps = typeof provider.allProps;

export default provider.connect(View);

