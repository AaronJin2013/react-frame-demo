var React = require('react');
var react_dom_1 = require('react-dom');
var Hello_tsx_1 = require("./src/components/Hello.tsx");
console.log('start again123');
react_dom_1.render(React.createElement(Hello_tsx_1.HelloComponent, {"compiler": "TypeScript", "framework": "React"}), document.getElementById("root"));
