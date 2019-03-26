<template>
    <div class="row todo">
        <div class="col-md-9"><p class="title"> {{title}}</p></div>
        <div class="col-md-2"><p class="date">{{date}}</p></div>
        <div class="col-md-1">
            <label class="customcheck">
                <input type="checkbox" 
                       class="btn"
                       @click="complete(id)"> 
                <span class="checkmark" :style='{backgroundColor: color}'></span>
            </label>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: ['id','title','date','color','completed']
    })
    export default class TodoItem extends Vue {
        //method
        complete(id:Number) {
            this.$store.dispatch('dispatchcompletedTodo', id)
        }
    }
</script>


<style scoped>
    h3 {
        margin: 1rem;
    }
    
    p {
        margin: 10px;
    }

    .date{
        color:grey;
        font-size:1.5vw;
    }

    .title{
        font-size: 2vw;
    }

    .todo {    
        background-color:#EAEAEA;
        border-radius: 0.5em;
        padding:0.1em;
        margin: 1em;
    }

    .todo.completed{
        opacity: 0.7;
    }

    .customcheck {
        display: block;
        position: relative;
        cursor: pointer;
        background-color: red;
    }

    .customcheck input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .checkmark{
        position: absolute;
        top: 0.7em;
        left: 0; 
        height: 1.8em; 
        width: 1.8em;
        background-color: red;
        border-radius: 5px;
    }

    .customcheck input:checked ~ .checkmark {
        background-color:green;
        border-radius: 5px;
    }

    /* hidden when not checked */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* show when checked */
    .customcheck input:checked ~ .checkmark:after {
        display: block;
    }

    /* indicator */
    .customcheck .checkmark:after {
        left: 9px;
        top: 5px;
        width: 8px;
        height: 12px;
        border: solid white;
        border-width: 0 2.5px 2.5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
}
    

   


</style>
