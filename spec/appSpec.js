var request = require('supertest');
var app = require('../app.js');
var config = require('../config/config');

describe('the server application', function () {
  var port;

  beforeEach(function () {
    port = app.get('port');
  });

  it('should set a port', function () {
    expect(port).toBe(process.env.PORT || config.port || 3000);
  });

  it('should define a "/" route and return a 200 OK status', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function (err, res) {
        expect(err).toBeFalsy();
        done();
      })
    ;
  });
});
