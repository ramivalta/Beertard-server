/*Availabilities = new Mongo.Collection('Availabilities');

Meteor.methods({
	addOrUpdateAvailability : function(beerId, venueId, timestamp) {
		var existingAvailability = Availabilities.findOne({'beerId':beerId, 'venueId':venueId});
		
		console.log('Add or update availability ' + JSON.stringify(existingAvailability));
		// Check weather availability exists or not. Insert or update accordingly
		if(typeof existingAvailability == 'undefined') {
			console.log('adding new availability);
			id = Availabilities.insert('beerId':beerId, 'venueId':venueId, 'timestamp':timestamp);
		} else {
			console.log('updating existing availability');
			Availabilities.update(existingAvailability._id, { $set: {'timestamp':timestamp}});
			id = existingAvailability._id;
		}
		
		return id;
	}
}); */
	