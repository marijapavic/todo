import {makeObservable, observable, action, computed} from "mobx"
import {v4 as uuid} from "uuid"

export class Store{
    todos = []
    constructor(){
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            deleteTodo: action,
            remainingTodos: computed,
            totalTodos: computed
        })
    }

    addTodo= task => {
        const todo = {
            id: uuid(),
            task,
            completed: false
        }
        this.todos.push(todo)
    }

    toggleTodo = id => {
        const index = this.todos.findIndex(todo => todo.id === id)
        if(index > -1){
            this.todos[index].completed = !this.todos[index].completed
        }
    }

    deleteTodo = id => {
        const index = this.todos.findIndex(todo => todo.id === id)
        this.todos.splice(index, 1)
    }

    get remainingTodos(){
        return this.todos.filter(todo => !todo.completed).length
    }

    get totalTodos(){
        return this.todos.length
    }
}

export const TodoStore = new Store()