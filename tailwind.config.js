module.exports = {
    purge: ["./pages/**/*.js", "./components/**/*.js", "./components/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#292626",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
