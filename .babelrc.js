const isProd = String(process.env.NODE_ENV) === "production"
const isTest = String(process.env.NODE_ENV) === "test"
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            { modules: isTest ? "commonjs": false
            }
        ],
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/proposal-object-rest-spread",
        [
            "@babel/plugin-transform-runtime",
            {
                regenerator: true,
            },
        ],
    ]
}