import * as React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { HelloComponent } from "./src/components/Hello.tsx";

console.log('start again123');


render(
    <HelloComponent compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);
