const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app'); // Your app entry point
const { expect } = chai;

chai.use(chaiHttp);

describe('Task Management API Tests', () => {
  it('should fetch all tasks', (done) => {
    chai
      .request(server)
      .get('/api/v1/getAllTask')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should create a task', (done) => {
    chai
      .request(server)
      .post('/api/v1/createTask')
      .send({ title: 'Test Task', description: 'Testing', status: 'pending' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.message).to.equal('Task created successfully');
        done();
      });
  });
});
