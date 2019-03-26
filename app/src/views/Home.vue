<template>
    <div class="container">
        <h1>My Todos</h1>
        <!-- section: get new todo -->
        <div class="row newtodo">
            <input  class="col-sm-9"
                    type="text"
                    placeholder="+add New Task"
                    v-model="newTodo"
                    @keyup.enter="addNewTodo({title:newTodo,color:selectedcolor});newTodo=''">

                    <div class="colors col-sm-3">
                    <input v-model="color" id="orange" type="radio" name="category" value="orange" v-on:click="selectedcolor='orange'" checked="checked">
                    <label for="orange" checked> </label>

                    <input v-model="color" id="red" type="radio" name="category" value="red" v-on:click="selectedcolor='red'">
                    <label for="red"> </label>

                    <input v-model="color" id="blue" type="radio" name="category" value="purple" v-on:click="selectedcolor='blue'"> 
                     <label for="blue"> </label>

                    <input v-model="color" id="green" type="radio" name="category" value="green" v-on:click="selectedcolor='green'"> 
                    <label for="green"> </label>
                    </div>
        </div>

        <!-- section: display incompleted todos -->
        <TodoItem v-for = "todo in todos"
                    :id = "todo.id"
                    :title = "todo.title"
                    :date = "todo.date"
                    :color = "todo.color"
                    :key = "todo.id"
                    :completed = "todo.completed"
                    > </TodoItem>

         <!-- section: display completed todos -->
         <h1> Done </h1>
         <TodoItem  class="completed"
                    v-for = "todo in completedtodos"
                    :id = "todo.id"
                    :title = "todo.title"
                    :date = "todo.date"
                    :color = "todo.color"
                    :key = "todo.id"
                    :completed = "todo.completed"
                    > </TodoItem>
        
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Todo} from "../data/todo";
    import TodoItem from "../components/TodoItem"; // @ is an alias to /src


    @Component({
        components: {
            TodoItem
        },
    })
    export default class Home extends Vue {
        selectedcolor='orange';
        newTodo = ''

        private initialTodos: Array<Todo> = [
            {
                "id":1553457135339,
                "title": "Grocery shopping",
                "date": "20/08/2018",
                "color": "orange",
                "completed":false,
            },
            {   
                "id": 1553457135340,
                "title": "Go to the beach",
                "date": "11/08/2018",
                "color": "blue",
                "completed":false,
            },
            {
                "id": 1553457135341,
                "title": "Call grandma",
                "date": "01/09/2018",
                "color": "green",
                "completed":false,
            }
        ];


        created() {
            // push list of existing todos to the store
            this.$store.dispatch("dispatchAddInitialTodos", this.initialTodos)
            this.initialTodos = []
        }

        get todos() {
            // get data from the store and display a todo item for each todo in the store
            return this.$store.getters.todos
        }

        get completedtodos(){
            // get data from the store and display the completed todos 
            return this.$store.getters.completedTodos
        }

        addNewTodo(newTodo) {
            // add a new todo to the store
            this.$store.dispatch('dispatchAddNewTodo', newTodo)         
        }
    }
</script>

<style scoped>
    .container {
        width: 70%;
    }

    .newtodo {
        display:flex;
        justify-content: space-between;        
        background-color: rgb(245, 245, 245);
        border-radius: 1em;
        padding:0.5em;
        margin: 2em 1em 2em 1em;
    }

    .colors {
        padding: 0px 0px 0px 5em;
    }

    .newtodo input[type="radio"] {
        display: none;
    }

    .newtodo label {
        display: inline-block;
        margin: 2px;
        padding: 13px; 
        border-radius: 20px;
    }

    .newtodo label:hover {
        box-shadow: 3px 3px 10px 1px #777;
    }

    label[for=orange]{
        background-color: orange;
    }

    label[for=green]{
        background-color: green;
    }

    label[for=blue]{
        background-color: blue;
    }

    label[for=red]{
        background-color: red;
    }


    /* style changed when checked */
    .newtodo input[type="radio"]:checked + label{
        box-shadow:none;
        border-radius: 4px;
    }
    /* style changed when default  */
    .newtodo input[type="radio"]:default + label:after{
        box-shadow:none;
        border-radius: 4px;
    }

    input {
        width: 100%;
        background: transparent;
        border: transparent
    }

    input:focus{
        outline: none;
        
    }

    
</style>