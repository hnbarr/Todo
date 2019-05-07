'use strict';

let todoList = {
    todos: [],
    displayTodos: function(){
        if(this.todos.length === 0){
            console.log('no todos!')
        } else {
            console.log('My Todos: ')
            for(let i = 0; i < this.todos.length; i++){
                if(this.todos[i].completed === true){
                    console.log('( x )',  this.todos[i])
                } else {
                    console.log('(   )', this.todos[i])
                }
            }
        }
    },
    addTodo: function(task) {
        this.todos.push({
            todoText: task,
            completed: false
        });
        this.displayTodos()
    },
    changeTodo: function(i, task){
        this.todos[i].todoText = task
        this.displayTodos()
    },
    deleteTodo: function(i){
        this.todos.splice(i, 1)
        this.displayTodos()
    },
    toggleCompleted: function(i) {
        let todo = this.todos[i]
        todo.completed = !todo.completed
        this.displayTodos()
    },
    toggleAll: function(){
        let totalTodos = this.todos.length
        let completedTodos= 0;
        for(let i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++
            }
        }
        if(completedTodos === totalTodos){
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = false
            }
        } else {
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = true
            }
        }
        this.displayTodos()
    }
};