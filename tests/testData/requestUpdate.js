/**
 * Created by RKGladson on 5/5/15.
 * Javascript is no excuse to write bad code.™
 */
testData.requestUpdate = {
    method: 'GET',
    requestUrl: '/user/null/posts?since=' + getISODate(),
    request: null,
    response: {
        update: [
            {
                postId: '<postId>',
                spaceId: '<spaceId>',
                universeId: '<universeId>',
                posted: getISODate(),
                updated: getISODate(),
                user: '<id>',
                profile: '<profileId>',
                message: '<strong>First</strong> <small>post</small>!',
                passedOn: false

            }
        ],
        userMap: {
            '<id>': {
                accountName: 'Jane Doe',
                profileMap: {
                    '<profileId>': {
                        name: 'Sara Smith',
                        gender: 0,
                        color: '#FF3030'
                    }
                }
            }
        },
        universeMap: {
            '<universeId>': {
                'name': 'A',
                spaceMap: {
                    '<spaceId>': {
                        'name': 'Sol',
                        watchers: 0,
                        participants: ['<userId>']
                    }
                }
            }
        }
    },
    statusCode: 200 // OK
};
