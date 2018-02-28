const path = require('path');

module.exports = {
    entry: './src/website-app/main.js',
    output: {
        path: path.join(__dirname, '/src/public/website-app/js'),
        filename: 'website-bundle.js'
    },
    entry: './src/dashboard-app/main.js',
    output: {
        path: path.join(__dirname, '/src/public/dashboard-app/js'),
        filename: 'dashboard-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.vue$/,
                exclude: '/node_modules',
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    }
}

