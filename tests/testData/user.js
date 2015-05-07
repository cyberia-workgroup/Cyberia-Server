var profile = {};
profile.create = {
    method: 'POST',
    requestUrl:'/me/profiles',
    request: {
        name: '<profileName>',
        gender: '<enum>'
    },
    response: { url: '/me/profiles/<profileId>' },
    statusCode: 201
};
profile.read = {
    method: 'GET',
    requestUrl:'/me/profiles/<profileId>',
    request: null,
    response: {
        name: 'characterName',
        gender: 'not specified'
    },
    statusCode: 200 // OK
};
profile.update = {
    method: 'PUT',
    requestUrl:'/me/profiles/<profileId>',
    request: profile.create.request,
    response: profile.read.response,
    statusCode: 200 // OK
};
profile.delete = {
    method: 'DELETE',
    requestUrl:'/me/profiles/<profileId>',
    request: null,
    response: null,
    statusCode: 204 // No Content
};
testData.profile = profile;