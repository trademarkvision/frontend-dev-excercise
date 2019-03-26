import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {Todo} from "@/data/todo"



Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        commitNewTodo: (state, payload: Todo) => {
            // add a new todo
            var value = new Date()
            
            // function to formate Date
            function formateDate(value:Date){
                var month = (value.getMonth() + 1).toString()

                if (month.length == 1){
                  month = "0" + month
                }

                var date = value.getDate().toString()
                if (date.length == 1){
                  date = "0" + date
                }

                var year = value.getFullYear().toString()
                
                var formatedDate = month + '/' + date + '/' + year
              
                return formatedDate
            }

            var idValue = Date.now()

            state.todos.push({
              id: idValue,
              title: String(payload.title),
              date: String(formateDate(value)),
              color: String(payload.color),
              completed: false,
            })
            
        },

        commitInitialTodos: (state, payload: Array<Todo>)=>{
            payload.map( payloaditem => { return state.todos.push(payloaditem)})
        },

        completedTodo: (state, payload:Number) => {
            // payload.completed = !payload.completed
            state.todos.map(todo => {if(todo.id === payload){todo.completed = !todo.completed}})    
        },

        updateTodo: (state, payload:Todo) => {
            state.todos.map(todo => {if(todo.id === payload.id){todo.title = payload.title}})
        },
    },

    
    actions: {
        dispatchAddNewTodo: (context, payload: Todo) => {
            // commit payload to the store
            context.commit('commitNewTodo', payload)
        },
        dispatchAddInitialTodos: (context, payload: Array<Todo>) => {
            // commit initial todos to the store
            context.commit('commitInitialTodos', payload)

        },

        dispatchcompletedTodo: (context, payload: Todo) =>{
            // commite completed todo to the store
            console.log("payload is" + payload)
            context.commit('completedTodo',payload)
        }, 
    },

    getters: {
        todos: state => state.todos.filter((todo) => {return !todo.completed}),
        completedTodos: state => state.todos.filter((todo) => {return todo.completed})
        
    },
})


