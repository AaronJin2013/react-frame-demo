import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link,IndexLink  } from 'react-router';

class GoodsView extends React.Component<any, any> {

    render() {
        return<div>
            <h1 className="b">
                Goods View
            </h1>
            {this.props.children}
        </div>;
    }
};

export function route() {
    return  {
        path: 'goods',
        component:{body:GoodsView}
    };
}