(function (testData, undefined) {
    'use strict';
    testData.createCharacterProfile = {
        requestMethod: 'POST',
        requestUrl:'/me/profiles',
        request: {

        },
        response: { url: '/me/profiles/<profileId>' }
    };

})(testData);