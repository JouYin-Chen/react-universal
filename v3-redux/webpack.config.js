
module.exports = {
  entry: [
  	'./client/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: "bundle.js.map"
  },
  module: {
    loaders: [
      {
        // 只針對js與jsx檔案
        test: /\.jsx?$/,
        // 只包含`client`目錄
        include: [
          __dirname + "/modules",
          __dirname + "/client",
          __dirname + "/client/*",
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }]
  }
}

// var path = require('path');
// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// // var values = require('postcss-modules-values');

// const postcssImport = require('postcss-import');
// const cssnext = require('postcss-cssnext');

// module.exports = {
//     entry: [
//     	'./client/index.js',
//     ],
//     output: {
//       path: path.join(__dirname, '/dist'),
//       filename: 'bundle.js',
//       publicPath: '/dist/',
//       sourceMapFilename: "bundle.js.map"
//     },
//     resolve: {
//       extensions: ['', '.js', '.jsx']
//     },
//     module: {
//   		preLoaders: [
//   			{
//   				test: /\.js|jsx$/,
//           loader: ['eslint'],
//           include: path.join(__dirname, '/app'),
//           exclude: /bundle\.js$/,
//   			},
//   		],
//       loaders: [
//       	{
//           test: /\.js|jsx$/,
//           loader: 'babel',
//           exclude: /node_modules/,
//           query:
//           {
//             // plugins: ['transform-decorators-legacy' ],
//             presets:['es2015','es2016', 'react', 'stage-0'],
//            // compact: false,
//           }
//       	},
//       	{
// 	        test: /\.css$/,
// 	        //loader: "style-loader!css-loader?modules"//!postcss-loader"
// 	        loaders: [
// 		        'style?sourceMap',
// 		        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
// 		        'postcss-loader'
// 			    ]
// 	      },
//       ]
//     },
//    //  postcss: [
//    //  	values
//   	// ],
//   	postcss: function () {
// 	    return [
// 	    	postcssImport({ addDependencyTo: webpack }),
// 	      cssnext()
// 	    ];
// 		},
//   	// postcssPlugins: [
//    //      cssnext(),
//    //  ],
//     plugins: [
//         new ExtractTextPlugin('app.css', { allChunks: true }),
//     ],
//     devtool: 'eval-source-map',
// }
// // const webpack = require( 'webpack' )

// // module.exports = {
// //     // entry: {
// //     //     app: ["webpack-hot-middleware/client?reload=1", "main.js" ]
// //     // },
// //     entry: `${__dirname}/app.js`,
// //     output: {
// //         path: __dirname,
// //         publicPath: "/",
// //         filename: "bundle.js"
// //     },
// //     node: {
// //         __dirname: true,
// //         fs: 'empty'
// //     },
// //     module: {
// //         loaders: [
// //             { 
// //                 test: /\.css$/,
// //                 loader: "style!css"
// //             },
// //             {
// //                 test: /\.jsx?$/,
// //                 exclude: /node_modules/,
// //                 loader: 'babel-loader',
// //                 query: {
// //                     'presets': ['es2015','es2016', 'react'],
// //                     'env': {
// //                         'development': {
// //                             'presets': ['react-hmre']
// //                         }
// //                     }
// //                 }
// //             }
// //         ]
// //     },
// //     plugins: [
// //         new webpack.optimize.OccurenceOrderPlugin(),
// //         new webpack.HotModuleReplacementPlugin(),
// //         new webpack.NoErrorsPlugin()
// //     ]
// // };