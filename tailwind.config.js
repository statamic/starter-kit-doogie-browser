export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        boxShadow: {
            DEFAULT: '0 20px 0px -10px black',
            none: 'none',
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#ffffff',
            aqua: '#20d2ff',
            'aqua-light': '#7cdcf5',
            blue: '#0030ff',
            red: '#bf0000',
            gray: '#eeeeee',
        },
        fontFamily: {
            mono: [
                'ibm_vga8',
                'monospaced'
            ],
        },
        fontSize: {
            base: '1.35rem',
            lg: '1.55rem',
            xl: '2rem',
        },
    },
};
