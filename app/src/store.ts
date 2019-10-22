import Vue from 'vue'
import Vuex from 'vuex'
import {Todo} from "./data/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    commitNewTodo: (state, payload: Todo) => {
      // TODO: add a new todo
    }
  },
  actions: {
    dispatchAddNewTodo: (context, payload: Todo) => {
      // TODO: commit payload to the store
    },
    dispatchAddInitialTodos: (context, payload: Array<Todo>) => {
      // TODO: commit initial todos to the store
    }
  }
})
