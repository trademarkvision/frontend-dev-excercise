import Vue from 'vue'
import Vuex from 'vuex'
import {Todo} from "./data/todo";

Vue.use(Vuex);

export interface Store {
  todos: Todo[]
}

export default new Vuex.Store<Store>({
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
