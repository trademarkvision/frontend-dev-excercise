import * as Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';

import './main.scss';

declare var require;

@Component({
    name: 'main-component',
    template: require('./main.html'),
})
export class MainComponent extends Vue {

    private helloString: string = "Hello";

    mounted() {

        // I will be executed when the component is mounted

    }

}