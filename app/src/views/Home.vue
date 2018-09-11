<template>
    <div class="home">
        <h1>My Todos</h1>
        <!-- TODO: Loop thru every todo and display a todo item component, using props to pass data to the components -->

        <!-- TODO: Create a new todo input -->
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

        private initialTodos: Array<Todo> = [
            {
                "title": "Grocery shopping",
                "date": "20/08/2018",
                "color": "orange"
            },
            {
                "title": "Go to the beach",
                "date": "11/08/2018",
                "color": "blue"
            },
            {
                "title": "Call grandma",
                "date": "01/09/2018",
                "color": "green"
            }
        ];

        created() {
            // TODO: push list of existing todos to the store
        }

        get todos() {
            // TODO: get data from the store and display a todo item for each todo in the store
        }

        addNewTodo() {
            // TODO: add a new todo to the store
        }

    }
</script>
