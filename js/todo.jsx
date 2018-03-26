import React from 'react';
import AddToDo from './addTodo';
//import ToDoList from './toDoList';


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            value: 'gg',
            toDoList: [{
                text: 'Learn react',
                isCompleted: false
            }]
        }
    changeValue=this.changeValue.bind(this);
    }
    changeValue(value) {
        this.setState({
            value: value
        })
    }
    render() {
        return (
            <div>
                <AddToDo value={this.state.value} changeValue={this.changeValue} />
                 
                <p>Hi from component</p>
            </div>
        )
    }
}

export default Todo;