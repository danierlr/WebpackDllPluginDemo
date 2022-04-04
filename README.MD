This is a reproduction repo of an error "Cannot read properties of undefined (reading 'call')", when using Module federation plugin.

Question on Stack Overflow: https://stackoverflow.com/questions/71738820/webpack-module-federation-error-cannot-read-properties-of-undefined-reading-c

# Requirements

node 14.13.1+ (below may still work)

# How to run
 - cd into libApp folder
 - run `npm install`
 - run `npm run build`
 - cd into hostApp folder
 - run `npm install`
 - run `npm run build`
 - run `npm run start`
 - open `http://localhost:3000/` in the browser
 - open browser console, an error `Cannot read properties of undefined (reading 'call')` shows up and the bundled script is not executing. The text should be different from `initialContent`.