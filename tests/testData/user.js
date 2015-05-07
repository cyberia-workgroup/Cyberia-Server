var profile = {}, user = {};

user.create = {
    method:'POST',
    requestUrl: '/register',
    statusCode: 200, //OK
    request: {
        // FIGURE OUT WHAT GOES HERE!
        name: "Jane Doe",
        email: "example@example.com"
    },
    response: {
        name: "Jane Doe",
        email: "example@example.com",
        accountType: '<oauth type>'
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
        profiles: [
            {
                profileId: "<profileId>",
                name: 'characterName',
                gender: 'not specified'
            }
        ]
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
    response : {
        email: 'example@example.com',
    }
};

user.delete = {
    method: 'DELETE',
    requestUrl:'/me/',
    cookies: {auth: cookie.auth},
    request: null,
    response: null,
    statusCode: 204 // No Content
}



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
testData.user = user;