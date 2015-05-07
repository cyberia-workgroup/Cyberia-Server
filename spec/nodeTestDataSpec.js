var nodeTestData = require('../dist/tests/node-test-data');

describe('node test data formation', function() {
    it('should be defined', function() {
        expect(nodeTestData).toBeDefined();
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
    })
});