<template>
    <div class="text-base bg-white text-blue leading-relaxed flex flex-wrap justify-center">
        <a :href="link.url" v-on:keyup. class="px-8 hover:bg-gray" v-for="(link, index) in keyboardLinks" :tabindex="link.index">
            <mark v-text="link.letter" />{{ link.name }}
            <keypress :key-code="link.letter.charCodeAt(0)" event="keyup" @pressed="openLink(link.url)" />
        </a>
    </div>
</template>


<script>
export default {
    props: {
        links: {
            type: String,
            required: true
        },
    },

    data() {
        return {
            keyboardLinks: [],
        }
    },

    methods: {
        openLink(url) {
            window.location.href = url;
        }
    },

    mounted() {
        JSON.parse(this.links).forEach(link => {
            this.keyboardLinks.push({
                letter: link.name.charAt(0),
                name: link.name.substr(1),
                url: link.url
            })
        });
    }

}
</script>
