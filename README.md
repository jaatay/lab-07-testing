# lab-07-testing

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

### Author: Jesse Atay

[![Build Status](https://travis-ci.org/jaatay/lab-07-testing.svg?branch=master)](https://travis-ci.org/jaatay/lab-07-testing)
-currently tests pass, but the mock server is not closed, so the travis CI check does not complete. Fix TBD.

### Links and Resources
* [repo](https://github.com/jaatay/lab-07-testing)


### Modules
#### `server.js`
##### express app -> server export


### Setup
#### `.env` requirements
* `PORT` - Local default port

#### Running the app
* `npm start` to start
* `npm run test` to run jest tests

#### Tests
* Tests conducted via node using Jest test package. Branch rule testing build via Travis, linked to repo. All branches required passing build prior to merge into Master branch.

* Assertions

ddescribe('The Server', () => {
  it('responds with a 200 on a good route', () => {
    // Why do we return here?
    return mockClient.get('/A')
      .then( result => {
        expect(result.status).toBe(200);
      })
      .catch(console.error);
  });

  it('responds with a 500 on an error', () => {

    return mockClient.get('/e')
    .then(results => {
      expect(results.status).toBe(500);
    })
    .catch(console.error);
  });

  it('responds with a 404 on an unknown route', () => {

    return mockClient.get('/z')
    .then(results => {
      expect(results.status).toBe(404);
    });

  });
 
});

#### Acknoledgements
vladimirsan - outline and starter code
