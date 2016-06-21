import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../../redux/store';
import * as UsersState from '../../redux/store/user';
import { Link } from 'react-router';


interface RouteParams {
}
class View extends React.Component<any, void> {

    componentWillMount() {
        this.props.userList();
    }
    FormSubmit(UUID) {
                this.props.userDelete(
                    UUID,
                    ()=>this.props.userList()
                );
        console.log(UUID);
    }

    public render() {
        const {users} = this.props;
        return <div>
            <h1 className="b">
                User in views
            </h1>
            <ul className="list-group">

                {this.props.users.map(user =>
                <li key={ user.UUID } className="list-group-item">
                    <Link to={ '/user/'+ user.UUID } activeClassName='active'>
                        { user.name }
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={ '/user/'+ user.UUID+'/edit' } activeClassName='active'>
                        修改
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;"  onClick={this.FormSubmit.bind(this,user.UUID)}>
                        删除
                    </a>
                </li>
                    )}

            </ul>
            <Link to={ '/user/add'}>
               添加
            </Link>
        </div>;
    }

}

const provider = provide(
    (state:ApplicationState) => {
        return state.users;
    }, // Select which part of global state maps to this component
    UsersState.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type UsersProps = typeof provider.allProps;
export default provider.connect(View);

