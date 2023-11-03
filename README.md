
### Build
- `run swift build`
- Make sure webpack is installed before the next step if not run `npm install webpack webpack-cli --save-dev`
- Make sure you run `npm run build` or `npx webpack --mode=development` (both do the same thing) before running the website or packaging for deployment. This builds all the dependencies for the client into the bundle.js file that's hosted and delivered by Vapor
