(function (testData, undefined) {
    'use strict';
    testData.createCharacterProfile = {
        requestMethod: 'POST',
        requestUrl:'/me/profiles',
        request: {
            name: '<profileName>',
            gender: '<integer>'
        },
        response: { url: '/me/profiles/<profileId>' }
    };

})(testData);