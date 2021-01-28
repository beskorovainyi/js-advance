const expect = require('chai').expect
const sinon = require('sinon')
const request = require('request')
const getUser = require('./script')

describe('getUserById',() => {

  before(() => {
    sinon
      .stub(request, 'get')
      .yields(null, null, JSON.stringify({id:1, title: 'todo'}))
  })

  it('should return 1', (done) => {
    getUser.getUserById(1)
      .then((result) => {
        expect(result.id).to.equal(1);
        done();
      })
      .catch((err) => {
        done(err)
      })
  });

    it('should return todo', (done) => {
    getUser.getUserById(1)
      .then((result) => {
        expect(result.title).to.equal('todo');
        done();
      })
      .catch((err) => {
        done(err)
      })
  });

})
