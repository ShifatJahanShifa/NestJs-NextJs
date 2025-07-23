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

Both server and client components are rendered in the server. but the client components are hydrated in the client/browser to add in any user interactivity whereas server components are not. so, when i need to have local state or user interactivity, then i will have client components. state means the current state of a variable or data. hydrated means, by using "use client", i am telling the next.js that it is a client component. so it needs to be hydrated in the browser with javascript. 
we can nest client component inside server component.

suggestion: try to make server component as many as possible. and then sprinkle in the client components.