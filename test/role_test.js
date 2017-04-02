const assert = require('assert');
const request = require('supertest');
const app = require('../app');

function postRequest(name, description) {
  return request(app).post('/roles').send({ name, description });
}

describe('In the role controller', () => {
  beforeEach((done) => {
    request(app).delete('/roles').end(done);
  });

  it('POST /roles responds with a 201 and the created role on success', (done) => {
    postRequest('admin', 'They administrate')
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(/"name":\s*"admin"/)
      .expect(/"description":\s*"They administrate"/, done);
  });

  it('GET /roles responds with a 200 on success', () =>
    postRequest('admin', 'Running the show').expect(201)
      .then(() => postRequest('founder', 'Starting it up').expect(201))
      .then(() => postRequest('case manager', 'Helping').expect(201))
      .then(() => postRequest('volunteer', 'Donating the time').expect(201))
      .then(() => request(app).get('/roles').expect(200))
      .then((res) => {
        assert.equal(res.body.length, 4);
        assert.deepEqual(res.body[0], { name: 'admin', description: 'Running the show' });
        assert.deepEqual(res.body[1], { name: 'case manager', description: 'Helping' });
        assert.deepEqual(res.body[2], { name: 'founder', description: 'Starting it up' });
        assert.deepEqual(res.body[3], { name: 'volunteer', description: 'Donating the time' });
      }) // eslint-disable-line comma-dangle
    );
});
