var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function(){

  var id = 0;

  // get all lions
  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      })
  });

  // create 1 lion
  it('should create 1 lion', function(done) {
    var lion = {
      name: 'Aaron',
      pride: 'Moradi',
      age: 32,
      gender: 'male'
    };

    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp) {
        var aaron = resp.body;

        expect(aaron).to.be.an('object');
        expect(aaron.name).to.eql('Aaron');
        //expect(aaron.age).to.eql(32);
        done();
      })
  });

  // get 1 lion
  it('should get 1 lion', function(done) {
    request(app)
      .get('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        expect(resp.body.id).to.equal("1");
        done();
      })
  });

  // update 1 lion
  it('should update 1 lion', function(done) {
    request(app)
      .put('/lions/1')
      .send({name: "Cameron"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        expect(resp.body.name).to.equal('Cameron');
        done();
      })
  });

  // delete 1 lion
  it('should delete 1 lion', function(done) {
    request(app)
      .delete('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('object');
        expect(resp.body.name).to.equal('Cameron');
        done();
      })
  });


});


