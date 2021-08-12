# Pokemeam

This project is a single page web application to build a pokemon team. It is hosted [here](https://dgm8yqn43tl0n.cloudfront.net) for demonstration purposes.

## Frameworks / Tools

- React.js
- Redux
- Reselect
- Styled-component
- Typescript
- ESlint

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run lint`

Runs linting and prettier checks. If you want to auto-fix the errors, run `npm run lint:fix`.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Considerations / Improvements

- Due to the time constrain, the CSS rules are not in the cleanest state. It could be improved by having a centralised theme object and get common values from it, e.g the pokemon blue colour.
- Responsiveness can be improved. The app is functional on mobile view but not very beautiful/user friendly.
- Use Reselect library to cache the selector return values so they don't need to run again if the parameters are not changed. This is important to the performance when dealing with a large data set.
- Unit tests should be added to prevent regression
