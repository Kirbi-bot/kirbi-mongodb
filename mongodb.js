const Mongoose = require('mongoose');

module.exports = function (Kirbi) {
	// Make sure there is a proper configuration value.
	if (!Kirbi.Config) {
		throw new Error('Kirbi does not have a config.json file.');
	} else if (!Kirbi.Config.databases.mongodb) {
		throw new Error('There is no mongodb settings specified in the config file.');
	} else if (!Kirbi.Config.databases.mongodb.connection) {
		throw new Error('There is no mongodb connection specified in the config file.');
	}

	// Get the settings and build the connection.
	const settings = Kirbi.Config.databases.mongodb;

	// Connect to the database
	Mongoose.connect(`mongodb://${settings.connection}`, (settings.options || {}), error => {
		if (error) {
			throw error;
		}
		console.log(`Successfully connected to MongoDB at ${settings.connection}.`);
	});

	// Specify the databases value if Kirbi doesn't already have one.
	if (!Kirbi.Databases) {
		Kirbi.Databases = {};
	}

	// Set the connection.
	Kirbi.Databases.mongodb = Mongoose.connection;

	const defaultDatabase = Kirbi.Config.databases.default;
	if (!defaultDatabase || defaultDatabase === 'mongodb') {
		// If the default database driver isn't specified or is mongodb,
		// set it as the current database
		Kirbi.Database = Kirbi.Databases.mongodb;
		console.log('Set current database driver to mongodb.');
	}
};
