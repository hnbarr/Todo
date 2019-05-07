'use strict';

let show = document.getElementById('showBtn')
let toggle = document.getElementById('togBtn')

let todoList = {
    todos: [],
    addTodo: function(todo) {
        this.todos.push({
            todo: todo,
            completed: false
        });
    },
    changeTodo: function(i, todo){
        this.todos[i].todo = todo
    },
    deleteTodo: function(i){
        this.todos.splice(i, 1)
    },
    toggleCompleted: function(i) {
        let todo = this.todos[i]
        todo.completed = !todo.completed
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
    }
};

let handlers = {
    addTodo: function(){
        let addInput = document.getElementById('inputBox')
        todoList.addTodo(addInput.value)
        addInput.value = ''
        view.displayTodos()
    },
    changeTodo: function(){
        let changePos = document.getElementById('changeIndex')
        let changeValue = document.getElementById('changeValue')
        todoList.changeTodo(changePos.valueAsNumber, changeValue.value)
        changePos.value = ''
        changeValue.value = ''
        view.displayTodos()
    },
    deleteTodo: function() {
        let deleteVal = document.getElementById('deleteIndex')
        todoList.deleteTodo(deleteVal.valueAsNumber)
        deleteVal.value = ''
        view.displayTodos()
    },
    toggleComplete: function() {
        let toggleCom = document.getElementById('toggle')
        todoList.toggleCompleted(toggleCom.valueAsNumber)
        toggleCom.value = ''
        view.displayTodos()
    },
    toggleAll: function() {
        todoList.toggleAll()
        view.displayTodos()
    }
}

let view = {
    displayTodos: function() {
        let listRoot = document.querySelector('ul')
        listRoot.innerHTML = ''
        for(let i = 0; i < todoList.todos.length; i++){
            let todoLi = document.createElement('li')
            let todo = todoList.todos[i]
            let todoTextWithCompletion = ''
            
            if(todo.completed === true){
                todoTextWithCompletion = '( x )' + todo.todo
            }else {
                todoTextWithCompletion = '(   )' + todo.todo
            }
            todoLi.textContent = todoTextWithCompletion
            listRoot.appendChild(todoLi)
        }
    }
}