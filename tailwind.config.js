module.exports = {
    purge: ["./pages/**/*.js", "./components/**/*.js", "./components/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#292626",
            },
            letterSpacing: {
                big: "5px",
            },
            fontSize: {
                xxs: "10px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
