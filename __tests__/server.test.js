'use strict';

const supertest = require('supertest');

// What's up with the {}????
const server = require('../server');

const mockClient = supertest(server);



describe('The Server', () => {
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
    })
    .catch(console.error);
  });
  
});