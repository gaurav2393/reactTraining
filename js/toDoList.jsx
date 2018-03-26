import React from 'react';

class ToDoList extends React.Component {
    render(){
        return (
            <p onClick={()=>this.props.changeText('gaurav')}>{this.props.listItems}</p>
        )
    }
}

export default ToDoList;