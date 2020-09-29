# FreeCodeCamp Quality Assurance Projects - Metric-Imperial Converter

Forked from the [supplied boilerplate repository](https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter) this repo will contain the output of the [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter) challenge project from freeCodeCamp.

> Build a full stack JavaScript app that is functionally similar to this: https://metric-imperial-converter--freecodecamp.repl.co/.

## Instructions

From the original repo:

> 1. Most logic will need done in `controllers/convertHandler.js` but do complete `routes/api.js`
> 1. You will add any security features to `server.js`
> 1. You will create all of the functional/unit tests in `tests/2_functional-tests.js` and `tests/1_unit-tests.js`

## Services

The project depends on a remotely-visible instance of the app to be served, and something like [REPL.it](https://repl.it/) does a good job of that. You'll also need a publicly accessible Mongo database (hosted somewhere like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

## Local Development

You'll need an `.env` file with:

1. `NODE_ENV` set to `test` without quotes for local development.
1. `MONGO_URI`

The rest is pretty straightforward, with `npm` for package management and `nodemon` for development server. Use `npm run dev` for starting up the local server.

## Dependencies

Notable packages and concepts include:

1. [MongoDB](https://www.npmjs.com/package/mongodb)
1. [Chai](https://www.npmjs.com/package/chai) with [HTTP](https://www.npmjs.com/package/chai-http) to assert
1. [Mocha](https://www.npmjs.com/package/mocha) to run tests
1. [Zombie](https://www.npmjs.com/package/zombie) for integration testing
1. [Helmet](https://www.npmjs.com/package/helmet) and [CORS](https://www.npmjs.com/package/cors) for setting appropriate headers
