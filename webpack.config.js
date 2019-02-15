var webpack = require( "webpack" );
var path = require( "path" );

var DIST_DIR = path.resolve( __dirname, "dist" );
var SRC_DIR = path.resolve( __dirname, "src" );

var config = {
mode: "development",
entry: SRC_DIR + "/app/index.js",
output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
},
module: {
    rules: [
        {
            test: /\.js?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: ["@babel/react", "@babel/env"]
            }
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000'
          }
    ]
}
};

module.exports = config;
