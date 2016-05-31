import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { provide } from 'redux-typed';
import { ApplicationState }  from '../../redux/store';
import * as UsersState from '../../redux/store/user'

interface RouteParams {
}
class View extends React.Component<UsersProps, void> {

    componentWillMount() {
        this.props.userList();
    }


    public render() {
        return <h1 className="b">
            User in views
        </h1>;
    }
}
const provider = provide(
    (state: ApplicationState) => {
        return state.users;
    }, // Select which part of global state maps to this component
    UsersState.actionCreators                 // Select which action creators should be exposed to this component
).withExternalProps<{ params: RouteParams }>();          // Also include a 'params' property on WeatherForecastProps
type UsersProps = typeof provider.allProps;
export default provider.connect(View);

