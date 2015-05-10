var space = {};

space.join = {
  // Sever should register that this user is now a member of this chatroom,
  // Adding them to the userlist of anyone who is polling this chat
  method: 'POST',
  requestUrl: '/u/<universeId>/space/join',
  statusCode: 200, //OK, because we are just adding them to a list
  request: {
    // Client requests to join the room under a specified a user
    spaceId: '<spaceId>',
    userId: '<userId>' // We might get this from the session/token
  },
  response: {
    space: {
      id: '<spaceId>', // To compare to the request
      universeId: '<universeId>', // To compare to the request
      name: '<spaceName>',
      watchers: 0,
      participants: ['<userId>']
    }
  }
};

space.create = {
  method: 'POST',
  requestUrl: '/u/<universeId>/space',
  statusCode: 201,
  request: {
    name: 'Sol'
  },
  // Creators of a space should automatically be added to the userlist and the space automatically
  // added to their request update return. However, return the created Space, and it's URL.
  response: {
    id: '<spaceId>',
    universeId: '<universeId>',
    name: '<spaceName>',
    watchers: 0,
    participants: ['<userId>'],
    _links: {
      self: '/u/<universeId>/space/<spaceId>'
    }
  }
};

space.leave = {
  method: 'POST',
  requestUrl: '/u/<universeId>/space/leave',
  statusCode: 204, //No-content
  request: {
    spaceId: '<spaceId>',
    userId: '<userId>'
  },
  response: null
};

space.delete = {
  // Admin only action?
  method: 'DELETE',
  requestUrl: '/u/<universeId>/space/<spaceId>',
  statusCode: 204,
  request: null,
  response: null
};

testData.space = space;