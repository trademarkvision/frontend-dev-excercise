<template>
    <div>

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    props: {
      // TODO: use props to pass data from the home page to each individual todo
    }
  })
  export default class TodoItem extends Vue {
  }
</script>

<style lang="scss" scoped>
    h3 {
        margin: 1rem;
    }
</style>
