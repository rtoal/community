const app = require('../app');
const request = require('supertest');

describe('POST /roles', () => {
  it('responds with a 201 the created role on success', (done) => {
    const name = 'admin';
    const description = 'They administrate';
    request(app)
      .post('/roles')
      .send({ name, description })
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(/"name":\s*"admin"/)
      .expect(/"description":\s*"They administrate"/, done);
  });
});
