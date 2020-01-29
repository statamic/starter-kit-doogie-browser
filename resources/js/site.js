import Vue from 'vue'
import LinkToolbar from './LinkToolbar'
import KeyboardLink from './KeyboardLink'

var app = new Vue({
    el: '#site',
    components: {
        'link-toolbar': LinkToolbar,
        'keyboard-link': KeyboardLink,
    },
})
