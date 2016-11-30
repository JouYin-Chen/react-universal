#v1 Static html and react  
##Use  
- React  
- koa  
- Webpack    
  
  
#EXEC  
```  
webpack-dev-server --progress --hot --inline  
babel-node ./app/app.js  
```  
  
  
#babel react  
You get babel-node by installing babel-cli  
  
##Install  
```  
npm install -g babel-cli  
```  

let babel know react  
  
###create new file :  
```
.babelre  
```  

###write down about:  
```
{
	"presets": [
		'es2015', 'react',
	],
	"pluging":[]
}  
```  
  
  
#ERROR  
``` 
SyntaxError: Unexpected token <
```  
  
##Fix  
```   
Add koa-router
```  