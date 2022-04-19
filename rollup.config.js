import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'main.main.js',
        format: 'esm'
    },
    plugins: [
        scss({
            output: "style/style.sass",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};