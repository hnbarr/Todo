'use strict';


let show = document.getElementById('showBtn')
let toggle = document.getElementById('togBtn')

let todoList = {
    todos: [],
    addTodo: function(todo) {
        if(todo !== ''){
          this.todos.push({
            todo: todo,
            completed: false
          });
        }
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
        this.todos.forEach((todo)=>{
            if(todo.completed === true){
                completedTodos++
            }
        })
        this.todos.forEach((todo)=>{
            if(completedTodos === totalTodos){
                todo.completed = false
            } else {
                todo.completed = true
            }
        })
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
    deleteTodo: function(index) {
        todoList.deleteTodo(index)
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
        todoList.todos.forEach((todo, i)=>{
            let todoLi = document.createElement('li')
            let todoTextWithCompletion = ''   
            if(todo.completed === true){
                todoTextWithCompletion = '( x )' + todo.todo
            }else {
                todoTextWithCompletion = '(   )' + todo.todo
            }
            todoLi.id = i
            todoLi.textContent = todoTextWithCompletion
            todoLi.appendChild(this.createDeleteBtn())
            listRoot.appendChild(todoLi)
        })
    },
    createDeleteBtn: function() {
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.className= 'deleteBtn'
        return deleteBtn
    },
    setUpEventListeners: function(){
        let listSection = document.querySelector('ul')
        listSection.addEventListener('click', function(e){
            let clicked = e.target
            if(clicked.className === 'deleteBtn'){
                handlers.deleteTodo(clicked.parentNode.id)
            }
        })
    }
}
view.setUpEventListeners()