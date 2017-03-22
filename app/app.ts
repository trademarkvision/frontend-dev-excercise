
import {MainComponent} from "./main/main";
declare var require: any;

import Vue = require('vue');

new Vue(<any>{
    el: '#app',
    components: {MainComponent},
    render: h => h('main-component')
});