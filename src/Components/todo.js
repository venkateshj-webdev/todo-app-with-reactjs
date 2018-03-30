import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todolist: []
        }
    }

    dataSubmit = (event) => {
        event.preventDefault();
        let getInput = event.target.querySelector("input").value;
        if(getInput != "") {
        let addData = this.state.todolist.push(getInput);
        this.setState({
            addData
        });
        } else {
            alert("Please Enter Your Task And Hit Enter");
        }
    }

    deleteHandler = (myVal,i) => {
        console.log(i);
        let todos = this.state.todolist;
        todos.splice(i,1);
        this.setState({
            todolist: todos
        })
       
    }

   
    render() {
        return(
            <div className="todo-app">
                <h1>{this.props.title}</h1>
                <form className="form" onSubmit={this.dataSubmit.bind(this)}>
                    <input type="text"/>
                    <button type="submit">+ ADD</button>
                </form>
                <ul className="list-ul">
                {this.state.todolist.map((myVal,i) => {
                   return(
                   <li key={i}><span> {myVal}</span> <button id="btn" onClick={this.deleteHandler.bind(this,myVal,i)}>X</button></li>
                   ) 
                })}     
                </ul>
            </div>
        );
    }
}
export default Todo;