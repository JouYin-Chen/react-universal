#v2 Add react-router to server and client render  
##Use  
- React  
- koa  
- Webpack  
- React-Router (new)  
  
  
##EXEC  
```  
webpack  
webpack --config webpack.server.config
node dist/server.bundle.js
```  

###npm start  
Add this in package.json
```  
"scripts": {
  "start": "webpack && webpack --config webpack.server.config && node dist/server.bundle.js"
}
```  
   
   
   
##babel react  
Let babel know react  
###create：  
```
.babelre  
```
###write down：   
```
{
    "presets": [
		'es2015', 'react',
	],
	"pluging":[]
}  
``` 
  

##ERROR  
  
###1.
```
node dist/server.bundle.js /usr/TrainingProject/dist/server.bundle.js:82
	var _marked = [authFail, begin].map(regeneratorRuntime.mark);
	                                    ^
ReferenceError: regeneratorRuntime is not defined
```  
  
  
###Fix  
Add this in babelrc
```
"plugins": ["babel-plugin-transform-runtime"]
```  
  
###2.  
```  
 TypeError: Cannot set property 'body' of undefined  
```
  
###Fix  
after
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
  
before
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
  

###3  
```
bundle.js:27337 The preloadedState argument passed to createStore has unexpected type of "Object". Expected argument to be an object with the following keys: "auth"
```  
  

###Fix
```
const initialState = {
	auth: {
		isLoginSubmiting: false,
		loginFail: false,
		loginFailMessage: '',
	},
}
```
  

###4
```  
ReferenceError: window is not defined
```  
  

###Fix  
check window exist
```  
const createStoreWithMiddleware = compose(
	applyMiddleware(
  	thunkMiddleware,
  	loggerMiddleware
	),
	typeof window === 'object' && 
	typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f )(createStore)

export default function configureStore(preloadedState) {
  const store = createStoreWithMiddleware(rootReducer, preloadedState)
```  
