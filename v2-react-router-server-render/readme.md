#v2 Add react-router to server and client render  
##Use  
- React  
- koa  
- Webpack  
- React-Router (new)  
  
  
#EXEC  
```  
webpack  
webpack --config webpack.server.config
node dist/server.bundle.js
```  

##npm script  

```  
"scripts": {
  "start": "webpack && webpack --config webpack.server.config && node dist/server.bundle.js"
}
```  
   
   
   
#babel react  

##Let babel know react  
  
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
  
##1.
```
node dist/server.bundle.js /usr/TrainingProject/dist/server.bundle.js:82
	var _marked = [authFail, begin].map(regeneratorRuntime.mark);
	                                    ^
ReferenceError: regeneratorRuntime is not defined
```  
  
  
##Fix  
###Add this in babelrc
```
"plugins": ["babel-plugin-transform-runtime"]
```  
  
##2.  
```  
 TypeError: Cannot set property 'body' of undefined  
```
  
##Fix  
###after
```
function sendRenderResult(html) {
	this.body = `<!doctype html><html><body>...`
}
function* serverRenderWithRouterMiddwware(next) {
	yield next
	match({
		routes: routes,
		location: this.request.url,
	}, (error, redirectLocatin, renderProps) => {
		sendRenderResult(renderHtml(renderProps))
	})
}
```  
  
###before
```
function sendRenderResult(html) {
	return `<!doctype html><html><body>...`
}

function* serverRenderWithRouterMiddwware(next) {
	yield next
	match({
		routes: routes,
		location: this.request.url,
	}, (error, redirectLocatin, renderProps) => {
		this.body = sendRenderResult(renderHtml(renderProps))
	})
}
```