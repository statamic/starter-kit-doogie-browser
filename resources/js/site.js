import Vue from 'vue'
import LinkToolbar from './LinkToolbar'
import KeyboardLink from './KeyboardLink'
import Keypress from 'vue-keypress'

Vue.component('keypress', Keypress);

var app = new Vue({
    el: '#site',
    components: {
        'link-toolbar': LinkToolbar,
        'keyboard-link': KeyboardLink
    },
})
