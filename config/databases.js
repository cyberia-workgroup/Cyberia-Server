var database = {
    mongo: {
        host: 'localhost',
        port: '27017',
        database: 'testing',
        uri: ['mongodb://', database.mongo.host, ':', database.mongo.port, '/', database.mongo.database].join('')
    }
};

module.exports = database;