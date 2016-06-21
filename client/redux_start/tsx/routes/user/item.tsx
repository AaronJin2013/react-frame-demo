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
    id:string;
}
class View extends React.Component<any, any> {
    state:UserModel.Interface;

    handleChange(event, obj) {
        this.state[obj] = event.target.value;
        this.setState(this.state);
    }

    FormSubmit() {
        switch (this.props.route.routerProps.action) {
            case 'add':

                this.props.userAdd(
                    this.state,
                    ()=>this.props.history.push('/user')
                );
                break;
            case 'edit':

                this.props.userEdit(
                    this.props.params.id,
                    this.state,
                    ()=>this.props.history.push('/user')
                );
                break;
            default:

        }
    }

    constructor(props) {
        super(props);
        this.state = UserModel.Model;


        //如果没有在onChange里使用绑定,这边是需要做一下手工绑定的
        //this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {

        switch (this.props.route.routerProps.action) {
            case 'item':
            case 'edit':
                this.props.userItem(
                    this.props.params.id,
                    ()=> {
                        this.state = this.props.user;
                        this.setState(this.state);
                    }
                );
                break;
            case 'add':
                break;
            default:

        }
    }

    renderItem(item, title, column) {
        switch (this.props.route.routerProps.action) {
            case 'item':
                return<li className="list-group-item">
                    {item}
                </li>;
            case 'add':
            case 'edit':
                return<li className="list-group-item">
                    {title}:
                    <input type="text" value={item} onChange={(ev)=>this.handleChange(ev,column)}/>
                </li>;
            default:

        }
    }

    public render() {
        const user = this.state;
        return <div>
            <h1 className="b">
                User in views
            </h1>
            {
                (()=>{
                    switch (this.props.route.routerProps.action) {
                        case 'item':
                            return<ul className="list-group">
                                {this.renderItem(user.UUID,'UUID','UUID')}
                                {this.renderItem(user.name,'部门名','name')}
                                {this.renderItem(user.department,'手机号','department')}
                                {this.renderItem(user.mobile,'手机号','mobile')}

                            </ul>;
                        case 'edit':
                        case 'add':
                            return<ul className="list-group">
                                {this.renderItem(user.name,'部门名','name')}
                                {this.renderItem(user.department,'手机号','department')}
                                {this.renderItem(user.mobile,'手机号','mobile')}
                                <li className="list-group-item">
                                    <input type="button" value="确定" onClick={this.FormSubmit.bind(this)}/>
                                </li>
                            </ul>;
                        default:
                        }
                    })()
                }
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

