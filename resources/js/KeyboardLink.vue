<template>
    <keypress :key-code="code" event="keyup" @pressed="openLink(url)" />
</template>


<script>
export default {
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
