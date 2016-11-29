You get babel-node by installing babel-cli  
  
*Install*  
`npm install -g babel-cli`  
  
*EXEC*
`webpack-dev-server --progress --hot --inline
babel-node ./app/app.js`  

*babel react*  
let babel know react  
create new file : .babelre  
write down about:  
`{
	"presets": [
		'es2015', 'react', 'stage-0'
	],
	"pluging":[]
}`
