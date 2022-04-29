import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'main.main.js',
        format: 'esm'
    },
    plugins: [
        scss({
            input: 'src/styles',
            output: "style/style.sass",
            failOnError: true,
            runtime: require("sass"),
        }),
    ],
};
