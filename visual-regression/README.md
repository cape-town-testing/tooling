Dependencies:
Node 9.4.0 (developed and tested on this version) [https://nodejs.org/en/download/]

Imagemagick (required syste) [https://www.imagemagick.org/script/download.php]

Yarn (optional) [https://yarnpkg.com/en/docs/install]

Mac installation:

```
$ brew install yarn
$ brew install watchman
$ brew install imagemagick
```

Running the development server:

```
$ npm start
=> http://localhost:3000
```

or

```
$ yarn start
=> http://localhost:3000
```

Running test suite:

```
$ npm build && npm test
```

or

```
$ yarn build && yarn test
```

Runnint tests in watch mode:

```
$ npm test -- --watchAll
```

or

```
$ yarn test -- --watchAll
```

    "build": "NODE_ENV='production' webpack -p",
    "start": "webpack-dev-server",
    "test": "jest"
