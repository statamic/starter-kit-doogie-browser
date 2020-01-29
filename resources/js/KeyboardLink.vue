<template>
    <Keypress :key-code="code" event="keyup" @pressed="openLink(url)" />
</template>


<script>

export default {

    components: {
        Keypress: () => import('vue-keypress')
    },

    props: {
        code: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },

    methods: {
        openLink(url) {
            window.location.href = url;
        }
    },
}
</script>
