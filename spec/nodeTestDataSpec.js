/*globals cookie, it, expect, describe, beforeEach, */
'use strict';
var nodeTestData = require('../dist/tests/node-test-data');

describe('node test data formation', function() {
    it('should be defined', function() {
        expect(nodeTestData).toBeDefined();
    });

    describe('headers', function () {
        it('should contain a cookie object with a test auth code', function () {
            expect(nodeTestData.header).toBeDefined();
            expect(nodeTestData.header.cookie).toBeDefined();
            expect(typeof nodeTestData.header.cookie.auth).toBe('string');
        });
   });

    describe('user.requests', function () {
        it('should have a user object', function () {
            expect(nodeTestData.user).toBeDefined();
        });

        describe('self', function () {
            it('has a create self method', function () {
                var testApi;
                expect(testApi = nodeTestData.user && nodeTestData.user.create).toBeDefined();
                expect(testApi.method).toBe('POST');
                expect(testApi.requestUrl).toBeDefined();
                expect(testApi.statusCode).toBe(200);
                expect(testApi.request).toBeDefined();
                expect(testApi.response).toBeDefined();
            });
            it('has a read self method', function (){
                var testApi;
                expect(testApi = nodeTestData.user && nodeTestData.user.readSelf).toBeDefined();
                expect(testApi.method).toBe('GET');
                expect(testApi.requestUrl).toBeDefined();
                expect(testApi.statusCode).toBe(200);
                expect(testApi.cookies).toBeDefined();
                expect(testApi.request).toBeDefined();
                expect(testApi.response).toBeDefined();

            });
            it('has a update self method.', function () {
                var testApi;
                expect(testApi = nodeTestData.user && nodeTestData.user.update).toBeDefined();
                expect(testApi.method).toBe('PUT');
                expect(testApi.requestUrl).toBeDefined();
                expect(testApi.statusCode).toBe(200);
                expect(testApi.cookies).toBeDefined();
                expect(testApi.request).toBeDefined();
                expect(testApi.response).toBeDefined();
            });
            it('has a delete method', function () {
                var testApi;
                expect(testApi = nodeTestData.user && nodeTestData.user.delete).toBeDefined();
                expect(testApi.method).toBe('DELETE');
                expect(testApi.requestUrl).toBeDefined();
                expect(testApi.statusCode).toBe(204);
                expect(testApi.cookies).toBeDefined();
                expect(testApi.request).toBeNull();
                expect(testApi.response).toBeNull();
            });

        });

        describe('other',function () {

            it('has a read other method', function() {
                var testApi;
                expect(testApi = nodeTestData.user && nodeTestData.user.read).toBeDefined();
                expect(testApi.method).toBe('GET');
                expect(testApi.requestUrl).toBeDefined();
                expect(testApi.statusCode).toBe(200);
                expect(testApi.request).toBeDefined();
                expect(testApi.response).toBeDefined();
            });
        });
    });

    describe('profile.requests', function() {
    it('has a create method', function() {
      expect(nodeTestData.profile.create).toBeDefined();
      expect(nodeTestData.profile.create.requestUrl).toBeDefined();
      expect(nodeTestData.profile.create.method).toBe('POST');
      expect(nodeTestData.profile.create.statusCode).toBe(201);
      expect(nodeTestData.profile.create.response.url).toBeDefined();
    });

    it('has a delete method', function() {
      expect(nodeTestData.profile.delete).toBeDefined();
      expect(nodeTestData.profile.delete.requestUrl).toBeDefined();
      expect(nodeTestData.profile.delete.method).toBe('DELETE');
      expect(nodeTestData.profile.delete.statusCode).toBe(204);
      expect(nodeTestData.profile.delete.request).toBeNull();
      expect(nodeTestData.profile.delete.response).toBeNull();
    });

    it('has a update method', function() {
      expect(nodeTestData.profile.update).toBeDefined();
      expect(nodeTestData.profile.update.requestUrl).toBeDefined();
      expect(nodeTestData.profile.update.method).toBe('PUT');
      expect(nodeTestData.profile.update.statusCode).toBe(200);
      expect(nodeTestData.profile.update.response).toBeDefined();
    });

    it('has a read method', function() {
      expect(nodeTestData.profile.read).toBeDefined();
      expect(nodeTestData.profile.read.requestUrl).toBeDefined();
      expect(nodeTestData.profile.read.method).toBe('GET');
      expect(nodeTestData.profile.read.statusCode).toBe(200);
      expect(nodeTestData.profile.read.response.name).toBeDefined();
      expect(nodeTestData.profile.read.response.gender).toBeDefined();
    });
  });

  describe('space.requests', function() {
    it('has a join method', function() {
      expect(nodeTestData.space.join).toBeDefined();
      expect(nodeTestData.space.join.requestUrl).toBeDefined();
      expect(nodeTestData.space.join.method).toBe('POST');
      expect(nodeTestData.space.join.statusCode).toBe(200);
      expect(nodeTestData.space.join.response.space.id).toBeDefined();
    });

    it('has a leave method', function() {
      expect(nodeTestData.space.leave).toBeDefined();
      expect(nodeTestData.space.leave.requestUrl).toBeDefined();
      expect(nodeTestData.space.leave.method).toBe('POST');
      expect(nodeTestData.space.leave.statusCode).toBe(204);
      expect(nodeTestData.space.leave.response).toBeNull();
    });

    it('has a create method', function() {
      expect(nodeTestData.space.create).toBeDefined();
      expect(nodeTestData.space.create.requestUrl).toBeDefined();
      expect(nodeTestData.space.create.method).toBe('POST');
      expect(nodeTestData.space.create.statusCode).toBe(201);
      expect(nodeTestData.space.create.request.name).toBeDefined();
      expect(nodeTestData.space.create.response._links.self).toBeDefined();
    });

    it('has a delete method', function() {
      expect(nodeTestData.space.delete).toBeDefined();
      expect(nodeTestData.space.delete.requestUrl).toBeDefined();
      expect(nodeTestData.space.delete.method).toBe('DELETE');
      expect(nodeTestData.space.delete.statusCode).toBe(204);
      expect(nodeTestData.space.delete.request).toBeNull();
      expect(nodeTestData.space.delete.response).toBeNull();
    });
  });
});