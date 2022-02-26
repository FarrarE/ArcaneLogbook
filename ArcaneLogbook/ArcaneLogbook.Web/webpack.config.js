const path = require("path");

module.exports = {
    mode: "development",
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/Components/'),
        }
    },
    entry: {
        home: "./src/Containers/Home/index.js",
        about: "./src/Containers/About/index.js",
        contact: "./src/Containers/Contact/index.js",
        campaigns: "./src/Containers/Campaigns/index.js",
        campaign: "./src/Containers/Campaign/index.js",
        arena: "./src/Containers/Arena/index.js",
        characters: "./src/Containers/Characters/index.js",
        characterProfile: "./src/Containers/CharacterProfile/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/ //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}