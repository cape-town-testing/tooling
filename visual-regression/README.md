## Automated Visual Regression

This is an example of an automated visual regression test pipeline, which was presented at the Cape Town Testing meetup.

# Dependencies needed

Node 9.4.0+ [https://nodejs.org/en/download/]
Imagemagick [https://www.imagemagick.org/script/download.php]

# How to run the test suite

Run the test suite with the following command

```
$ npm test
```

After running test suite, you can review generated images in the `__images__/output` folder.

To accept new images, you must manually copy and rename the image file into the `__images__/baseline` folder. You can also run the following convenience script, and then re-run the tests

```
$ ./update-baseline.sh
$ npm test
```

To reset the baseline test images, you can run the following convenience script

```
$ ./reset-baseline.sh
$ npm test
```

# Running the test app

To view the sample app, run the following command and visit `http://localhost:3000`

```
$ npm start
```
