# Next.js

Next.js creates fast, search engine optimized react app with 0 configuration. Traditional react app is rendered client side. in react app, we have a shell of html page that lacks rendered content. browser fetches contents from the js file. but it has two drawbacks. 
1. the contents are not reliably indexed by all search engines.
2. slower // will see later 
seo + performance

react library. 
library is concerned about one specific thing. like user interface. but an app is not only about user interface. it has many other things to do. like data fetch, routing, caching, font & image optmization, client-server side rendering, seo. full stack app can be built fromt this. 
preview

from server, index.html will come.google bot or other search engine will see only the html file. it will see that it has only div, nothing inside. 

`FCP`: first contentful paint. 
time to interact

server simulates the browser, runs the full application, sees how the html css are.

command: nest new "project name"