const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //checking out the error
    devtool:'inline-source-map',

    //working with loaders
    module:{
        rules:[
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude:  {
                    and: [], // Exclude libraries in node_modules ...
                    not: [
                      // Except for a few of them that needs to be transpiled because they use modern syntax
                      /unfetch/,
                      /d3-array|d3-scale/,
                      /@hapi[\\/]joi-date/,
                    ]
                  },
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
            }
        ],

     },
};