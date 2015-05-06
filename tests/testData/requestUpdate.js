/**
 * Created by RKGladson on 5/5/15.
 * Javascript is no excuse to write bad code.™
 */
var testData = testData || {};

(function (testData, undefined) {
    'use strict';
    testData.requestUpdate = {
        requestUrl:'/user/null/posts?since='+Date.now().toISOString(),
        request: null,
        response: {
            update: [
                {
                    posted: Date.now().toISOString(),
                    updated: Date.now().toISOString(),
                    user: '<id>',
                    profile: '<profileId>',
                    message: '<strong>First</strong> <small>post</small>!',
                    passedOn: false
                }
            ]
        },
        userMap: {
            '<id>': {
                profileMap:{
                    '<profileId>': {
                        name: 'Sara Smith',
                        gender: 0,
                        color: '#FF3030'
                    }
                }
            }

        }

    };
})(testData);