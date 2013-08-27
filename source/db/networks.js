var db = require('./dbConnector').db;

module.exports = {
	findAll: function (query, callback) {
		return db.networks.find({}, callback);
	},

	find: function (query, callback) {
		return db.networks.findOne(query, callback);
	},

	update: function (obj, callback) {
		return db.networks.findAndModify({
			query: { _id: obj._id },
			update: obj
		}, callback);
	},

	stream: function (query) {
		return db.networks.find(query || {});
	}
};