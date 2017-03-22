var path = require('path');
var utils = require('./utils');

module.exports = {
    entry: {app: './app.ts'},
    output: {filename: './app.js'},
    // resolve TypeScript and Vue file
    resolve: {
        extensions: ['', '.ts', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, './node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
            // 'src': path.resolve(__dirname, '../src'),
            // 'assets': path.resolve(__dirname, '../src/assets'),
            // 'components': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')]
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.ts$/, loader: 'vue-ts'},
            {test: /\.html$/, loader: 'html'}
        ]
            // .concat(utils.styleLoaders({sourceMap: true, extract: true}))
    },
    vue: {
        // instruct vue-loader to load TypeScript
        loaders: utils.cssLoaders({sourceMap: true, extract: true}),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ],
        // make TS' generated code cooperate with vue-loader
        esModule: true
    }
};