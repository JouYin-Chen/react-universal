const fs = require('fs')
const path = require('path')

module.exports = {
	entry: [ `${__dirname}/app/app.js` ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'server.bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: "bundle.js.map"
  },
  //set the output bundle.js to Node.js format
  target: 'node',
  //enable the variables which be used in the source code
  node: {
  	__filename: true,
  	__dirname: true,
  },
  //讀取node_modules資料夾, 以目錄名建立一個node_modules的array
  //手動加入‘react-dom/server’, 'react/addons', 兩個有child package的package
  //以reduce, 初值爲{}
	//每次就將 node_modules array中的 module加上commonjs的prefix, 然後放進object中
	//(array的第一項剛好是./  , 所以可以不管他, reduce 會從第二項開始)
	// keep node_module paths out of the bundle
	externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
		'react-dom/server', 'react/addons', 
	]).reduce(function (ext, mod){
		ext[mod] = 'commonjs ' + mod
		return ext
	}, {}),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          __dirname + "/app",
        	//__dirname + "/client",
        	__dirname + "/modules"
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }]
  },

}