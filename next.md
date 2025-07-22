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


the features that i need to learn: 

1. styling
2. optimizations: how to optimize links, fonts, images
3. routing: how to create nested layouts and pages uisng file-system routing.
4. data fetching: how to set up a postgres database on vercel, best practices for fetching and steaming.
5. search and pagination: how to implement search and pagination using URL search params.
6. mutating data **
7. error handling
8. form validation and accessibility
9. authentication using NextAuth.js
10. Metadata: add metadata and social sharing

cmd:
```
json-server --watch --port 4000 ./_data/db.json
```