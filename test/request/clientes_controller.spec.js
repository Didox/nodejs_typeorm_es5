const request = require('supertest');
const app = require('../../app');

test('Test http get', async () => {
  const req = await request(app).get('/')
  expect(req.statusCode).toBe(200);
  expect(req.body[0].nome).not.toBe(undefined);
});