const path = require('path')
module.exports = {

    build: {


        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',

        productionSourceMap: false,


        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],


    }
}