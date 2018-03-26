import React from 'react';
import { render } from 'react-dom';
import Todo from './todo';

class App extends React.Component {
    render() {
        return (
            <Todo />
        )
    }
}

render(<App/>, document.getElementById('app'));

























// import React from 'react';
// import { render } from 'react-dom';
// import List from './list';

// function App() {
//     return (
//         <List data='data passedss'/>
//     );
// }

// render(<App/>, document.getElementById('app'));
