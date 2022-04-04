This is a reproduction repo of an error "Cannot read properties of undefined (reading 'call')", when using Mudule federation plugin

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
 - open browser console, an error `Cannot read properties of undefined (reading 'call')` shows up and webpack build script is not executing. The text should be different from `initialContent`.