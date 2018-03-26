import React from 'react';

// function AddTodo(props) {
//     return(
//         <div>
//             <input value={props.value}/>
//             <button onClick={props.changeValue}>Add</button>
//             <p>{props.value}</p>
//         </div>
//     )
// }

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        changeText=this.changeText.bind(this);
    }
    changeText(event) {
        this.props.changeValue(event.target.value);
    }
    render() {
        return (
            <div>
                <input onChange={this.changeText} value={this.props.value1}/>
                <button onClick={this.props.changeValue}>Add</button>
                <p>{this.props.value}</p>
            </div>
            
        )
    }
}

export default AddTodo;