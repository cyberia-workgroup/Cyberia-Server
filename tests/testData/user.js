var profile = {}, user = {};

user.create = {
    method: 'POST',
    requestUrl: '/register',
    statusCode: 200, //OK
    request: {
        // FIGURE OUT WHAT GOES HERE!
        email: "jdoe@domain.tdl",
        username: 'jdoe',
        password: '********',
        oauthType: 'google|tumblr|github|facebook|local'
    },
    response: {
        name: "Jane Doe",
        email: "example@example.com",
        accountType: '<oauth type>'
    }
};

user.readSelf = {
    method: 'GET',
    requestUrl: '/me',
    statusCode: 200, //OK
    request: null, // Data should be in session? Or AuthToken? Or maybe header
    response: {
        userId: '<userId>',
        name: 'Jane Doe',
        _links: {
            profiles: [
                {
                    id: '<profileId>',
                    name: '<characterName>',
                    gender: '<gender>',
                    color: '#0000FF',
                    url: 'user/<userId>/profile/<profileId>'
                }
            ]
        }
    }
};

user.read = {
    method: 'GET',
    requestUrl: "/user/<userId>",
    statusCode: 200, // OK
    request: null,
    response: {
        userId: '<userId>',
        name: "Jane Doe",
        _links: {
            profiles: [
                {
                    id: '<profileId>',
                    name: '<characterName>',
                    gender: '<gender>',
                    color: '#0000FF',
                    url: 'user/<userId>/profile/<profileId>'
                }
            ]
        }
    }
};

user.update = {
    method: 'PUT',
    requestUrl: '/me',
    statusCode: 200, // OK
    cookies: {auth: cookie.auth},
    request: {
        email: 'example@example.com'
    },
    response: {
        email: 'example@example.com'
    }
};

user.delete = {
    method: 'DELETE',
    requestUrl: '/me',
    cookies: {auth: cookie.auth},
    request: null,
    response: null,
    statusCode: 204 // No Content
};


profile.create = {
    method: 'POST',
    requestUrl: '/me/profiles',
    request: {
        name: '<profileName>',
        gender: '<enum>'
    },
    response: {url: '/me/profiles/<profileId>'},
    statusCode: 201
};
profile.read = {
    method: 'GET',
    requestUrl: '/me/profiles/<profileId>',
    request: null,
    response: {
        name: 'characterName',
        gender: 'not specified'
    },
    statusCode: 200 // OK
};
profile.update = {
    method: 'PUT',
    requestUrl: '/me/profiles/<profileId>',
    request: profile.create.request,
    response: profile.read.response,
    statusCode: 200 // OK
};
profile.delete = {
    method: 'DELETE',
    requestUrl: '/me/profiles/<profileId>',
    request: null,
    response: null,
    statusCode: 204 // No Content
};

testData.profile = profile;
testData.user = user;