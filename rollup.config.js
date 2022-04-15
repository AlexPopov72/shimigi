import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'main.main.js',
        format: 'esm'
    },
    plugins: [
        scss({
            output: "style/style.css",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};