module.exports = {
    mode: "jit",
    purge: {
        content: ["./pages/**/*.js"],
        options: {
            display: true,
            gridTemplateColumns: true,
            gridColumn: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                "1/20": "5%",
                "1/10": "10%",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
